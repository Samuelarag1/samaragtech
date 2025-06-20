import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const whatsappNumber = "5493834934797";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samaragtech.com"),
  title: {
    default: "SamaragTech | Soluciones de Software Innovadoras para tu Negocio",
    template: "%s | SamaragTech",
  },
  description:
    "SamaragTech ofrece desarrollo de software a medida, aplicaciones móviles, consultoría tecnológica y soluciones de IA para impulsar el crecimiento de tu empresa. ¡Contáctanos hoy!",
  keywords: [
    "SamaragTech",
    "software a medida",
    "desarrollo de apps",
    "consultoría de software",
    "inteligencia artificial",
    "soluciones tecnológicas",
    "empresa de software",
    "transformación digital",
    "soluciones digitales",
  ],
  openGraph: {
    title: "SamaragTech | Soluciones de Software Innovadoras para tu Negocio",
    description:
      "SamaragTech ofrece desarrollo de software a medida, aplicaciones móviles, consultoría tecnológica y soluciones de IA para impulsar el crecimiento de tu empresa. ¡Contáctanos hoy!",
    url: "https://www.samaragtech.com",
    siteName: "SamaragTech",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "SamaragTech - Innovación en Software",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SamaragTech | Soluciones de Software Innovadoras para tu Negocio",
    description:
      "SamaragTech ofrece desarrollo de software a medida, aplicaciones móviles, consultoría tecnológica y soluciones de IA para impulsar el crecimiento de tu empresa. ¡Contáctanos hoy!",
    creator: "@SamaragTech", // Replace with your Twitter handle
    images: ["/placeholder.svg?height=675&width=1200"], // Replace with a custom image for social sharing
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.samaragtech.com/#organization",
                name: "SamaragTech",
                url: "https://www.samaragtech.com/", // Replace with your actual domain
                logo: "https://www.samaragtech.com/logo.png", // Replace with your actual logo URL
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: `+${whatsappNumber}`,
                  contactType: "customer service",
                  areaServed: "AR", // Assuming Argentina, adjust if needed
                  availableLanguage: "es",
                },
                sameAs: [
                  "https://twitter.com/SamaragTech", // Replace with your Twitter URL
                  `https://wa.me/${whatsappNumber}`,
                ],
              }),
            }}
          />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
