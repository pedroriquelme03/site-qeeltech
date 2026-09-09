export const WA_NUMBER = "5545991254300";
export const WA_DISPLAY = "(45) 99125-4300";
export const NAPOLEON_AFFILIATE = "https://painel.napoleon.com.br/aff.php?aff=1181";
export const EMAIL = "contato@qeel.com.br";

export function waLink(text?: string) {
  const msg = text || "Olá! Vim pelo site da QeeL Tech.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export type IconKey =
  | "mobile" | "wordpress" | "plugin" | "system" | "mail" | "server" | "seo"
  | "cart" | "menu" | "delivery" | "clock" | "finance" | "calendar" | "dashboard"
  | "quote" | "ticket" | "totem" | "parking" | "host" | "link" | "checklist"
  | "admin" | "car" | "catalog" | "realestate" | "signage" | "crm"
  | "landing" | "blog" | "ai";

export interface Service {
  icon: IconKey;
  title: string;
  desc: string;
  wa: string;
}

export interface Product {
  icon: IconKey;
  tag: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { icon: "mobile", title: "Aplicativos Mobile", desc: "Apps Android e iOS rápidos e intuitivos, do MVP à publicação nas lojas.", wa: "Quero desenvolver um aplicativo mobile com a QeeL Tech." },
  { icon: "wordpress", title: "Sites WordPress", desc: "Sites institucionais e blogs profissionais, gerenciáveis e otimizados.", wa: "Quero um site WordPress com a QeeL Tech." },
  { icon: "plugin", title: "Criação de Plugins", desc: "Plugins sob medida para estender e automatizar o seu WordPress.", wa: "Preciso de um plugin personalizado. Podemos falar?" },
  { icon: "system", title: "Sistemas Web", desc: "Plataformas e sistemas sob medida para digitalizar a sua operação.", wa: "Quero desenvolver um sistema web com a QeeL Tech." },
  { icon: "mail", title: "E-mail Profissional", desc: "E-mails com o seu domínio: mais credibilidade e entregabilidade.", wa: "Quero configurar e-mail profissional com a QeeL Tech." },
  { icon: "server", title: "Suporte ao Servidor", desc: "Configuração, monitoramento e suporte da sua hospedagem sem dor de cabeça.", wa: "Preciso de suporte ao meu servidor de hospedagem." },
  { icon: "seo", title: "SEO", desc: "Otimização para o Google: mais visibilidade e clientes chegando até você.", wa: "Quero melhorar meu SEO com a QeeL Tech." },
];

export const products: Product[] = [
  { icon: "cart", tag: "E-commerce", title: "Loja Virtual", desc: "Sua loja online completa, com pagamentos, estoque e frete integrados." },
  { icon: "menu", tag: "Food", title: "Cardápio Digital", desc: "Cardápio online com QR Code, fotos e atualização em tempo real." },
  { icon: "delivery", tag: "Food", title: "Sistema de Delivery", desc: "Receba pedidos direto, sem taxas abusivas de marketplace." },
  { icon: "clock", tag: "Gestão", title: "Controle de Horários", desc: "Registro de ponto e jornada dos funcionários de forma simples e segura." },
  { icon: "finance", tag: "Gestão", title: "Sistema Financeiro", desc: "Fluxo de caixa, contas a pagar e receber e relatórios num só lugar." },
  { icon: "calendar", tag: "Agenda", title: "Agendamento Online", desc: "Clientes agendam sozinhos 24h por dia, com lembretes automáticos." },
  { icon: "dashboard", tag: "Gestão", title: "Dashboard Operacional", desc: "Todos os indicadores do seu negócio em um painel visual e em tempo real." },
  { icon: "quote", tag: "Vendas", title: "Sistema de Orçamento", desc: "Crie e envie orçamentos profissionais em minutos, com aprovação online." },
  { icon: "ticket", tag: "Eventos", title: "Portal de Ingressos", desc: "Venda ingressos online com check-in por QR Code no dia do evento." },
  { icon: "totem", tag: "Autoatendimento", title: "Totem de Autoatendimento", desc: "Reduza filas com pedidos e pagamentos feitos pelo próprio cliente." },
  { icon: "parking", tag: "Gestão", title: "Sistema de Estacionamento", desc: "Controle de entrada, saída, tarifas e mensalistas automatizado." },
  { icon: "host", tag: "Hospitalidade", title: "Sistema do Anfitrião", desc: "Gestão de reservas, hóspedes e check-in para pousadas e locações." },
  { icon: "link", tag: "Marketing", title: "Link na Bio", desc: "Uma página só sua reunindo todos os seus links e canais de venda." },
  { icon: "checklist", tag: "Operação", title: "Sistema de Checklist", desc: "Padronize rotinas e tarefas da equipe com checklists digitais." },
  { icon: "admin", tag: "WordPress", title: "Plugin de Painel Admin", desc: "Personalize o painel do WordPress com a identidade e as funções do cliente." },
  { icon: "car", tag: "Automotivo", title: "Loja de Veículos", desc: "Vitrine online de veículos com filtros, fotos e propostas pelo site." },
  { icon: "catalog", tag: "Vendas", title: "Catálogo Digital", desc: "Catálogo de produtos elegante e sempre atualizado para compartilhar." },
  { icon: "realestate", tag: "Imobiliária", title: "Sistema para Imobiliárias", desc: "Site e sistema de imóveis com busca avançada e gestão de leads." },
  { icon: "signage", tag: "Mídia", title: "Sinalização Digital", desc: "Gerencie telas e painéis de conteúdo remotamente (digital signage)." },
  { icon: "crm", tag: "Vendas", title: "CRM", desc: "Organize contatos, funil de vendas e relacionamento com clientes." },
  { icon: "landing", tag: "Marketing", title: "Landing Page para Campanhas", desc: "Páginas focadas em conversão para anúncios e lançamentos, prontas para vender." },
  { icon: "blog", tag: "Conteúdo", title: "Blog", desc: "Blog profissional e otimizado para SEO, fácil de gerenciar e publicar." },
  { icon: "ai", tag: "Inteligência Artificial", title: "Automação com IA", desc: "Automatize atendimento, tarefas e fluxos do seu negócio com inteligência artificial." },
];

export const clients = [
  "Bella Massa", "AutoPrime", "Studio Vida", "Rota Delivery", "Clínica Sorriso",
  "Imob Central", "TicketPro", "MegaPark", "FoodExpress", "Barbearia Rei", "Óptica Visão", "Mercado Bom",
];
