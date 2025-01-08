import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SamaragTech | Diseño y Desarrollo Web Profesional",
  description:
    "Samuel Aragón - Servicios de diseño web, creación de sitios web modernos y responsivos, rediseño, mantenimiento y más. Mejora tu presencia en línea con SamaragTech.",
  keywords: [
    "Samuel Aragón",
    "tecnología",
    "diseño web profesional",
    "creación de páginas web modernas",
    "desarrollo web responsivo",
    "SEO",
    "mantenimiento web",
    "rediseño web",
    "servicios de tecnología",
    "SamaragTech",
    "desarrollador freelance",
    "web profesional",
    "diseño gráfico",
    "páginas web personalizadas",
    "programador web",
    "soluciones tecnológicas",
    "optimización web",
  ],
  authors: [
    {
      name: "Samuel Aragón",
      url: "https://samaragtech.com",
    },
  ],
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", url: "/favicon.ico", sizes: "16x16" },
    ],
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
