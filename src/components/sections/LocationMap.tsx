"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { WHATSAPP_URL } from "@/data/mockData";

const HOURS = [
  { day: "Segunda–Sexta", time: "08:00 – 18:00" },
  { day: "Sábado", time: "08:00 – 13:00" },
  { day: "Domingo", time: "Fechado" },
];

export default function LocationMap() {
  return (
    <section
      id="localizacao"
      className="relative py-28 md:py-36 bg-[#080D1A] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#EAA023]/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[350px] h-[250px] bg-[#0E3B82]/12 blur-[110px] rounded-full pointer-events-none" />

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
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Nossa Localização
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Venha nos visitar no Parque Avenida Pelinca ou entre em contato pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 shadow-2xl"
          >
            {/* Address */}
            <div className="flex gap-4 mb-7">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#EAA023]/15 border border-[#EAA023]/25 flex items-center justify-center">
                <MapPin size={20} className="text-[#EAA023]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-1">
                  Endereço
                </div>
                <p className="text-sm text-[#F8FAFC] font-medium leading-relaxed">
                  Rua Tenente Coronel Cardoso, 777 – Loja 2<br />
                  <span className="text-[#94A3B8]">Parque Avenida Pelinca</span><br />
                  <span className="text-[#94A3B8]">Campos dos Goytacazes – RJ</span>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-7">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0E3B82]/25 border border-[#0E3B82]/40 flex items-center justify-center">
                <Phone size={20} className="text-[#3b82f6]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-1">
                  Telefone / WhatsApp
                </div>
                <a
                  href="tel:+5522996125854"
                  className="text-sm text-[#F8FAFC] font-semibold hover:text-[#EAA023] transition-colors"
                >
                  (22) 99612-5854
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#EAA023]/15 border border-[#EAA023]/25 flex items-center justify-center">
                <Clock size={20} className="text-[#EAA023]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-2">
                  Horário de Funcionamento
                </div>
                <div className="flex flex-col gap-1">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-[#94A3B8]">{h.day}</span>
                      <span
                        className={h.day === "Domingo" ? "text-red-400" : "text-[#F8FAFC] font-medium"}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="location-whatsapp"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EAA023] text-[#080D1A] text-sm font-bold hover:bg-[#F59E0B] transition-colors shadow-lg shadow-[#EAA023]/20"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Tenente+Coronel+Cardoso,777,Campos+dos+Goytacazes,RJ"
                target="_blank"
                rel="noopener noreferrer"
                id="location-route"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-sm font-semibold text-[#F8FAFC] hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <Navigation size={15} />
                Traçar Rota
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
            className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              title="Localização Casa Matos Empreiteira"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.073!2d-41.32!3d-21.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzAwLjAiUyA0McKwMTknMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1&q=Rua+Tenente+Coronel+Cardoso+777+Campos+dos+Goytacazes+RJ"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
