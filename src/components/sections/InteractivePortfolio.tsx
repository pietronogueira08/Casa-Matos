"use client";

import { useState, useCallback, MouseEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Tag, X, Clock, Layers, CheckCircle } from "lucide-react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
  type PortfolioFilter,
} from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function InteractivePortfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

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
                onClick={() => setSelectedProject(item)}
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
                    <span className="text-xs text-[#EAA023] font-medium line-clamp-1">{item.material}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#060912]/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#0C1322] border border-white/[0.08] rounded-3xl shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white transition-colors"
                aria-label="Fechar detalhes do projeto"
              >
                <X size={20} />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1322] md:bg-gradient-to-r md:from-transparent md:to-[#0C1322] pointer-events-none" />
                
                {/* Badges on image */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E3B82]/80 backdrop-blur-md border border-[#0E3B82]/50 w-fit">
                    <MapPin size={12} className="text-[#EAA023]" />
                    <span className="text-xs font-semibold text-[#F8FAFC] tracking-wide">
                      {selectedProject.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 w-fit">
                    <Clock size={12} className="text-[#EAA023]" />
                    <span className="text-xs font-semibold text-[#F8FAFC] tracking-wide">
                      {selectedProject.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="w-full md:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col">
                <span className="text-[#EAA023] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  Detalhes da Obra
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-4 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
                  {/* Materials */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers size={18} className="text-[#3b82f6]" />
                      <h4 className="text-[#F8FAFC] font-semibold text-sm">Materiais Utilizados</h4>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.materialsList?.map((mat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EAA023] mt-1.5 flex-shrink-0" />
                          <span className="leading-snug">{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle size={18} className="text-[#3b82f6]" />
                      <h4 className="text-[#F8FAFC] font-semibold text-sm">Destaques da Obra</h4>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.features?.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
