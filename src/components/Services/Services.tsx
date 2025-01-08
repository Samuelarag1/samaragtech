"use client";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { motion } from "framer-motion";

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
      <div className="h-[100%] w-full flex flex-col items-center" id="services">
        <div className="h-[50%] bg-[#182439] py-20">
          <h2 className="text-4xl text-center font-bold">Servicios</h2>
          <p className="text-xl text-center text-wrap p-2 font-semibold">
            En Samarag<span className="text-blue-600">Tech</span>, te ayudamos a
            brillar en el mundo digital con soluciones diseñadas para potenciar
            tu negocio. Creamos experiencias únicas y optimizadas que se
            destacan por su calidad, funcionalidad y atención al detalle. Sin
            excusas, sin complicaciones.
          </p>
        </div>
        <div className="h-[50%] w-full gap-5 flex flex-row flex-wrap items-center justify-center p-6">
          {services.map((services, index) => (
            <>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-[27rem] w-72 border-4 shadow-xl shadow-black border-white rounded-[20px] flex flex-col items-center justify-around text-center p-4"
              >
                <div className="flex flex-col items-center justify-center h-[6rem]">
                  {services.icon}
                  <h3 className="text-2xl font-bold">{services.title}</h3>
                </div>

                <p className="text-sm font-semibold">{services.description}</p>
                <div className="text-sm text-left">
                  <ul className="list-disc list-inside">
                    {services.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm">
                  {" "}
                  <strong>Ideal para:</strong> {services.idealFor}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
