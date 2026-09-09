import {
  Smartphone, Globe, Puzzle, Code2, Mail, ServerCog, Search,
  ShoppingCart, Utensils, Bike, Clock, Wallet, CalendarDays, LayoutDashboard,
  FileText, Ticket, TabletSmartphone, SquareParking, KeyRound, Link2, ListChecks,
  SlidersHorizontal, Car, LibraryBig, Building2, MonitorPlay, Users,
  Rocket, Newspaper, Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/site";

export const iconMap: Record<IconKey, LucideIcon> = {
  mobile: Smartphone,
  wordpress: Globe,
  plugin: Puzzle,
  system: Code2,
  mail: Mail,
  server: ServerCog,
  seo: Search,
  cart: ShoppingCart,
  menu: Utensils,
  delivery: Bike,
  clock: Clock,
  finance: Wallet,
  calendar: CalendarDays,
  dashboard: LayoutDashboard,
  quote: FileText,
  ticket: Ticket,
  totem: TabletSmartphone,
  parking: SquareParking,
  host: KeyRound,
  link: Link2,
  checklist: ListChecks,
  admin: SlidersHorizontal,
  car: Car,
  catalog: LibraryBig,
  realestate: Building2,
  signage: MonitorPlay,
  crm: Users,
  landing: Rocket,
  blog: Newspaper,
  ai: Sparkles,
};

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21H17.5v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 6.3A7.9 7.9 0 0 0 4.9 16L4 20l4.1-1.1a7.9 7.9 0 0 0 3.8 1 8 8 0 0 0 5.7-13.6ZM12 18.5c-1.2 0-2.4-.3-3.4-.9l-.2-.1-2.4.6.6-2.3-.2-.2a6.6 6.6 0 1 1 5.6 3.2Zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4.1a5.4 5.4 0 0 1-2.7-2.3c-.2-.3.2-.3.5-1 .1-.1 0-.3 0-.4l-.6-1.4c-.2-.4-.3-.3-.5-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.7 1.8c0 1 .8 2.1 1 2.3.1.1 1.5 2.4 3.7 3.3 1.4.6 1.9.6 2.6.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}
