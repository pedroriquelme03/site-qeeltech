"use client";

// Source: 21st.dev — "Constellation Field" by @mengto (MengTo/threeui, MIT)
// https://21st.dev/@mengto/components/constellation-field
// Recolored for QeeL Tech (violet nodes/links on deep-purple ground).

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type NeuformMode = "dark" | "light";
type NeuformModePreference = NeuformMode | "auto";

export type ConstellationFieldProps = {
  mode?: NeuformModePreference;
  speed?: number;
  size?: number;
  gap?: number;
  length?: number;
  density?: number;
  strokeWidth?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

const DEFAULTS = {
  mode: "dark" as NeuformMode,
  speed: 1,
  size: 1,
  gap: 2,
  length: 1,
  density: 1,
  strokeWidth: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

// QeeL palette
const NODE_COLOR = "#C4B5FD";
const LINK_COLOR = "#8B5CF6";
const DARK_GROUND = "#0A0118";
const LIGHT_PAPER = "#eef1f6";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function scaleCount(base: number, density: number, minimum = 1) {
  return Math.max(minimum, Math.round(base * density));
}

function resolveMode(
  mode: NeuformMode | number | string | undefined,
  fallback: NeuformMode = "dark"
): NeuformMode {
  if (mode === undefined || mode === null) return fallback;
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

function readAutomaticMode(): NeuformMode {
  if (typeof document === "undefined" || typeof window === "undefined") return "dark";
  const root = document.documentElement;
  const declared = root.dataset.scheme ?? root.dataset.theme;
  if (declared === "light" || declared === "dark") return declared;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useAutomaticMode(enabled: boolean) {
  const [mode, setMode] = useState<NeuformMode>(readAutomaticMode);

  useEffect(() => {
    if (!enabled || typeof document === "undefined" || typeof window === "undefined")
      return undefined;
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setMode(readAutomaticMode());
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["data-scheme", "data-theme"] });
    media.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [enabled]);

  return mode;
}

function resolveBackground(mode: NeuformMode) {
  return mode === "light" ? LIGHT_PAPER : DARK_GROUND;
}

/** Isolated canvas source (constellation-field). Only #constellationCanvas is kept at runtime. */
const CONSTELLATION_FIELD_SOURCE = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Constellation Field</title>
</head>
<body style="margin:0;overflow:hidden;background:${DARK_GROUND};">
    <div style="position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center, #14082B 0%, ${DARK_GROUND} 100%);"></div>
    <canvas id="constellationCanvas" style="position:fixed;inset:0;width:100%;height:100%;"></canvas>

    <script>
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160;
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }

        window.addEventListener('resize', () => { resize(); initNodes(); });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        document.addEventListener('mousemove', e => { pointer.x = e.clientX; pointer.y = e.clientY; });
        document.addEventListener('mouseleave', () => { pointer.x = -1000; pointer.y = -1000; });

        function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';

            ctx.strokeStyle = '${LINK_COLOR}';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.14 + (1 - d/LINK) * 0.42;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.006;
                    node.y -= (node.y - pointer.y) * 0.006;
                }

                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '${NODE_COLOR}';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) { animateCanvas(); } else { animateCanvas(); }
    </script>
</body>
</html>`;

function patchConstellationField(
  source: string,
  {
    size,
    length,
    density,
    strokeWidth,
  }: { size: number; length: number; density: number; strokeWidth: number }
) {
  return source
    .replace("const LINK = 160;", `const LINK = ${Math.round(160 * length)};`)
    .replace(
      "const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",
      `const MAX_NODES = window.innerWidth < 768 ? ${scaleCount(40, density, 8)} : ${scaleCount(85, density, 12)};`
    )
    .replace(
      "radius: Math.random() * 2.4 + 1.8",
      `radius: (Math.random() * 2.4 + 1.8) * ${size}`
    )
    .replace("ctx.lineWidth = 1;", `ctx.lineWidth = ${Number(Math.max(0.25, strokeWidth).toFixed(2))};`)
    .replace(
      "node.x += node.vx;",
      "node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);"
    )
    .replace(
      "node.y += node.vy;",
      "node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);"
    );
}

function buildDocument(knobs: {
  speed: number;
  size: number;
  length: number;
  density: number;
  strokeWidth: number;
}) {
  const controlsJson = JSON.stringify({ speed: knobs.speed }).replace(/</g, "\\u003c");
  const patched = patchConstellationField(CONSTELLATION_FIELD_SOURCE, {
    size: knobs.size,
    length: knobs.length,
    density: knobs.density,
    strokeWidth: knobs.strokeWidth,
  });
  const controlScript = `<script>
(function () {
  var controls = ${controlsJson};
  window.__SF_CONTROLS = controls;
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
  });
})();
</script>`;
  return patched.replace(/<head([^>]*)>/i, `<head$1>${controlScript}`);
}

export default function ConstellationField({
  mode,
  speed = DEFAULTS.speed,
  size = DEFAULTS.size,
  gap = DEFAULTS.gap,
  length = DEFAULTS.length,
  density = DEFAULTS.density,
  strokeWidth = DEFAULTS.strokeWidth,
  opacity = DEFAULTS.opacity,
  hue = DEFAULTS.hue,
  saturation = DEFAULTS.saturation,
  brightness = DEFAULTS.brightness,
  className,
  style,
}: ConstellationFieldProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const requestedMode = mode ?? DEFAULTS.mode;
  const automaticMode = useAutomaticMode(requestedMode === "auto");
  const resolvedMode =
    requestedMode === "auto" ? automaticMode : resolveMode(requestedMode, DEFAULTS.mode);
  const background = resolveBackground(resolvedMode);
  const safeSpeed = clamp(speed, 0, 3);
  const safeSize = clamp(size, 0.05, 200);
  const safeLength = clamp(length, 0.35, 2.5);
  const safeDensity = clamp(density, 0.25, 2.5);
  const safeStrokeWidth = clamp(strokeWidth, 0.25, 8);
  const safeOpacity = clamp(opacity, 0.05, 1);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);

  const source = useMemo(
    () =>
      buildDocument({
        speed: DEFAULTS.speed,
        size: safeSize,
        length: safeLength,
        density: safeDensity,
        strokeWidth: safeStrokeWidth,
      }),
    [safeDensity, safeLength, safeSize, safeStrokeWidth]
  );

  useEffect(() => {
    const frame = iframeRef.current?.contentWindow;
    if (!frame) return;
    frame.postMessage({ type: "threeui-controls", controls: { speed: safeSpeed } }, "*");
  }, [safeSpeed, source]);

  const filter =
    safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
      ? undefined
      : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  // gap intentionally accepted for API compatibility
  void gap;

  return (
    <iframe
      ref={iframeRef}
      className={className}
      title="Constellation Field"
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        opacity: safeOpacity,
        filter,
        ...style,
      }}
    />
  );
}
