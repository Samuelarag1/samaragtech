"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortafolioPage() {
  const [tabActivo, setTabActivo] = useState("diseno");

  const tabs = [
    { id: "diseno", nombre: "Diseño UI/UX" },
    { id: "marketing", nombre: "Marketing Digital" },
    { id: "desarrollo", nombre: "Desarrollo" },
  ];

  const proyectos = {
    diseno: [
      {
        titulo: "Construccion de casas Financiadas",
        url: "https://www.minhacasafinanciada.com/",
        imagen: "/static/projects/harvey.webp",
        description:
          "Diseño de una plataforma para gestionar planes de financiamiento de viviendas.",
      },
      {
        titulo: "Tattoo Studio",
        url: "https://tattoo-studio-rho.vercel.app/",
        imagen: "/static/projects/tattoo-studio.webp",
        description:
          "Creación de una web moderna y visualmente atractiva para estudios de tatuajes.",
      },
    ],
    marketing: [
      {
        titulo: "Campaña Digital SEO Kemi's",
        url: "https://www.kemis.com.br/",
        imagen: "/static/projects/landprincipa.webp",
        description:
          "Optimización SEO para mejorar la visibilidad de la marca en el mercado brasileño.",
      },
      {
        titulo: "Campaña Digital SEO de Tienda Saludable",
        url: "https://medano-saludable.vercel.app/",
        imagen: "/static/projects/medano.webp",
        description:
          "Estrategia de posicionamiento web para una tienda enfocada en productos saludables.",
      },
    ],
    desarrollo: [
      {
        titulo: "Desarrollo Sistema ERP Kemi's",
        url: "https://kemis.app/es/login",
        imagen: "/static/projects/kemis-system.webp",
        description:
          "Desarrollo de un sistema ERP para la gestión eficiente de la empresa.",
      },
      {
        titulo: "Desarrollo Sistema ERP GETRE",
        url: "#",
        imagen: "/static/projects/getre.webp",
        description:
          "Solución ERP personalizada para optimizar procesos empresariales.(Privado)",
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#1a1253] to-[#240032] px-4 md:px-8 p-2"
      id="projects"
    >
      <p className="text-start my-7 text-xl md:text-4xl text-white font-semibold w-full">
        Apasionados por ayudar a las empresas a crecer y a destacar en línea,
        hemos trabajado con marcas de todo el mundo.
      </p>

      <div className="w-full h-auto md:h-40 bg-gradient-to-r from-indigo-800 to-blue-950 shadow flex flex-wrap md:flex-nowrap items-center justify-around rounded-xl mt-5 p-6 gap-6 md:gap-0">
        {[
          { valor: "+5", texto: "Años de experiencia" },
          { valor: "+25", texto: "Proyectos Finalizados" },
          { valor: "+15", texto: "Clientes Satisfechos" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full md:w-auto"
          >
            <p className="text-5xl md:text-6xl font-bold text-white">
              {item.valor}
            </p>
            <span className="text-gray-300 text-base md:text-lg font-light text-center">
              {item.texto}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl mt-10 px-4 md:px-0">
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full w-full overflow-x-auto lg:overflow-hidden md:h-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActivo(tab.id)}
                className={`md:text-xl px-4 py-2 flex-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${
                    tabActivo === tab.id
                      ? "bg-[#6366f1] text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {tab.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {proyectos[tabActivo as keyof typeof proyectos].map(
            (proyecto, index) => (
              <div
                key={index}
                className="h-fit md:h-[400px] bg-gradient-to-r from-indigo-800 to-blue-950 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] shadow-lg"
              >
                <Image
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  className="w-full h-full sm:h-64 object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {proyecto.titulo}
                  </h3>
                </div>

                <div className="w-full flex p-2 items-center justify-around">
                  <p>{proyecto.description}</p>

                  <Link
                    href={proyecto.url}
                    className="m-4 bg-white text-black font-semibold p-2 rounded-full hover:scale-105 duration-300 shadow-md shadow-black"
                  >
                    Visitar
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
