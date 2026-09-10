"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { EMAIL, WA_DISPLAY, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "./Reveal";

const subjects = [
  "Aplicativo mobile",
  "Site WordPress",
  "Sistema web",
  "Loja virtual / E-commerce",
  "Criação de plugin",
  "E-mail profissional",
  "Suporte / Hospedagem",
  "SEO",
  "Outro produto ou serviço",
];

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: subjects[0],
    mensagem: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) return;
    const text =
      `Olá, QeeL Tech! 👋\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Telefone:* ${form.telefone}\n` +
      (form.email ? `*E-mail:* ${form.email}\n` : "") +
      `*Interesse:* ${form.assunto}\n` +
      (form.mensagem ? `*Mensagem:* ${form.mensagem}` : "");
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-aside">
            <h2>
              Vamos tirar sua ideia <span className="text-grad">do papel?</span>
            </h2>
            <p>
              Conte o que você precisa. Respondemos rápido e sem enrolação — do orçamento à
              entrega, a QeeL Tech acompanha cada etapa.
            </p>
            <div className="contact-methods">
              <a
                className="contact-method"
                href={waLink("Olá! Gostaria de solicitar um orçamento com a QeeL Tech.")}
                target="_blank"
                rel="noopener"
              >
                <span className="cm-ico">
                  <WhatsAppIcon />
                </span>
                <div>
                  <b>WhatsApp</b>
                  <span>{WA_DISPLAY} · resposta rápida</span>
                </div>
              </a>
              <div className="contact-method">
                <span className="cm-ico">
                  <Mail />
                </span>
                <div>
                  <b>E-mail</b>
                  <span>{EMAIL}</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="cm-ico">
                  <MapPin />
                </span>
                <div>
                  <b>Atendimento</b>
                  <span>Atendimento presencial de Foz do Iguaçu a Cascavel · remoto em todo o Brasil</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" value={form.nome} onChange={set("nome")} placeholder="Seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <input
                    id="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={set("telefone")}
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="voce@email.com"
                />
              </div>
              <div className="field">
                <label htmlFor="assunto">O que você precisa?</label>
                <select id="assunto" value={form.assunto} onChange={set("assunto")}>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={set("mensagem")}
                  placeholder="Conte um pouco sobre o seu projeto..."
                />
              </div>
              <button type="submit" className="btn btn-wa">
                <WhatsAppIcon />
                Enviar pelo WhatsApp
              </button>
              <p className="form-note">
                Ao enviar, sua mensagem abre no WhatsApp já preenchida.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
