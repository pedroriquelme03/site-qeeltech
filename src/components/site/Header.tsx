"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#hospedagem", label: "Hospedagem" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container nav">
          <a href="#home" className="brand" aria-label="QeeL Tech — início">
            <Image src="/logo-white.svg" alt="QeeL" width={110} height={30} priority />
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            {links.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a
              className="btn btn-wa btn-sm"
              href={waLink("Olá! Vim pelo site da QeeL Tech e gostaria de conversar.")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Abrir menu">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <button className="close" onClick={() => setOpen(false)} aria-label="Fechar menu">
          <X />
        </button>
        {links.map((l) => (
          <a href={l.href} key={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn-wa"
          href={waLink("Olá! Vim pelo site da QeeL Tech e gostaria de conversar.")}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          Falar no WhatsApp
        </a>
      </div>
    </>
  );
}
