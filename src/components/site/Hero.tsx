"use client";

import ConstellationField from "@/components/ui/constellation-field";
import { TextRotate } from "@/components/ui/text-rotate";
import { WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const words = ["aplicativos", "sites", "sistemas web", "lojas virtuais", "plugins", "experiências"];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <ConstellationField mode="dark" density={1} length={1} speed={1} />
      </div>
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />

      <div className="container">
        <div className="hero-inner">
          <Reveal>
            <span className="eyebrow">Software house · Foz do Iguaçu &amp; região</span>
          </Reveal>
          <Reveal delay={1} as="h1">
            <span className="hero-h1">Tecnologia que constrói</span>
            <span className="rotator-line">
              <TextRotate
                texts={words}
                mainClassName="hero-rotate"
                staggerFrom="last"
                staggerDuration={0.02}
                rotationInterval={2400}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
              />
            </span>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Na <b>QeeL Tech</b> transformamos ideias em produtos digitais: apps, sites, sistemas
              web e soluções sob medida que colocam o seu negócio para crescer.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-actions">
              <a
                className="btn btn-wa"
                href={waLink(
                  "Olá! Quero tirar minha ideia do papel com a QeeL Tech. Podemos conversar?"
                )}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Começar meu projeto
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços
              </a>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-stats">
              <div className="stat">
                <Counter target={120} />
                <span>Projetos entregues</span>
              </div>
              <div className="stat">
                <Counter target={80} />
                <span>Clientes atendidos</span>
              </div>
              <div className="stat">
                <Counter target={20} />
                <span>Soluções digitais</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden>
        <span className="mouse" />
        Role
      </div>
    </section>
  );
}
