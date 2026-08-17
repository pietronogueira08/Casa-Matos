"use client";

import { motion } from "framer-motion";
import { Search, FileText, HardHat, CheckCircle } from "lucide-react";
import { TIMELINE_STEPS } from "@/data/mockData";

const iconMap = { Search, FileText, HardHat, CheckCircle };
type IconName = keyof typeof iconMap;

export default function MethodTimeline() {
  return (
    <section
      id="metodo"
      className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E3B82]/12 blur-[130px] rounded-full pointer-events-none" />

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
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Método Construtivo
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Processo transparente e estruturado do diagnóstico à entrega impecável.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0E3B82]/40 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-8 lg:gap-0">
            {TIMELINE_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon as IconName];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                    mass: 0.8,
                  }}
                  className={`relative flex items-center gap-8 lg:gap-0 ${
                    isEven
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`group w-full lg:w-[calc(50%-2.5rem)] bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-[#EAA023]/40 rounded-2xl p-7 transition-all duration-300 shadow-2xl hover:-translate-y-1 ${
                      isEven ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EAA023]/15 border border-[#EAA023]/25 flex items-center justify-center">
                        <Icon size={20} className="text-[#EAA023]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#EAA023] tracking-[0.15em] uppercase mb-1">
                          Passo {step.step}
                        </div>
                        <h3 className="text-base font-bold text-[#F8FAFC] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0C1322] border-2 border-[#0E3B82] items-center justify-center z-10 shadow-lg shadow-[#0E3B82]/30">
                    <span className="text-xs font-extrabold text-[#EAA023]">{step.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
