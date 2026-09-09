import { Check, Crown, ArrowUpRight } from "lucide-react";
import { NAPOLEON_AFFILIATE, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const features = ["SSD NVMe veloz", "SSL grátis", "Suporte nacional", "Uptime garantido"];

export function Napoleon() {
  return (
    <section className="napoleon section" id="hospedagem">
      <div className="container">
        <Reveal className="wrap">
          <div>
            <span className="badge-host">
              <Crown /> Hospedagem recomendada
            </span>
            <h2>
              Seu site rápido e estável com a{" "}
              <span className="text-grad">Napoleon Host</span>
            </h2>
            <p>
              A QeeL Tech recomenda a Napoleon Host para hospedar seus projetos: servidores de
              alta performance, painel simples e suporte que resolve. A base ideal para sites,
              lojas e sistemas que criamos para você.
            </p>
            <ul className="host-features">
              {features.map((f) => (
                <li key={f}>
                  <Check /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="host-visual">
            <div className="crown text-grad">
              Napoleon
              <br />
              Host
            </div>
            <div className="host-actions">
              <a
                className="btn btn-primary"
                href={NAPOLEON_AFFILIATE}
                target="_blank"
                rel="noopener sponsored"
              >
                Contratar hospedagem
                <ArrowUpRight />
              </a>
              <a
                className="btn btn-wa btn-sm"
                href={waLink(
                  "Olá! Quero ajuda da QeeL Tech para escolher e configurar a hospedagem Napoleon Host."
                )}
                target="_blank"
                rel="noopener"
              >
                Falar com um especialista
              </a>
            </div>
            <p className="disc">Link de indicação oficial · configuramos tudo para você</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
