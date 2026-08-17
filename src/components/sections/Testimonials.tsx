"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/mockData";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-28 md:py-36 bg-[#0C1322] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#EAA023]/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#0E3B82]/12 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023]">
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Proprietários de alto padrão que confiaram na Casa Matos e aprovaram.
          </p>

          {/* Stars summary */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#EAA023] text-[#EAA023]" />
            ))}
            <span className="ml-2 text-sm font-bold text-[#F8FAFC]">4.9</span>
            <span className="text-sm text-[#94A3B8]">/ 5.0 no Google</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                type: "spring",
                stiffness: 280,
                damping: 26,
                mass: 0.8,
              }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#EAA023]/40 rounded-2xl p-8 transition-all duration-300 shadow-2xl"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-[#EAA023]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#EAA023] text-[#EAA023]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 relative">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Project tag */}
              <div className="mb-5">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#EAA023]/10 text-[#EAA023] border border-[#EAA023]/20 tracking-wide">
                  {t.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0E3B82] to-[#EAA023] flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F8FAFC]">{t.name}</div>
                  <div className="text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
