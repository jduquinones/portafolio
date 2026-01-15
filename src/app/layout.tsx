import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, Outfit, Oswald } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

// 1. FUENTE PARA TEXTOS NORMALES: Inter (moderna y legible)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Pesos para diferentes usos
  weight: ["400", "500", "600", "700"],
});

// 2. FUENTE PARA H1 IMPACTANTE: Oswald (condensada, llamativa)
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  // Todos los pesos para variedad
  weight: ["300", "400", "500", "600", "700"],
});

// 3. Fuente para subtítulos: Outfit (moderna y profesional)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// 4. Fuente técnica/accent: Space Grotesk (para detalles, badges, etc.)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Webqui - Transformamos tus ideas en experiencias digitales",
  description: "En Webqui, diseñamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-MPC27CR5" />
      <GoogleAnalytics gaId="G-M24PRY26ZK" />
      <body className={`${inter.variable} ${oswald.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
