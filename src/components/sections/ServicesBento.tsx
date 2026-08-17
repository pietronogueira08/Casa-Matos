"use client";

import { motion } from "framer-motion";
import {
  Waves,
  UtensilsCrossed,
  Bath,
  DoorOpen,
  Layers,
} from "lucide-react";
import { SERVICES } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap = {
  Waves,
  UtensilsCrossed,
  Bath,
  DoorOpen,
  Layers,
};
type IconName = keyof typeof iconMap;

export default function ServicesBento() {
  return (
    <section
      id="especialidades"
      className="relative py-28 md:py-36 bg-[#0C1322] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#0E3B82]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#EAA023]/8 blur-[120px] rounded-full pointer-events-none" />

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
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Nossas Especialidades
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Da estrutura ao detalhe final — serviços de alto padrão com garantia técnica.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as IconName];
            const isLarge = service.size === "large";
            const hasBg = !!service.image;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 280,
                  damping: 26,
                  mass: 0.8,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={cn(
                  "group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#EAA023]/40 transition-all duration-300 shadow-2xl",
                  isLarge ? "lg:col-span-2 lg:row-span-2" : "",
                  hasBg ? "min-h-[280px]" : "min-h-[180px]"
                )}
              >
                {/* Background image (for large & medium cards) */}
                {hasBg && (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/95 via-[#080D1A]/60 to-[#080D1A]/20" />
                  </>
                )}

                {/* Background (no-image cards) */}
                {!hasBg && (
                  <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xl" />
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#EAA023]/8 via-transparent to-[#0E3B82]/8" />

                {/* Content */}
                <div className={cn("relative z-10 flex flex-col justify-end p-6", isLarge ? "h-full min-h-[280px] md:min-h-[380px]" : "h-full")}>
                  <div className="mb-4 w-12 h-12 rounded-xl bg-[#EAA023]/15 border border-[#EAA023]/25 flex items-center justify-center">
                    <Icon size={22} className="text-[#EAA023]" />
                  </div>
                  <h3
                    className={cn(
                      "font-bold text-[#F8FAFC] mb-2",
                      isLarge ? "text-xl md:text-2xl" : "text-base"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#EAA023]/10 text-[#EAA023] border border-[#EAA023]/20 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
