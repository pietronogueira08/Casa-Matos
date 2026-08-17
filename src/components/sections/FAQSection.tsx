"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/mockData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0E3B82]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Perguntas & Respostas
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 280,
                  damping: 26,
                }}
                className={`bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl ${
                  isOpen
                    ? "border-[#EAA023]/40 shadow-[#EAA023]/5"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  id={`faq-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-[#EAA023]" : "text-[#F8FAFC]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#EAA023] text-[#080D1A]"
                        : "bg-white/[0.08] text-[#94A3B8]"
                    }`}
                  >
                    <Plus size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 border-t border-white/[0.06]">
                        <p className="pt-4 text-sm text-[#94A3B8] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
