"use client";

import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Brain,
  Users,
  Check,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

// Imágenes mockup
const mobileImages = [
  "/mockups/desktop-1.avif",
  "/mockups/desktop-2.avif",
  "/mockups/desktop-3.avif",
];

const desktopImages = [
  "/mockups/desktop-1.avif",
  "/mockups/desktop-2.avif",
  "/mockups/desktop-3.avif",
];
export default function HomePage() {
  const whatsappNumber = "5493834934797";
  const emailAddress = "samuelaragon616@gmail.com";
  const isMobile = useIsMobile();
  const images = isMobile ? mobileImages : desktopImages;
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-samarag-cream to-samarag-light-green">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.samaragtech.com/#webpage",
                url: "https://www.samaragtech.com/",
                name: "SamaragTech | Soluciones de Software Innovadoras para tu Negocio",
                isPartOf: { "@id": "https://www.samaragtech.com/#website" },
                about: { "@id": "https://www.samaragtech.com/#organization" },
                description:
                  "SamaragTech ofrece desarrollo de software a medida, aplicaciones móviles, consultoría tecnológica y soluciones de IA para impulsar el crecimiento de tu empresa. ¡Contáctanos hoy!",
                inLanguage: "es-ES",
              },
            ],
          }),
        }}
      />
      <main className="flex-1">
        {/* Hero Section */}

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-samarag-cream to-samarag-light-green relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Columna de texto (izquierda en desktop, única en mobile) */}
            <motion.div
              className="space-y-4 w-full relative"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center sm:text-start">
                <span className="relative inline-block px-4 py-2 bg-primary text-white rounded-full">
                  SamaragTech
                </span>

                <span className="text-[#4f4b61] text-3xl md:text-4xl lg:text-5xl font-bold block mt-2">
                  Innovación en Software para tu Negocio
                </span>
              </h1>

              {/* Carrusel solo visible en mobile */}
              <div className="block lg:hidden">
                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={src}
                          alt={`Mockup ${index}`}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <p className="max-w-[600px] text-lg text-gray-700 md:text-xl">
                Transformamos tus ideas en soluciones digitales potentes y
                escalables. Desde desarrollo a medida hasta consultoría
                estratégica, impulsamos tu éxito.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90 duration-300 hover:duration-300"
                >
                  <Link
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={40} className="mr-2" />
                    ¡Hablemos por WhatsApp!
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full shadow-md hover:scale-105 bg-primary transition-transform border-primary text-white hover:text-black hover:bg-primary/10 duration-300 hover:duration-300"
                >
                  <Link href="/servicios">Descubre Nuestros Servicios</Link>
                </Button>
              </div>
            </motion.div>

            {/* Carrusel solo visible en desktop */}
            <motion.div
              className="hidden lg:block relative w-full h-[400px] lg:h-[500px] overflow-hidden"
              variants={fadeInUp}
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`Mockup ${index}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </motion.section>

        {/* Services/Features Section */}
        <motion.section
          id="servicios"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Nuestros <span className="text-primary">Servicios</span> Clave
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-700 mb-12"
              variants={fadeInUp}
            >
              Ofrecemos soluciones integrales para llevar tu negocio al
              siguiente nivel digital.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Code className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Desarrollo Web a Medida
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Creamos sitios web y aplicaciones web robustas, escalables y
                    optimizadas para el rendimiento.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Smartphone className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Aplicaciones Móviles Nativas
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Diseñamos y desarrollamos apps intuitivas para iOS y Android
                    que cautivan a tus usuarios.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-tr-3xl rounded-bl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Brain className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Inteligencia Artificial & ML
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Integramos soluciones de IA y Machine Learning para
                    automatizar procesos y obtener insights.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Users className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Consultoría Tecnológica
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Asesoramiento experto para optimizar tu infraestructura,
                    procesos y estrategia digital.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-br-3xl rounded-tl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Check className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Mantenimiento y Soporte
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Garantizamos el funcionamiento óptimo y la seguridad de tus
                    sistemas con soporte continuo.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Star className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Experiencia de Usuario (UX/UI)
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Diseñamos interfaces intuitivas y atractivas que garantizan
                    una experiencia de usuario excepcional.
                  </CardDescription>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90"
              >
                <Link href="/servicios">Ver Todos los Servicios</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* New: Digital Solutions Section */}
        <motion.section
          id="soluciones-digitales"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#413C58] to-[#A3C4BC] text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              variants={fadeInUp}
            >
              Nuestras{" "}
              <span className="text-samarag-yellow">Soluciones Digitales</span>{" "}
              Integrales
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-200 mb-12"
              variants={fadeInUp}
            >
              Vamos más allá del desarrollo tradicional, ofreciendo un abanico
              de soluciones que impulsan la transformación digital de tu
              empresa.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-samarag-yellow bg-white/10 backdrop-blur-sm">
                  <Code className="size-12 text-samarag-yellow mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-white">
                    Transformación Digital
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Modernizamos tus procesos y sistemas para una operación más
                    eficiente y competitiva en la era digital.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-samarag-yellow bg-white/10 backdrop-blur-sm">
                  <Smartphone className="size-12 text-samarag-yellow mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-white">
                    Optimización de Procesos
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Automatizamos tareas repetitivas y optimizamos flujos de
                    trabajo con software a medida.
                  </CardDescription>
                </Card>
              </motion.div>
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center p-6 text-center rounded-tr-3xl rounded-bl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-samarag-yellow bg-white/10 backdrop-blur-sm">
                  <Brain className="size-12 text-samarag-yellow mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-semibold mb-2 text-white">
                    Soluciones en la Nube
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Desarrollamos e implementamos infraestructuras y
                    aplicaciones escalables en la nube (AWS, Azure, GCP).
                  </CardDescription>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-samarag-yellow text-[#413C58] hover:bg-samarag-yellow/90"
              >
                <Link href="/soluciones-digitales">Explora Más Soluciones</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* New: Proyectos Realizados Section */}
        <motion.section
          id="proyectos"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Nuestros <span className="text-primary">Proyectos</span>{" "}
              Realizados
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-700 mb-12"
              variants={fadeInUp}
            >
              Descubre el impacto de nuestras soluciones en diversos sectores.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Image
                    src="/enzo_fit.avif"
                    width={300}
                    height={200}
                    alt="Project 1"
                    className="rounded-md object-cover w-full h-48 mb-4"
                    loading="lazy"
                  />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Sitio web profesional para entrenador personal
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Desarrollo de landing page optimizada para captación de
                    clientes y promoción de servicios de entrenamiento personal.
                  </CardDescription>
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 text-primary hover:text-primary/80 self-start"
                  >
                    <Link
                      href="https://enzoquinterofit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Proyecto →
                    </Link>
                  </Button>
                </Card>
              </motion.div>
              {/* Project Card 2 */}
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Image
                    src="/minha-casa.avif"
                    width={300}
                    height={200}
                    alt="Project 2"
                    className="rounded-md object-cover w-full h-48 mb-4"
                    loading="lazy"
                  />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    Sitio web para financiación de vivienda
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Desarrollo de plataforma web para facilitar la financiación
                    de viviendas, incluyendo simuladores y formularios de
                    contacto.
                  </CardDescription>
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 text-primary hover:text-primary/80 self-start"
                  >
                    <Link
                      href="https://www.minhacasafinanciada.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Proyecto →
                    </Link>
                  </Button>
                </Card>
              </motion.div>
              {/* Project Card 3 */}
              <motion.div className="group" variants={fadeInUp}>
                <Card className="h-full flex flex-col p-6 text-center rounded-tr-3xl rounded-bl-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary bg-white/80 backdrop-blur-sm">
                  <Image
                    src="/vaca-negra.avif"
                    width={300}
                    height={200}
                    alt="Project 3"
                    className="rounded-md object-cover w-full h-48 mb-4"
                    loading="lazy"
                  />
                  <CardTitle className="text-xl font-semibold mb-2 text-[#413C58]">
                    E-commerce para venta de carteras y gestión de inventario.
                  </CardTitle>
                  <CardDescription className="text-gray-700 flex-1">
                    Desarrollo de tienda online con gestión de inventario,
                    carrito de compras y pasarela de pago para venta de
                    accesorios de moda.
                  </CardDescription>
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 text-primary hover:text-primary/80 self-start"
                  >
                    <Link
                      href="https://bags-ecommerce.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Proyecto →
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90"
              >
                <Link href="#">Ver Todos los Proyectos</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Us Section */}
        <motion.section
          id="nosotros"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-l from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-tr-[60px] rounded-bl-[60px] overflow-hidden shadow-2xl"
              variants={fadeInUp}
            >
              <Image
                src="/who.avif"
                width={700}
                height={500}
                alt="About SamaragTech"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#413C58]">
                ¿Quiénes Somos en{" "}
                <span className="text-primary">SamaragTech</span>?
              </h2>
              <p className="text-lg text-gray-700">
                En SamaragTech, somos un equipo apasionado de ingenieros y
                diseñadores dedicados a crear software que resuelve problemas
                reales y genera valor. Creemos en la innovación, la calidad y la
                colaboración cercana con nuestros clientes para superar sus
                expectativas.
              </p>
              <p className="text-lg text-gray-700">
                Nuestra misión es ser tu socio tecnológico de confianza,
                brindando soluciones que no solo funcionan, sino que también
                impulsan tu crecimiento y te posicionan a la vanguardia del
                mercado.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90"
              >
                <Link href="/nosotros">Conoce a Nuestro Equipo</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonios"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Lo que Dicen Nuestros{" "}
              <span className="text-primary">Clientes</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-700 mb-12"
              variants={fadeInUp}
            >
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </motion.p>
            <motion.div
              className="w-[90%] mx-auto my-8 flex items-center justify-center"
              variants={fadeInUp}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    {
                      quote:
                        "Trabajar con SamaragTech fue un cambio total para nuestro negocio. Nos ayudaron a automatizar procesos que antes hacíamos manualmente.",
                      name: "Laura Fernández",
                      role: "COO, Distribuidora Andes",
                      initials: "LF",
                    },
                    {
                      quote:
                        "Teníamos muchas dudas al principio, pero su equipo nos guió paso a paso. Hoy contamos con una plataforma estable y moderna.",
                      name: "Carlos Méndez",
                      role: "Fundador, AgroSoluciones",
                      initials: "CM",
                    },
                    {
                      quote:
                        "El rediseño de nuestra web impactó directamente en nuestras ventas. Fue una inversión que valió cada centavo.",
                      name: "Valeria Núñez",
                      role: "Marketing Manager, RetailUp",
                      initials: "VN",
                    },
                  ].map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="p-6 h-full flex flex-col justify-between rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-md">
                        <CardContent className="p-0 text-left space-y-4">
                          <Quote className="size-7 text-primary" />
                          <p className="text-gray-800 italic leading-relaxed">
                            “{testimonial.quote}”
                          </p>
                          <div className="flex items-center gap-3 pt-4">
                            <Avatar>
                              <AvatarFallback>
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-[#1F1F1F]">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>

            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md hover:scale-105 transition-transform bg-primary text-white hover:bg-[#413C58]/90"
              >
                <Link href="/testimonios">Ver Todos los Testimonios</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Dedicated CTA Section */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#413C58] to-[#A3C4BC] text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="  px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              ¿Listo para{" "}
              <span className="text-samarag-yellow">
                Transformar tu Negocio
              </span>
              ?
            </h2>
            <p className="max-w-[800px] mx-auto text-lg md:text-xl mb-10 text-gray-200">
              No esperes más. Contáctanos hoy mismo y descubre cómo SamaragTech
              puede ayudarte a alcanzar tus metas digitales con soluciones de
              software de vanguardia.
            </p>
            <Button
              asChild
              className="bg-samarag-yellow text-[#413C58] hover:bg-samarag-yellow/90 rounded-tl-3xl rounded-br-3xl shadow-2xl px-10 py-7 text-xl font-bold hover:scale-105 transition-transform w-full md:w-fit"
            >
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
                ¡Envíanos un WhatsApp Ahora!
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contacto"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="  px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Contáctanos
            </motion.h2>
            <motion.p
              className="max-w-[700px] mx-auto text-lg text-gray-700 mb-8"
              variants={fadeInUp}
            >
              Estamos listos para escuchar tus ideas y convertirlas en realidad.
            </motion.p>
            <motion.div
              className="flex flex-col items-center gap-6"
              variants={fadeInUp}
            >
              <p className="text-xl font-semibold text-[#413C58]">
                La forma más rápida de contactarnos es por WhatsApp:
              </p>
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
                  <FaWhatsapp className="size-5 mr-2" />
                  Chatear con SamaragTech
                </Link>
              </Button>
              <p className="text-gray-600">
                También puedes enviarnos un correo a:{" "}
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-primary hover:underline"
                >
                  {emailAddress}
                </a>
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
