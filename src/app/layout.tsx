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
    "Samuel Aragón - Servicios de diseño web, rediseño, mantenimiento y más.",
  keywords: [
    "Samuel Aragón",
    "tecnología",
    "diseño web",
    "creación de páginas web",
    "mantenimiento web",
    "rediseño web",
    "SamaragTech",
  ],
  authors: [
    {
      name: "Samuel Aragón",
      url: "https://samaragtech.com",
    },
  ],
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
