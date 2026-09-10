"use client";

import Image from "next/image";
import { clients } from "@/lib/site";

export function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="clients" id="clientes" aria-label="Clientes atendidos">
      <div className="container">
        <p className="kicker">Empresas que já confiaram na QeeL Tech</p>
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((c, i) => (
              <span
                className="client-logo"
                key={`${c.src}-${i}`}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={180}
                  height={48}
                  className="client-logo-img"
                  draggable={false}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
