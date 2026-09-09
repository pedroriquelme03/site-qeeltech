import { ArrowRight } from "lucide-react";
import { services, waLink } from "@/lib/site";
import { iconMap } from "@/components/icons";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">O que fazemos</span>
          <h2>
            Serviços sob medida para o <span className="text-grad">seu negócio</span>
          </h2>
          <p>Da ideia à publicação: desenvolvemos, integramos e damos suporte à sua operação digital.</p>
        </Reveal>
        <div className="grid-services">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal className="card" delay={((i % 3) || undefined) as 1 | 2 | undefined} key={s.title}>
                <div className="ico">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a className="card-link" href={waLink(s.wa)} target="_blank" rel="noopener">
                  Contratar <ArrowRight />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
