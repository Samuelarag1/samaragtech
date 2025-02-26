import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SamaragTech | Diseño y Desarrollo Web Profesional en Argentina",
  description:
    "Expertos en diseño y desarrollo de sitios web modernos, responsivos y optimizados para SEO en Argentina. Mejora tu presencia online con SamaragTech.",
  keywords: [
    "diseño web Argentina",
    "desarrollo web profesional",
    "páginas web responsivas",
    "SEO Argentina",
    "sitios web modernos",
    "diseño web personalizado",
    "desarrollo web Buenos Aires",
    "creación de tiendas online",
    "optimización de sitios web",
    "mantenimiento web",
    "rediseño de páginas web",
    "programación web",
    "diseño UX/UI",
    "landing pages",
    "WordPress",
    "e-commerce Argentina",
    "posicionamiento web",
    "marketing digital",
    "SamaragTech",
    "Samuel Aragón",
  ],
  openGraph: {
    title: "SamaragTech | Diseño y Desarrollo Web Profesional",
    description:
      "Servicios tecnológicos y diseño web de alta calidad con Samuel Aragón. Soluciones freelance y corporativas para destacar online.",
    url: "https://samaragtech.com",
    type: "website",
    images: [
      {
        url: "https://samaragtech.com/static/images/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SamaragTech | Diseño y Desarrollo Web Profesional",
    description:
      "Samuel Aragón te ayuda a destacar con diseño web, rediseño, mantenimiento y más.",
    images: ["https://samaragtech.com/static/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
