import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Matos Empreiteira | Finos Acabamentos & Piscinas de Luxo — Campos dos Goytacazes",
  description:
    "Especialistas em piscinas de alvenaria armada, áreas gourmet, banheiros de luxo e reformas de alto padrão nos principais condomínios fechados de Campos dos Goytacazes - RJ. Fale com Marcelo Matos.",
  keywords:
    "empreiteira campos dos goytacazes, piscina alvenaria armada, finos acabamentos, reforma alto padrão, alphaville campos, área gourmet, banheiro luxo, marcelo matos",
  openGraph: {
    title: "Casa Matos Empreiteira | Finos Acabamentos & Piscinas de Luxo",
    description:
      "Transformamos obras em ambientes de arte sem emendas perceptíveis. Parque Avenida Pelinca, Campos dos Goytacazes - RJ.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className="font-jakarta bg-[#080D1A] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
