"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import Image from "next/image";

const services = [
  {
    id: 0,
    title: "Diseño Web UX/UI",
    image: "static/services/ui.webp",
    description:
      "Diseño de páginas web con una experiencia de usuario agradable y una interfaz intuitiva.",
  },
  {
    id: 1,
    title: "Marketing Digital",
    image: "static/services/seo.webp",
    description:
      "Logica de SEO para que tu página web sea encontrada en los motores de búsqueda, optimización de contenido y más.",
  },
  {
    id: 2,
    title: "Desarrollo Web",
    image: "static/services/coding.webp",
    description:
      "Desarrollo de sitios web con tecnologías modernas y escalables.",
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

      <div
        className="h-[100%] w-full flex flex-col items-center bg-gradient-to-br from-indigo-600 via-indigo-800 to-[#240032]"
        id="services"
      >
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
            src={"static/trust_us/tencent.webp"}
            alt="hero"
            width={100}
            height={100}
            loading="lazy"
          />
          <Image
            src={"static/trust_us/airbnb.webp"}
            alt="hero"
            width={100}
            height={100}
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
                  src={"static/trust_us/tencent.webp"}
                  alt="hero"
                  width={100}
                  height={100}
                  loading="lazy"
                />
                <Image
                  src={"static/trust_us/airbnb.webp"}
                  alt="hero"
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <div className="h-[50%] py-20">
          <h2 className="text-5xl lg:text-6xl text-center font-bold">
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
              className="relative h-[500px] w-[350px] p-[3px]  rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-green-600 max-w-6xl mx-auto overflow-hidden shadow-md shadow-indigo-500"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[150px] h-[150px] bg-black/50 rounded-full blur-[100px] mix-blend-multiply"></div>
              </div>

              <div className="absolute left-0 top-0 w-32 h-32 bg-indigo-800/20 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-400/20 rounded-full translate-x-20 translate-y-20" />
              <div className="h-full w-full bg-white  rounded-xl flex flex-col items-center justify-around text-center p-4 bg-gradient-to-br from-indigo-500 via-blue-500 to-green-600">
                <div className="flex flex-col items-center justify-around h-[70%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={100}
                  />
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
