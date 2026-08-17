"use client";

import { useState, useCallback, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Tag } from "lucide-react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
  type PortfolioFilter,
} from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function InteractivePortfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>, el: HTMLDivElement) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    },
    []
  );

  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAA023]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E3B82]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023]">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Obras Executadas
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Cada projeto é uma assinatura de qualidade e precisão da Casa Matos.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, type: "spring", stiffness: 280, damping: 26 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-16 md:mb-20"
        >
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              id={`filter-${f.value}`}
              className={cn(
                "relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                activeFilter === f.value
                  ? "text-[#080D1A] shadow-lg shadow-[#EAA023]/20"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] bg-white/5 hover:bg-white/10 border border-white/[0.08]"
              )}
            >
              {activeFilter === f.value && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 bg-[#EAA023] rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#EAA023]/40 transition-all duration-300 shadow-2xl cursor-pointer"
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as React.CSSProperties
                }
                onMouseMove={(e) =>
                  handleMouseMove(e, e.currentTarget as HTMLDivElement)
                }
              >
                {/* Mouse-tracking radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(234,160,35,0.12), transparent 60%)",
                  }}
                />

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  {/* Tag pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E3B82]/80 backdrop-blur-sm border border-[#0E3B82]/50">
                    <MapPin size={10} className="text-[#EAA023]" />
                    <span className="text-[10px] font-semibold text-[#F8FAFC] tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="relative bg-slate-900/70 backdrop-blur-sm p-5">
                  <h3 className="text-base font-bold text-[#F8FAFC] mb-2">{item.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <Tag size={11} className="text-[#EAA023] flex-shrink-0" />
                    <span className="text-xs text-[#EAA023] font-medium">{item.material}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
