"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import AetherFlowHero from "@/components/ui/aether-flow-hero";
import { TextRotate } from "@/components/ui/text-rotate";
import { waLink } from "@/lib/site";
import { Counter } from "./Counter";

const words = ["aplicativos", "sites", "sistemas web", "lojas virtuais", "plugins", "experiências"];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export function Hero() {
  return (
    <AetherFlowHero id="home" className="hero">
      <div className="relative z-10 px-6 py-24 text-center">
        <motion.h1
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-5xl font-bold tracking-tighter md:text-8xl"
        >
          <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Tecnologia que constrói
          </span>
          <span className="mt-1 flex min-h-[1.15em] flex-wrap items-baseline justify-center">
            <TextRotate
              texts={words}
              mainClassName="justify-center text-[#C084FC]"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400"
        >
          Na <b className="font-semibold text-gray-300">QeeL Tech</b> transformamos ideias em
          produtos digitais: apps, sites, sistemas web e soluções sob medida que colocam o seu
          negócio para crescer.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={waLink(
              "Olá! Quero tirar minha ideia do papel com a QeeL Tech. Podemos conversar?"
            )}
            target="_blank"
            rel="noopener"
            className="mx-auto flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold !text-[#4C1D95] shadow-lg transition-colors duration-300 hover:bg-gray-200 sm:mx-0"
          >
            Começar meu projeto
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-8 py-4 font-semibold text-gray-200 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            Ver serviços
          </a>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          <div className="text-center">
            <Counter
              target={120}
              className="block font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl"
            />
            <span className="mt-1 block text-sm text-gray-500">Projetos entregues</span>
          </div>
          <div className="text-center">
            <Counter
              target={80}
              className="block font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl"
            />
            <span className="mt-1 block text-sm text-gray-500">Clientes atendidos</span>
          </div>
          <div className="text-center">
            <Counter
              target={20}
              className="block font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl"
            />
            <span className="mt-1 block text-sm text-gray-500">Soluções digitais</span>
          </div>
        </motion.div>
      </div>

      <div className="scroll-hint" aria-hidden>
        <span className="mouse" />
        Role
      </div>
    </AetherFlowHero>
  );
}
