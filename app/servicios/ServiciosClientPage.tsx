"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Code,
  Smartphone,
  Brain,
  Users,
  Check,
  Star,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function ServiciosClientPage() {
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
              serviceType: "Desarrollo Web a Medida",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Desarrollo Web a Medida",
              description:
                "Creamos sitios web y aplicaciones web robustas, escalables y optimizadas para el rendimiento.",
              url: "https://www.samaragtech.com/servicios",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Desarrollo de Aplicaciones Móviles Nativas",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Desarrollo de Aplicaciones Móviles Nativas",
              description:
                "Diseñamos y desarrollamos apps intuitivas para iOS y Android que cautivan a tus usuarios.",
              url: "https://www.samaragtech.com/servicios",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Inteligencia Artificial y Machine Learning",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Inteligencia Artificial y Machine Learning",
              description:
                "Integramos soluciones de IA y Machine Learning para automatizar procesos y obtener insights.",
              url: "https://www.samaragtech.com/servicios",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Consultoría Tecnológica",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Consultoría Tecnológica",
              description:
                "Asesoramiento experto para optimizar tu infraestructura, procesos y estrategia digital.",
              url: "https://www.samaragtech.com/servicios",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Mantenimiento y Soporte de Software",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Mantenimiento y Soporte de Software",
              description:
                "Garantizamos el funcionamiento óptimo y la seguridad de tus sistemas con soporte continuo.",
              url: "https://www.samaragtech.com/servicios",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Diseño de Experiencia de Usuario (UX/UI)",
              provider: { "@id": "https://www.samaragtech.com/#organization" },
              name: "Diseño de Experiencia de Usuario (UX/UI)",
              description:
                "Diseñamos interfaces intuitivas y atractivas que garantizan una experiencia de usuario excepcional.",
              url: "https://www.samaragtech.com/servicios",
            },
          ]),
        }}
      />
      <main className="flex-1">
        {/* Hero Section for Services */}
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
              Nuestros <span className="text-samarag-yellow">Servicios</span>{" "}
              Clave
            </motion.h1>
            <motion.p
              className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-200"
              variants={fadeInUp}
            >
              En SamaragTech, ofrecemos un portafolio completo de servicios de
              desarrollo de software diseñados para impulsar la innovación y el
              crecimiento de tu negocio.
            </motion.p>
          </div>
        </motion.section>

        {/* Detailed Services Grid */}
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
                <Card className="h-full flex flex-col p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Code className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Desarrollo Web a Medida
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Creamos sitios web y aplicaciones web robustas, escalables y
                    optimizadas para el rendimiento. Desde portales corporativos
                    hasta complejas plataformas SaaS, construimos soluciones que
                    se adaptan perfectamente a tus necesidades y objetivos de
                    negocio.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Plataformas SaaS</li>
                    <li>✓ E-commerce personalizados</li>
                    <li>✓ Portales y CMS</li>
                    <li>✓ Integración de APIs</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Smartphone className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Aplicaciones Móviles Nativas
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Diseñamos y desarrollamos aplicaciones móviles intuitivas y
                    de alto rendimiento para iOS y Android. Nos enfocamos en la
                    experiencia de usuario (UX) para crear apps que tus clientes
                    amarán usar.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ iOS (Swift/Objective-C)</li>
                    <li>✓ Android (Kotlin/Java)</li>
                    <li>✓ Multiplataforma (React Native, Flutter)</li>
                    <li>✓ Integración de funcionalidades avanzadas</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Brain className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Inteligencia Artificial & ML
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Integramos soluciones de Inteligencia Artificial y Machine
                    Learning para automatizar procesos, personalizar
                    experiencias y obtener insights valiosos de tus datos.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Procesamiento de Lenguaje Natural (NLP)</li>
                    <li>✓ Visión por Computadora</li>
                    <li>✓ Análisis Predictivo</li>
                    <li>✓ Chatbots y Asistentes Virtuales</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Users className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Consultoría Tecnológica
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Ofrecemos asesoramiento experto para optimizar tu
                    infraestructura, procesos y estrategia digital. Te ayudamos
                    a tomar decisiones informadas y a implementar las mejores
                    prácticas tecnológicas.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Estrategia de Transformación Digital</li>
                    <li>✓ Auditoría de Sistemas</li>
                    <li>✓ Optimización de Infraestructura Cloud</li>
                    <li>✓ Planificación de Proyectos</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-br-3xl rounded-tl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Check className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Mantenimiento y Soporte
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Garantizamos el funcionamiento óptimo y la seguridad de tus
                    sistemas con soporte continuo. Nos encargamos de las
                    actualizaciones, monitoreo y resolución de incidencias para
                    que te enfoques en tu negocio.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Soporte 24/7</li>
                    <li>✓ Actualizaciones y Parches de Seguridad</li>
                    <li>✓ Monitoreo de Rendimiento</li>
                    <li>✓ Resolución de Incidencias</li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Star className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Experiencia de Usuario (UX/UI)
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Diseñamos interfaces intuitivas y atractivas que garantizan
                    una experiencia de usuario excepcional. Nos enfocamos en la
                    usabilidad y la estética para crear productos digitales que
                    tus usuarios amarán.
                  </CardDescription>
                  <ul className="mt-4 text-gray-600 text-sm space-y-1">
                    <li>✓ Investigación de Usuarios</li>
                    <li>✓ Diseño de Interfaz (UI)</li>
                    <li>✓ Diseño de Experiencia (UX)</li>
                    <li>✓ Prototipado y Testeo</li>
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
                  ¡Hablemos de tu Proyecto!
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
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
              Nuestro Proceso de{" "}
              <span className="text-samarag-yellow">Desarrollo</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-200 mb-12"
              variants={fadeInUp}
            >
              Trabajamos de forma ágil y transparente para asegurar que tu
              visión se convierta en una realidad digital exitosa.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Lightbulb className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  1. Descubrimiento
                </h3>
                <p className="text-gray-200 text-sm">
                  Entendemos tus necesidades, objetivos y el alcance del
                  proyecto.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-tl-3xl rounded-br-3xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Code className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  2. Diseño & Planificación
                </h3>
                <p className="text-gray-200 text-sm">
                  Creamos prototipos, definimos la arquitectura y planificamos
                  cada fase.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Rocket className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  3. Desarrollo & Testeo
                </h3>
                <p className="text-gray-200 text-sm">
                  Codificamos, integramos y realizamos pruebas exhaustivas para
                  la calidad.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-tr-3xl rounded-bl-3xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Check className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  4. Lanzamiento & Soporte
                </h3>
                <p className="text-gray-200 text-sm">
                  Desplegamos tu solución y ofrecemos soporte continuo
                  post-lanzamiento.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
