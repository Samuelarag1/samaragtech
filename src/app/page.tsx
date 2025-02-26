import Header from "@/components/Header";
import Navigation from "@/components/Navigation/Navigation";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SamaragTech",
    url: "https://www.samaragtech.com",
    author: {
      "@type": "Person",
      name: "Samuel Aragon Sali",
    },
  };

  return (
    <main>
      <Navigation />
      <Header />
      <Services />
      <Projects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </main>
  );
}
