"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Handshake, Heart, Check } from "lucide-react"; // Added icons for values

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

export default function NosotrosClientPage() {
  const whatsappNumber = "5493834934797";

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-samarag-cream to-samarag-light-green">
      <main className="flex-1">
        {/* Hero Section for About Us */}
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
              Conoce a <span className="text-samarag-yellow">SamaragTech</span>
            </motion.h1>
            <motion.p
              className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-200"
              variants={fadeInUp}
            >
              Somos un equipo apasionado por la tecnología, dedicados a
              construir el futuro digital de tu empresa.
            </motion.p>
          </div>
        </motion.section>

        {/* About Us Content Section */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-l from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-tr-[60px] rounded-bl-[60px] overflow-hidden shadow-2xl"
              variants={fadeInUp}
            >
              <Image
                src="/placeholder.svg?height=500&width=700"
                width={700}
                height={500}
                alt="About SamaragTech"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#413C58]">
                Nuestra <span className="text-[#A3C4BC]">Historia</span> y
                Misión
              </h2>
              <p className="text-lg text-gray-700">
                Fundada con la visión de democratizar el acceso a soluciones de
                software de vanguardia, SamaragTech ha crecido hasta convertirse
                en un referente en el desarrollo tecnológico. Desde nuestros
                inicios, nos hemos comprometido a entregar productos de alta
                calidad que no solo cumplen, sino que superan las expectativas
                de nuestros clientes.
              </p>
              <p className="text-lg text-gray-700">
                Nuestra misión es ser tu socio tecnológico de confianza,
                brindando soluciones que no solo funcionan, sino que también
                impulsan tu crecimiento y te posicionan a la vanguardia del
                mercado. Creemos en la innovación constante y en la construcción
                de relaciones duraderas.
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
                  <MessageCircle className="size-5 mr-2" />
                  ¡Hablemos de tu Proyecto!
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#413C58] to-[#A3C4BC] text-white"
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
              Nuestros <span className="text-samarag-yellow">Valores</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-200 mb-12"
              variants={fadeInUp}
            >
              Estos son los pilares que guían cada una de nuestras acciones y
              proyectos.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Lightbulb className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                <p className="text-gray-200 text-sm">
                  Siempre buscamos las soluciones más creativas y eficientes.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-tl-3xl rounded-br-3xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Handshake className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Colaboración</h3>
                <p className="text-gray-200 text-sm">
                  Trabajamos codo a codo con nuestros clientes para lograr sus
                  metas.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Check className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Calidad</h3>
                <p className="text-gray-200 text-sm">
                  Comprometidos con la excelencia en cada línea de código y
                  diseño.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-tr-3xl rounded-bl-3xl shadow-lg border border-white/20"
                variants={fadeInUp}
              >
                <Heart className="size-12 text-samarag-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pasión</h3>
                <p className="text-gray-200 text-sm">
                  Amamos lo que hacemos y eso se refleja en cada proyecto.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section (Placeholder) */}
        {/* <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Conoce a Nuestro <span className="text-primary">Equipo</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-lg text-gray-700 mb-12"
              variants={fadeInUp}
            >
              Detrás de cada solución innovadora, hay un equipo de expertos
              dedicados.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={120}
                  height={120}
                  alt="Team Member"
                  className="rounded-full mb-4 object-cover size-32"
                />
                <h3 className="text-xl font-semibold text-[#413C58]">
                  Nombre Apellido
                </h3>
                <p className="text-primary text-sm">CEO & Fundador</p>
                <p className="text-gray-600 text-sm mt-2">
                  Líder visionario con más de 15 años en la industria del
                  software.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-tl-3xl rounded-br-3xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={120}
                  height={120}
                  alt="Team Member"
                  className="rounded-full mb-4 object-cover size-32"
                />
                <h3 className="text-xl font-semibold text-[#413C58]">
                  Nombre Apellido
                </h3>
                <p className="text-primary text-sm">CTO</p>
                <p className="text-gray-600 text-sm mt-2">
                  Experto en arquitecturas escalables y nuevas tecnologías.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={120}
                  height={120}
                  alt="Team Member"
                  className="rounded-full mb-4 object-cover size-32"
                />
                <h3 className="text-xl font-semibold text-[#413C58]">
                  Nombre Apellido
                </h3>
                <p className="text-primary text-sm">Lead Developer</p>
                <p className="text-gray-600 text-sm mt-2">
                  Desarrollador senior con pasión por el código limpio y
                  eficiente.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-tr-3xl rounded-bl-3xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={120}
                  height={120}
                  alt="Team Member"
                  className="rounded-full mb-4 object-cover size-32"
                />
                <h3 className="text-xl font-semibold text-[#413C58]">
                  Nombre Apellido
                </h3>
                <p className="text-primary text-sm">Diseñador UX/UI</p>
                <p className="text-gray-600 text-sm mt-2">
                  Crea experiencias de usuario intuitivas y visualmente
                  atractivas.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section> */}
      </main>
    </div>
  );
}
