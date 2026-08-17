"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/mockData";

interface QuickBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
  "Piscina de Alvenaria Armada",
  "Área Gourmet & Sauna",
  "Banheiro de Alto Padrão",
  "Portas & Rodapés sob Medida",
  "Revestimentos & Fachadas",
  "Reforma Completa",
  "Outro",
];

export default function QuickBudgetModal({ isOpen, onClose }: QuickBudgetModalProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Marcelo! Me chamo *${name}* e estou interessado(a) em um orçamento para: *${service}*. ${details ? `Detalhes: ${details}` : ""}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-lg bg-[#0C1322] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-[#EAA023]/15 border border-[#EAA023]/25 flex items-center justify-center">
                    <MessageCircle size={16} className="text-[#EAA023]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#F8FAFC]">Solicitar Orçamento Rápido</h3>
                </div>
                <p className="text-sm text-[#94A3B8]">Preencha e envie direto para o WhatsApp do Marcelo.</p>
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Fechar modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="budget-name" className="block text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-2">
                    Seu Nome *
                  </label>
                  <input
                    id="budget-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#EAA023]/50 focus:bg-slate-900/80 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="budget-service" className="block text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    id="budget-service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/[0.1] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#EAA023]/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione um serviço...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-[#0C1322]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget-details" className="block text-xs font-semibold text-[#EAA023] tracking-[0.15em] uppercase mb-2">
                    Detalhes Adicionais
                  </label>
                  <textarea
                    id="budget-details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva brevemente o projeto, tamanho, localização..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/[0.1] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#EAA023]/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="modal-submit"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#EAA023] text-[#080D1A] font-bold text-sm tracking-wide hover:bg-[#F59E0B] transition-colors shadow-lg shadow-[#EAA023]/20 mt-1"
                >
                  <Send size={16} />
                  Enviar para o WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
