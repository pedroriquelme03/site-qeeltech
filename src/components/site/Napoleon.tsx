import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NAPOLEON_AFFILIATE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Napoleon() {
  return (
    <section className="napoleon section" id="hospedagem">
      <div className="container">
        <Reveal className="napoleon-card">
          <a
            href={NAPOLEON_AFFILIATE}
            target="_blank"
            rel="noopener sponsored"
            className="napoleon-card-media"
            aria-label="Napoleon Host — ver planos"
          >
            <Image
              src="/napoleon-card.png"
              alt="Napoleon Host — hospedagem profissional"
              width={400}
              height={333}
              className="napoleon-card-img"
              sizes="400px"
            />
          </a>

          <div className="napoleon-card-body">
            <span className="napoleon-card-eyebrow">Hospedagem recomendada</span>
            <h2>O melhor servidor para o seu negócio!</h2>
            <p>
              Conquiste a máxima performance de suas aplicações online com nossa
              hospedagem dedicada.
            </p>
            <a
              className="btn btn-primary"
              href={NAPOLEON_AFFILIATE}
              target="_blank"
              rel="noopener sponsored"
            >
              Nossos Planos
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
