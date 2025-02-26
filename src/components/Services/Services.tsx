"use client";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { motion } from "framer-motion";
import Head from "next/head";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import Image from "next/image";

const services = [
  {
    id: 0,
    title: "Landing Pages",
    icon: <BiWorld size={100} />,
    description:
      "Una página web personalizada para captar clientes, promocionar productos o lanzar campañas.",
    details: [
      "Diseño atractivo y profesional adaptado a tu marca.",
      "Contenido optimizado para conversiones.",
      "Optimización para SEO y tiempos de carga ultrarrápidos.",
    ],
    idealFor:
      "Emprendedores, campañas publicitarias, lanzamientos de productos",
  },
  {
    id: 1,
    title: "Sistema de Gestion",
    icon: <FaCalendarDays size={100} />,
    description:
      "Una herramienta online para gestionar reservas de clientes de forma rápida y sencilla.",
    details: [
      "Calendario interactivo para reservas.",
      "Confirmaciones automáticas vía email o WhatsApp",
      "Gestión de pagos online (opcional)",
    ],
    idealFor: "Restaurantes, peluquerías, gimnasios, clínicas, hoteles.",
  },
  {
    id: 2,
    title: "Promociónes",
    icon: <BsMegaphoneFill size={100} />,
    description:
      "Herramientas y estrategias digitales para aumentar la visibilidad de tu negocio en la web.",
    details: [
      "Página web profesional con galería de productos o servicios.",
      "Integración con redes sociales para impulsar promociones.",
      "Optimización para aparecer en Google (SEO local).",
    ],
    idealFor: "Comercios locales, servicios profesionales, eventos.",
  },
];

function Services() {
  return (
    <>
      <Head>
        <title>Servicios - SamaragTech</title>
        <meta
          name="description"
          content="Ofrecemos servicios web personalizados como diseño, desarrollo y mantenimiento de sitios."
        />
        <meta property="og:title" content="Servicios - SamaragTech" />
        <meta
          property="og:description"
          content="Descubre nuestros planes y precios para el desarrollo web, mantenimiento y más."
        />
        <meta
          property="og:image"
          content="https://samaragtech.com/images/servicios.jpg"
        />
      </Head>

      <div className="h-[100%] w-full flex flex-col items-center" id="services">
        <div className="hidden md:flex h-20 w-full md:h-32 bg-black/60 items-center justify-around relative">
          <Image
            src={"static/trust_us/adobe.webp"}
            alt="hero"
            width={100}
            height={100}
            loading="lazy"
          />

          <Image
            src={"static/trust_us/Kemis.svg"}
            alt="hero"
            width={50}
            height={50}
            loading="lazy"
          />

          <Image
            src={"static/trust_us/google.webp"}
            alt="hero"
            width={100}
            height={100}
            loading="lazy"
          />

          <Image
            src={"static/trust_us/meus_treinamentos.svg"}
            alt="hero"
            width={100}
            height={100}
            loading="lazy"
          />

          <Image
            src={"static/trust_us/slack.webp"}
            alt="hero"
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex md:hidden h-20 w-full md:h-32 bg-black/60 items-center justify-around relative">
          <Carousel>
            <CarouselItem width="100px">
              <div className="w-full flex items-center justify-around">
                <Image
                  src={"static/trust_us/adobe.webp"}
                  alt="hero"
                  width={100}
                  height={100}
                />
                <Image
                  src={"static/trust_us/Kemis.svg"}
                  alt="hero"
                  width={50}
                  height={50}
                />
              </div>
            </CarouselItem>
            <CarouselItem width="100px">
              <div className="w-full flex items-center justify-around">
                {" "}
                <Image
                  src={"static/trust_us/google.webp"}
                  alt="hero"
                  width={100}
                  height={100}
                />
                <Image
                  src={"static/trust_us/meus_treinamentos.svg"}
                  alt="hero"
                  width={100}
                  height={100}
                />
              </div>
            </CarouselItem>
            <CarouselItem width="100px">
              <div className="w-full flex items-center justify-around">
                <Image
                  src={"static/trust_us/slack.webp"}
                  alt="hero"
                  width={50}
                  height={50}
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <div className="h-[50%] py-20">
          <h2 className="text-4xl lg:text-6xl text-center font-bold">
            Servicios que tenemos para{" "}
            <span className="font-bold inline-block bg-gradient-to-r from-blue-600  to-indigo-400 text-transparent bg-clip-text">
              ofrecerte
            </span>
          </h2>
        </div>
        <div className="h-[50%] w-full gap-5 flex flex-row flex-wrap items-center justify-center p-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative h-[27rem] w-72 p-[3px] rounded-[20px] bg-gradient-to-r from-blue-600 to-indigo-400"
            >
              <div className="h-full w-full bg-white rounded-[18px] flex flex-col items-center justify-around text-center p-4 ">
                <div className="flex flex-col items-center justify-center h-[6rem]">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-white">
                  {service.description}
                </p>
                <div className="text-sm text-left text-white">
                  <ul className="list-disc list-inside">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-white">
                  {" "}
                  <strong>Ideal para:</strong> {service.idealFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
