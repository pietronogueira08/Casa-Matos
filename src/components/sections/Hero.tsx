"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle, Star, Trophy, Timer } from "lucide-react";
import { WHATSAPP_URL } from "@/data/mockData";

const TRUST_BADGES = [
  { icon: Star, text: "Nota 4.9 no Google | Parque Avenida Pelinca" },
  { icon: Trophy, text: "Especialistas em Finos Acabamentos & Piscinas" },
  { icon: Timer, text: "100% de Cumprimento de Prazos em Contrato" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080D1A]"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D1A]/85 via-[#080D1A]/70 to-[#080D1A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A]/60 via-transparent to-[#080D1A]/60" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0E3B82]/30 to-[#EAA023]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-[#0E3B82]/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center text-center"
      >
        {/* Pre-title label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 26 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA023]/30 bg-[#EAA023]/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAA023] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#EAA023]">
            Empreiteira Casa Matos — Campos dos Goytacazes
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#F8FAFC] max-w-5xl"
        >
          Onde o{" "}
          <span className="text-gradient-gold">Fino Acabamento</span>
          <br />
          Encontra a Arte da{" "}
          <span className="relative inline-block">
            <span className="text-gradient-blue">Construção.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed font-medium"
        >
          Especialistas em piscinas de alvenaria armada, áreas gourmet e
          reformas de alto padrão na Pelinca e nos principais condomínios
          fechados de{" "}
          <span className="text-[#F8FAFC] font-semibold">Campos dos Goytacazes</span>.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3"
        >
          {TRUST_BADGES.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] text-sm font-medium text-[#F8FAFC]"
            >
              <Icon size={15} className="text-[#EAA023] flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            id="hero-whatsapp-cta"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#EAA023] text-[#080D1A] text-base font-bold tracking-wide shadow-2xl shadow-[#EAA023]/25 hover:bg-[#F59E0B] transition-colors duration-200"
          >
            <MessageCircle size={18} className="flex-shrink-0" />
            Falar com Marcelo Matos no WhatsApp
          </motion.a>
          <motion.button
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            id="hero-portfolio-cta"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-[#F8FAFC] text-base font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            Ver Obras Executadas
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() =>
          document.getElementById("diferenciais")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8] hover:text-[#EAA023] transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium">Descobrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
