"use client";

import { Gallery4 } from "@/components/ui/gallery4";
import { products, waLink } from "@/lib/site";

const productImages: Record<string, string> = {
  cart: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=80",
  menu: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&h=600&q=80",
  delivery:
    "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&h=600&q=80",
  clock:
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&h=600&q=80",
  finance:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600&q=80",
  calendar:
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&h=600&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80",
  quote:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=600&q=80",
  ticket:
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&h=600&q=80",
  totem:
    "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&h=600&q=80",
  parking:
    "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&h=600&q=80",
  host: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=600&q=80",
  link: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=600&q=80",
  checklist:
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&h=600&q=80",
  admin:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80",
  car: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&h=600&q=80",
  catalog:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=600&q=80",
  realestate:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600&q=80",
  signage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80",
  crm: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600&q=80",
  landing:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&h=600&q=80",
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&h=600&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600&q=80",
};

const items = products.map((p, i) => ({
  id: `${p.icon}-${i}`,
  title: p.title,
  description: p.desc,
  href: waLink(
    `Tenho interesse no produto "${p.title}" da QeeL Tech. Podemos conversar?`
  ),
  image: productImages[p.icon] ?? productImages.dashboard,
}));

export function Products() {
  return (
    <Gallery4
      id="produtos"
      className="products border-y border-[var(--border)] bg-[rgba(19,3,45,.3)]"
      title="Produtos digitais que geram resultado"
      description="Sistemas e plataformas prontas para acelerar o seu negócio — personalizamos cada uma para a sua realidade."
      items={items}
      ctaLabel="Contratar"
    />
  );
}
