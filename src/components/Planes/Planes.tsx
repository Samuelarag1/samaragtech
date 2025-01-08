"use client";
import React from "react";
import "./styles.css";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 0,
    title: "Básico",
    sections: "2 Secciones",
    design: "Diseño básico",
    domain: "Dominio y hosting gratis",
    form: "Formulario de contacto",
    seo: "SEO básico",
    price: "130.000,00",
    manteince: "$40.000/mes",
    time_required: "Demora: 5 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion basico de tu empresa, podrias ayudarme?",
  },
  {
    id: 1,
    title: "Estándar",
    sections: "3 o 4 Secciones",
    design: "Semi-personalizado",
    domain: "Dominio y hosting gratis",
    form: "Contacto por Whatsapp",
    seo: "SEO básico",
    price: "200.000,00",
    manteince: "$40.000/mes",
    time_required: "Demora: 7 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion Estandar de tu empresa, podrias ayudarme?",
  },
  {
    id: 2,
    title: "Premium",
    sections: "6 o más secciones",
    design: "100% personalizado",
    domain: "1 año gratis",
    form: "Contacto por whatsapp",
    seo: "Avanzado",
    price: "300.000,00",
    manteince: "$40.000/mes",
    time_required: "Demora: 10 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion premium de tu empresa, podrias ayudarme?",
  },
];

function Planes() {
  return (
    <div
      className={`h-[100%] py-20 wave-container flex flex-col items-center justify-center gap-2 `}
      id="planes"
    >
      <h2 className="text-3xl font-bold text-center text-white ">
        Nuestros planes
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 w-full lg:flex-row lg:mt-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            animate={card.id === 1 ? { scale: 1.1 } : { scale: 1 }}
            className={`text-center text-black h-[30rem] flex flex-col items-center justify-between w-[18rem] relative rounded-xl shadow-black shadow-xl ${
              index === 1 ? "bg-[#325c97] scale-110" : "bg-white"
            }`}
          >
            <div
              className={`h-[30%] w-[100%] absolute top-0 rounded-t-xl rounded-b-sm text-center flex flex-col items-center justify-center ${
                index === 1 ? "text-white" : "text-black"
              } border-b-2 border-black/25`}
            >
              <p className="text-3xl font-semibold">${card.price}</p>
              <span
                className={` ${
                  index === 1 ? "text-gray-200" : "text-gray-800"
                }`}
              >
                pago unico
              </span>
            </div>
            <div
              className={`h-full mt-36 flex flex-col justify-around items-center w-full rounded-t-xl ${
                index === 1 ? "text-white" : "text-black"
              }`}
            >
              <strong className="text-2xl">{card.title}</strong>
              <p className="flex justify-between w-full pl-5 pr-5 ">
                <FaCheck />
                <span>{card.design}</span>
              </p>
              <p className="flex justify-between w-full pl-5 pr-5">
                <FaCheck />
                <span>{card.sections}</span>
              </p>
              <p className="flex justify-between w-full pl-5 pr-5">
                <FaCheck />
                <span>{card.form}</span>
              </p>
              <p className="flex justify-between w-full pl-5 pr-5">
                <FaCheck />
                <span>{card.seo}</span>
              </p>
              <p className="flex justify-between w-full pl-5 pr-5">
                <FaCheck />
                <span>{card.domain}</span>
              </p>
              <p className="flex justify-between w-full pl-5 pr-5">
                <FaCheck />
                <span>{card.time_required}</span>
              </p>
              <Link
                as={card.link}
                href={card.link}
                className="bg-[#182439] text-white font-bold p-4 rounded-full flex items-center justify-center gap-2 shadow-black shadow-lg border-black border-solid border-2"
              >
                Consultar
                <IoLogoWhatsapp />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center">
        <strong className="text-white">Mantenimiento:</strong> $40.000,00
        mensual. El primer mes <strong>GRATIS!</strong>
      </p>
    </div>
  );
}

export default Planes;
