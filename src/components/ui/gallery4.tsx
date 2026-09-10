"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  id?: string;
  className?: string;
  ctaLabel?: string;
}

export function Gallery4({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences.",
  items,
  id,
  className,
  ctaLabel = "Contratar",
}: Gallery4Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-[var(--muted)]">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
              aria-label="Anterior"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
              aria-label="Próximo"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="group rounded-xl"
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl border border-[var(--border)] md:aspect-[5/4] lg:aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-[#08010F] via-[#13032D]/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 font-[family-name:var(--font-display)] text-xl font-semibold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-white/80 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-medium text-[var(--violet-lt)]">
                        {ctaLabel}{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 5 }, (_, index) => {
            const total = Math.max(items.length - 1, 1);
            const activeDot = Math.min(
              4,
              Math.floor((currentSlide / total) * 5)
            );
            const targetSlide = Math.round((index / 4) * total);

            return (
              <button
                key={index}
                type="button"
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  activeDot === index
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--primary)]/25"
                )}
                onClick={() => carouselApi?.scrollTo(targetSlide)}
                aria-label={`Ir à seção ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
