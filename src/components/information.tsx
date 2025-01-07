import React from "react";
import "./Information/styles.css";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const cardData = [
  {
    id: 0,
    title: "Básico",
    sections: "1-2 (Home, Contacto)",
    design: "Diseño básico",
    domain: "Dominio y hosting gratis",
    form: "Formulario básico",
    seo: "basico",
    price: "130.000,00",
    manteince: "$40.000/mes",
    time_required: "5 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion basico de tu empresa, podrias ayudarme?",
  },
  {
    id: 1,
    title: "Estándar",
    sections: "3-5 (Home, Contacto, Servicios, etc)",
    design: "semi-personalizado",
    domain: "1 año gratis",
    form: "Integraciones con Whatsapp",
    seo: "básico",
    price: "200.000,00",
    manteince: "$40.000/mes",
    time_required: "7 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion Estandar de tu empresa, podrias ayudarme?",
  },
  {
    id: 2,
    title: "Premium",
    sections: "6 o más (Home, Servicios, Nosotros, etc)",
    design: "100% personalizado",
    domain: "1 año gratis",
    form: "Formulario avanzado + Chatbot",
    seo: "Avanzado",
    price: "130.000,00",
    manteince: "$40.000/mes",
    time_required: "10 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion premium de tu empresa, podrias ayudarme?",
  },
];

function Information() {
  return (
    <div
      className={`h-[100%] py-20 wave-container flex flex-col items-center justify-center gap-2 `}
      id="information"
    >
      <h2 className="text-3xl font-bold text-center text-white">
        Nuestros planes
      </h2>

      {cardData.map((card, index) => (
        <>
          <div key={index}>
            <div
              className={`text-center text-black h-[30rem] flex flex-col items-center justify-between w-[18rem] relative rounded-xl shadow-black shadow-xl ${
                index === 1 ? "bg-[#325c97]" : "bg-white"
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
                className={`h-full mt-36 flex flex-col justify-around items-center w-full rounded-t-xl  ${
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
                  <span>{card.manteince}</span>
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
                  className="bg-[#182439] text-white p-4 rounded-full"
                >
                  Me interesa
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Information;
