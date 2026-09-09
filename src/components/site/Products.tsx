"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { products, waLink } from "@/lib/site";
import { iconMap } from "@/components/icons";
import { Reveal } from "./Reveal";

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export function Products() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const total = products.length;

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="products section" id="produtos">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Soluções prontas</span>
          <h2>
            Produtos digitais que <span className="text-grad">geram resultado</span>
          </h2>
          <p>
            Sistemas e plataformas prontas para acelerar o seu negócio — personalizamos cada uma
            para a sua realidade.
          </p>
        </Reveal>

        <Reveal className="slider">
          <div className="slider-viewport" ref={emblaRef}>
            <div className="slider-track">
              {products.map((p, i) => {
                const Icon = iconMap[p.icon];
                return (
                  <div className="product-slide" key={p.title}>
                    <div className="product-card">
                      <div className="product-visual">
                        <span className="pv-tag">{p.tag}</span>
                        <div className="pv-icon">
                          <Icon />
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="pcount">
                          Produto {pad(i + 1)} / {total}
                        </div>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="actions">
                          <a
                            className="btn btn-primary btn-sm"
                            href={waLink(
                              `Tenho interesse no produto "${p.title}" da QeeL Tech. Podemos conversar?`
                            )}
                            target="_blank"
                            rel="noopener"
                          >
                            Contratar <ArrowRight />
                          </a>
                          <a className="btn btn-ghost btn-sm" href="#contato">
                            Saber mais
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="slider-nav">
            <button
              className="slider-btn"
              onClick={() => embla?.scrollPrev()}
              aria-label="Produto anterior"
            >
              <ChevronLeft />
            </button>
            <span className="slider-count">
              {pad(selected + 1)} / {pad(total)}
            </span>
            <button
              className="slider-btn"
              onClick={() => embla?.scrollNext()}
              aria-label="Próximo produto"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="slider-dots" role="tablist">
            {products.map((p, i) => (
              <button
                key={p.title}
                className={`dot-btn${i === selected ? " active" : ""}`}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Ir ao produto ${i + 1}`}
                role="tab"
                aria-selected={i === selected}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
