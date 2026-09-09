import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink("Olá! Vim pelo site da QeeL Tech e gostaria de mais informações.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
    >
      <span className="wa-tip">Fale conosco!</span>
      <WhatsAppIcon />
    </a>
  );
}
