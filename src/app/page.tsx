import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { Napoleon } from "@/components/site/Napoleon";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Napoleon />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
