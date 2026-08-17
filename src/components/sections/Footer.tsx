"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Instagram = ({ size = 24, ...props }: CustomIconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }: CustomIconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { NAV_LINKS, WHATSAPP_URL } from "@/data/mockData";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060912] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#0E3B82]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="py-14 border-b border-white/[0.06] text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-3 tracking-tight">
            Pronto para transformar seu projeto em realidade?
          </h3>
          <p className="text-[#94A3B8] text-sm mb-8 max-w-md mx-auto">
            Fale agora com Marcelo Matos e receba um orçamento personalizado sem compromisso.
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            id="footer-whatsapp-cta"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#EAA023] text-[#080D1A] font-bold text-sm tracking-wide hover:bg-[#F59E0B] transition-colors shadow-2xl shadow-[#EAA023]/25"
          >
            <MessageCircle size={17} />
            Falar com Marcelo no WhatsApp
          </motion.a>
        </motion.div>

        {/* Footer columns */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <polygon points="20,4 36,18 36,38 4,38 4,18" fill="none" stroke="#0E3B82" strokeWidth="2" />
                  <polygon points="20,4 36,18 4,18" fill="#EAA023" opacity="0.9" />
                  <rect x="15" y="24" width="10" height="14" fill="#0E3B82" opacity="0.8" rx="1" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.12em] uppercase">
                  <span className="text-[#EAA023]">CASA</span>{" "}
                  <span className="text-[#3b82f6]">MATOS</span>
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-[#94A3B8] uppercase">
                  EMPREITEIRA
                </span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs mb-6">
              Transformamos obras em ambientes de arte sem emendas perceptíveis.
              Especialistas em finos acabamentos e piscinas de alvenaria armada.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-[#EAA023] hover:border-[#EAA023]/30 hover:bg-[#EAA023]/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023] mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023] mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                <MapPin size={14} className="text-[#EAA023] flex-shrink-0 mt-0.5" />
                <span>Rua Ten. Cel. Cardoso, 777 – Loja 2, Pelinca, Campos–RJ</span>
              </li>
              <li>
                <a
                  href="tel:+5522996125854"
                  className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  <Phone size={14} className="text-[#EAA023] flex-shrink-0" />
                  (22) 99612-5854
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#94A3B8]">
            © {year} Empreiteira Casa Matos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#94A3B8]">
            Desenvolvido por{" "}
            <span className="text-[#EAA023] font-semibold">Pietro Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
