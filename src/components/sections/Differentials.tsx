"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { Gem, UserCheck, ShieldCheck } from "lucide-react";
import { DIFFERENTIALS } from "@/data/mockData";

const iconMap = {
  Gem,
  UserCheck,
  ShieldCheck,
};

type IconName = keyof typeof iconMap;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 26, mass: 0.8 },
  },
};

export default function Differentials() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#0C1322] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0E3B82]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023]">
            Nossos Pilares
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            O Padrão Casa Matos
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Três pilares que definem cada obra entregue por Marcelo Matos e sua equipe.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {DIFFERENTIALS.map((item, index) => {
            const Icon = iconMap[item.icon as IconName];
            const isGold = item.color === "gold";

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#EAA023]/40 rounded-2xl p-8 transition-all duration-300 shadow-2xl cursor-default overflow-hidden"
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#EAA023]/5 via-transparent to-[#0E3B82]/5 rounded-2xl" />

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-white/[0.03] select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`relative mb-6 w-14 h-14 rounded-2xl flex items-center justify-center ${
                    isGold
                      ? "bg-[#EAA023]/15 border border-[#EAA023]/25"
                      : "bg-[#0E3B82]/25 border border-[#0E3B82]/40"
                  }`}
                >
                  <Icon
                    size={24}
                    className={isGold ? "text-[#EAA023]" : "text-[#3b82f6]"}
                  />
                </div>

                <h3 className="relative text-lg font-bold text-[#F8FAFC] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="relative text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl ${
                    isGold
                      ? "bg-gradient-to-r from-[#EAA023] to-[#F59E0B]"
                      : "bg-gradient-to-r from-[#0E3B82] to-[#3b82f6]"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.4, type: "spring", stiffness: 280, damping: 26 }}
          className="mt-16 text-center text-sm font-semibold text-[#94A3B8] tracking-wide"
        >
          &ldquo;Transformamos obras em{" "}
          <span className="text-[#EAA023]">ambientes de arte</span> sem emendas perceptíveis.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
