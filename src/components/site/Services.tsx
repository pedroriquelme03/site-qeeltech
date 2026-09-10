"use client";

import CircularSplitRoll from "@/components/ui/circular-split-roll";
import { services } from "@/lib/site";

const serviceImages: Record<string, string> = {
  mobile:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&h=600&q=80",
  wordpress:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=600&q=80",
  plugin:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=600&q=80",
  system:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=600&q=80",
  mail: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&h=600&q=80",
  server:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=600&q=80",
  seo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&h=600&q=80",
};

const items = services.map((s, i) => ({
  id: i,
  title: s.title,
  image: serviceImages[s.icon] ?? serviceImages.system,
  alt: s.title,
}));

export function Services() {
  return (
    <CircularSplitRoll
      id="servicos"
      items={items}
      radius={420}
      cardSize={210}
      sectionHeight={90}
      background="transparent"
      titleColor="var(--text)"
      className="border-y border-[var(--border)]"
    />
  );
}
