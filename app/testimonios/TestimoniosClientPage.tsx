"use client";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Quote } from "lucide-react"; // Added Quote icon
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

export default function TestimoniosClientPage() {
  const whatsappNumber = "5493834934797";

  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-samarag-cream to-samarag-light-green">
      <main className="flex-1">
        {/* Hero Section for Testimonials */}
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
              Lo que Dicen Nuestros{" "}
              <span className="text-samarag-yellow">Clientes</span>
            </motion.h1>
            <motion.p
              className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-200"
              variants={fadeInUp}
            >
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
              Sus historias de éxito son el motor de nuestra pasión.
            </motion.p>
          </div>
        </motion.section>

        {/* Testimonials Carousel Section */}
        <motion.section
          id="testimonios"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-samarag-cream to-samarag-light-green"
          initial="initial"
          whileInView="animate"
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
          </div>
        </motion.section>

        {/* CTA Section for Testimonials */}
        <motion.section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#413C58] to-[#A3C4BC] text-white"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
        >
          <div className="px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              ¿Quieres ser nuestra próxima{" "}
              <span className="text-samarag-yellow">Historia de Éxito</span>?
            </h2>
            <p className="max-w-[800px] mx-auto text-lg md:text-xl mb-10 text-gray-200">
              Permítenos ayudarte a transformar tu negocio con soluciones de
              software innovadoras y a medida.
            </p>
            <Button
              asChild
              className="bg-samarag-yellow text-[#413C58] hover:bg-samarag-yellow/90 rounded-tl-3xl rounded-br-3xl shadow-2xl px-10 py-7 text-xl font-bold hover:scale-105 transition-transform"
            >
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-6 mr-3" />
                ¡Contáctanos Hoy!
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
