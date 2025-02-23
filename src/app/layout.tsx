import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
  authors: [{ name: "Samuel Aragón", url: "https://samaragtech.com" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://samaragtech.com",
    siteName: "SamaragTech",
    title: "SamaragTech | Expertos en Diseño Web en Argentina",
    description:
      "Soluciones web profesionales y personalizadas para empresas argentinas.",
    images: [
      {
        url: "https://samaragtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SamaragTech - Diseño y Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SamaragTech",
    creator: "@SamuelAragon",
  },
  alternates: {
    canonical: "https://samaragtech.com",
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
      </body>
    </html>
  );
}
