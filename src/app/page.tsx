import Head from "next/head";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation/Navigation";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Planes from "@/components/Planes/Planes";
import Services from "@/components/Services/Services";
import Clients from "@/components/Clients/Clients";

export default function Home() {
  return (
    <>
      <Head>
        <title>SamaragTech | Diseño y Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Samuel Aragón - Expertos en diseño web, creación de páginas web, mantenimiento, rediseño, y servicios tecnológicos corporativos y freelance. ¡Eleva tu presencia digital con SamaragTech!"
        />
        <meta
          name="keywords"
          content="Samuel Aragón, tecnología, diseño web, creación de páginas web, mantenimiento web, rediseño web, desarrollo web profesional, SamaragTech"
        />
        <meta name="author" content="Samuel Aragón" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="SamaragTech | Diseño y Desarrollo Web Profesional"
        />
        <meta
          property="og:description"
          content="Servicios tecnológicos y diseño web de alta calidad con Samuel Aragón. Soluciones freelance y corporativas para destacar online."
        />
        <meta property="og:url" content="https://samaragtech.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://samaragtech.com/static/images/og-image.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="SamaragTech | Diseño y Desarrollo Web Profesional"
        />
        <meta
          property="twitter:description"
          content="Samuel Aragón te ayuda a destacar con diseño web, rediseño, mantenimiento y más."
        />
        <meta
          property="twitter:image"
          content="https://samaragtech.com/static/images/twitter-image.jpg"
        />
        <link rel="canonical" href="https://samaragtech.com" />

        {/* Rich Snippets (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SamaragTech",
            url: "https://samaragtech.com",
            sameAs: [
              "https://www.linkedin.com/in/samuelarag",
              "https://github.com/Samuelarag1",
            ],
            author: {
              "@type": "Person",
              name: "Samuel Aragón",
              url: "https://www.linkedin.com/in/samuelarag",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://samaragtech.com/?q={search_term}",
              "query-input": "required name=search_term",
            },
            description:
              "Samuel Aragón y SamaragTech ofrecen diseño web, mantenimiento y rediseño profesional.",
            inLanguage: "es",
          })}
        </script>
      </Head>

      <Navigation />
      <Header />
      <ScrollIndicator />
      <Services />
      <Clients />
      <Planes />
    </>
  );
}
