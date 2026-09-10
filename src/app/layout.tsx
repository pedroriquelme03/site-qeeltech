import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QeeL Tech — Desenvolvimento de Software, Apps e Sistemas Web",
  description:
    "QeeL Tech: aplicativos mobile, sites WordPress, sistemas web, plugins, e-mail profissional, SEO e produtos digitais sob medida para o seu negócio.",
  icons: {
    icon: [{ url: "/LogoQeel_Bold_Simplificado_Fundo.png", type: "image/png" }],
    apple: "/LogoQeel_Bold_Simplificado_Fundo.png",
  },
  openGraph: {
    title: "QeeL Tech — Tecnologia que impulsiona o seu negócio",
    description: "Aplicativos, sites, sistemas e produtos digitais sob medida.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#13032D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
