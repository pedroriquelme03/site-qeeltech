import Image from "next/image";
import { EMAIL, NAPOLEON_AFFILIATE, WA_DISPLAY, waLink } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/LogoQeel_Bold.png" alt="QeeL Tech" width={120} height={45} />
            <p>
              Software house especializada em apps, sites e sistemas web. Tecnologia sob medida
              para o seu negócio crescer.
            </p>
            <div className="footer-social">
              <a href={waLink("Olá QeeL Tech!")} target="_blank" rel="noopener" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.instagram.com/qeeltech/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Serviços</h4>
            <a href="#servicos">Aplicativos mobile</a>
            <a href="#servicos">Sites WordPress</a>
            <a href="#servicos">Sistemas web</a>
            <a href="#servicos">Criação de plugins</a>
            <a href="#servicos">SEO</a>
          </div>
          <div className="footer-col">
            <h4>Produtos</h4>
            <a href="#produtos">Loja virtual</a>
            <a href="#produtos">Cardápio digital</a>
            <a href="#produtos">Sistema de delivery</a>
            <a href="#produtos">Agendamento online</a>
            <a href="#produtos">CRM</a>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href={waLink("Olá! Vim pelo site da QeeL Tech.")} target="_blank" rel="noopener">
              {WA_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={NAPOLEON_AFFILIATE} target="_blank" rel="noopener sponsored">
              Hospedagem Napoleon Host
            </a>
            <a href="#contato">Solicitar orçamento</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} QeeL Tech. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
