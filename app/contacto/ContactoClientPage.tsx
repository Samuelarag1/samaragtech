"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"; // Added more icons
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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

export default function ContactoClientPage() {
  const whatsappNumber = "5493834934797";
  const phoneNumber = "+5493834934797";
  const emailAddress = "samuelaragon616@gmail.com";
  const address = "Av. Vélez Sarsfield 361, Córdoba. Argentina";

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-samarag-cream to-samarag-light-green">
      <main className="flex-1">
        {/* Hero Section for Contact */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#413C58] to-[#A3C4BC] text-white relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4"
              variants={fadeInUp}
            >
              <span className="text-samarag-yellow">Contáctanos</span> Hoy
            </motion.h1>
            <motion.p
              className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-200"
              variants={fadeInUp}
            >
              Estamos listos para escuchar tus ideas y convertirlas en realidad.
              Tu próximo proyecto comienza aquí.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
        >
          <div className="px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#413C58]"
              variants={fadeInUp}
            >
              Ponte en <span className="text-primary">Contacto</span>
            </motion.h2>
            <motion.p
              className="max-w-[700px] mx-auto text-lg text-gray-700 mb-12"
              variants={fadeInUp}
            >
              Elige la forma que más te convenga para comunicarte con nosotros.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <FaWhatsapp className="size-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#413C58]">
                  WhatsApp
                </h3>
                <p className="text-gray-700 mb-4">
                  La forma más rápida de obtener una respuesta.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-md bg-primary text-white hover:bg-[#413C58]/90"
                >
                  <Link
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chatear Ahora
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-tl-3xl rounded-br-3xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Mail className="size-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#413C58]">
                  Email
                </h3>
                <p className="text-gray-700 mb-4">
                  Envíanos un correo electrónico con tu consulta.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full shadow-md bg-primary text-white hover:bg-[#413C58]/90"
                >
                  <Link href={`mailto:${emailAddress}`}>Enviar Email</Link>
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-tr-3xl rounded-bl-3xl shadow-lg border border-samarag-light-green"
                variants={fadeInUp}
              >
                <Phone className="size-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#413C58]">
                  Teléfono
                </h3>
                <p className="text-gray-700 mb-4">
                  Llámanos para hablar directamente con nuestro equipo.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full shadow-md bg-primary text-white hover:bg-[#413C58]/90"
                >
                  <Link href={`tel:${phoneNumber}`}>Llamar Ahora</Link>
                </Button>
              </motion.div>
            </motion.div>
            {/* Address Section */}
            <motion.div className="mt-16 space-y-6" variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-[#413C58]">
                Nuestra Ubicación
              </h3>

              <div className="flex items-center justify-center gap-2 text-gray-700 text-lg">
                <MapPin className="size-10 md:size-6 text-primary" />
                <span>{address}</span>
              </div>

              <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg mt-6">
                <iframe
                  title="Mapa Patio Olmos"
                  src="https://www.google.com/maps?q=Patio+Olmos,+Córdoba,+Argentina&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
