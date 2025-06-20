"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Brain,
  Check,
  Star,
  Cloud,
  TrendingUp,
  Puzzle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SolucionesDigitalesClientPage() {
  const whatsappNumber = "5493834934797";

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-samarag-cream to-samarag-light-green">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Transformación Digital",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Transformación Digital",
              description:
                "Modernizamos tus procesos y sistemas para una operación más eficiente y competitiva en la era digital.",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Optimización de Procesos de Negocio",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Optimización de Procesos de Negocio",
              description:
                "Automatizamos tareas repetitivas y optimizamos flujos de trabajo con software a medida.",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Soluciones en la Nube",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Soluciones en la Nube",
              description:
                "Desarrollamos e implementamos infraestructuras y aplicaciones escalables en la nube (AWS, Azure, GCP).",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Análisis de Datos y Business Intelligence",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Análisis de Datos y BI",
              description:
                "Convertimos tus datos en información valiosa para la toma de decisiones estratégicas.",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Integración de Sistemas",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Integración de Sistemas",
              description:
                "Conectamos tus sistemas y aplicaciones existentes para un flujo de información sin interrupciones.",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Desarrollo de Plataformas SaaS",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Desarrollo de SaaS",
              description:
                "Creamos plataformas de Software como Servicio (SaaS) escalables y listas para el mercado.",
              url: "https://www.samaragtech.com/soluciones-digitales",
            },
          ]),
        }}
      />
      <main className="flex-1">
        {/* Hero Section for Digital Solutions */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#413C58] to-[#A3C4BC] text-white relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4"
              variants={fadeInUp}
            >
              Nuestras{" "}
              <span className="text-samarag-yellow">Soluciones Digitales</span>{" "}
              Integrales
            </motion.h1>
            <motion.p
              className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-200"
              variants={fadeInUp}
            >
              Vamos más allá del desarrollo tradicional, ofreciendo un abanico
              de soluciones que impulsan la transformación digital de tu
              empresa.
            </motion.p>
          </div>
        </motion.section>

        {/* Detailed Digital Solutions Grid */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <TrendingUp className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Transformación Digital
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Modernizamos tus procesos y sistemas para una operación más
                    eficiente y competitiva en la era digital. Implementamos
                    estrategias y tecnologías que te preparan para el futuro.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Estrategia y Roadmap Digital</li>
                    <li>✓ Digitalización de Procesos</li>
                    <li>✓ Adopción de Nuevas Tecnologías</li>
                    <li>✓ Gestión del Cambio</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Check className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Optimización de Procesos
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Automatizamos tareas repetitivas y optimizamos flujos de
                    trabajo con software a medida. Reducimos costos operativos y
                    aumentamos la eficiencia de tu equipo.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Automatización Robótica de Procesos (RPA)</li>
                    <li>✓ Gestión de Flujos de Trabajo (BPM)</li>
                    <li>✓ Sistemas de Gestión Documental</li>
                    <li>✓ Dashboards de Rendimiento</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Cloud className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Soluciones en la Nube
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Desarrollamos e implementamos infraestructuras y
                    aplicaciones escalables en la nube (AWS, Azure, GCP).
                    Aprovecha la flexibilidad, seguridad y eficiencia de la
                    computación en la nube.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Migración a la Nube</li>
                    <li>✓ Arquitectura Cloud Nativas</li>
                    <li>✓ Optimización de Costos Cloud</li>
                    <li>✓ Seguridad en la Nube</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Brain className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Análisis de Datos y BI
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Convertimos tus datos en información valiosa para la toma de
                    decisiones estratégicas. Implementamos soluciones de
                    Business Intelligence que te dan una visión clara de tu
                    negocio.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Dashboards Interactivos</li>
                    <li>✓ Modelado de Datos</li>
                    <li>✓ Informes Personalizados</li>
                    <li>✓ Integración de Fuentes de Datos</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-br-3xl rounded-tl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Puzzle className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Integración de Sistemas
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Conectamos tus sistemas y aplicaciones existentes para un
                    flujo de información sin interrupciones. Eliminamos silos de
                    datos y mejoramos la comunicación entre tus plataformas.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Integración de ERP/CRM</li>
                    <li>✓ APIs Personalizadas</li>
                    <li>✓ Automatización de Flujos de Datos</li>
                    <li>✓ Conectividad entre Plataformas</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Star className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Desarrollo de SaaS
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Creamos plataformas de Software como Servicio (SaaS)
                    escalables y listas para el mercado. Desde la idea hasta el
                    lanzamiento y el mantenimiento, te acompañamos en todo el
                    ciclo de vida.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Diseño y Arquitectura SaaS</li>
                    <li>✓ Desarrollo Full-Stack</li>
                    <li>✓ Modelos de Suscripción</li>
                    <li>✓ Seguridad y Escalabilidad</li>
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90"
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 mr-2" />
                  ¡Hablemos de tu Transformación!
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Case Studies / Success Stories Section */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#413C58] to-[#A3C4BC] text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              variants={fadeInUp}
            >
              Casos de <span className="text-samarag-yellow">Éxito</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-100 mb-12"
              variants={fadeInUp}
            >
              Conocé cómo nuestras soluciones ayudaron a empresas a crecer,
              optimizar sus procesos y llegar a más clientes.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {/* Caso 1: Ecommerce */}
              {/* Caso 1: Ecommerce */}
              <motion.div
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-tl-3xl rounded-br-3xl shadow-xl border border-white/20 text-left min-h-[auto] md:min-h-[500px] flex flex-col justify-between"
                variants={fadeInUp}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    E-commerce para Marca de Carteras
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Implementamos una tienda online con gestión de inventario en
                    tiempo real, carrito de compras y pasarela de pagos.
                    Aumentaron sus ventas un 30% y redujeron errores de stock en
                    un 40%.
                  </p>
                  <Image
                    src="/vaca-negra.png"
                    width={400}
                    height={200}
                    alt="E-commerce"
                    className="w-full h-48 md:h-52 lg:h-96 mb-4 object-fill rounded-xl"
                  />
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-samarag-yellow hover:text-samarag-yellow/80 mt-2"
                >
                  <Link
                    href="https://bags-ecommerce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver DEMO →
                  </Link>
                </Button>
              </motion.div>

              {/* Caso 2: Sistema modular */}
              <motion.div
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 text-left min-h-[auto] md:min-h-[500px] flex flex-col justify-between"
                variants={fadeInUp}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Sistema Modular para Múltiples Sucursales
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Diseñamos un sistema adaptable que permitió implementar
                    mejoras en 5 negocios con distintos procesos. Redujo el
                    tiempo de capacitación en un 50% y unificó el control de
                    operaciones.
                  </p>
                  <Image
                    src="/system.png"
                    width={400}
                    height={200}
                    alt="Sistema modular"
                    className="w-full h-48 md:h-52 lg:h-96 mb-4 object-fill rounded-xl"
                  />
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-samarag-yellow hover:text-samarag-yellow/80 mt-2"
                >
                  <Link
                    href="https://liquor-store-management.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver DEMO →
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
