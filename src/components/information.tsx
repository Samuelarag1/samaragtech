import React from "react";
import "./Information/styles.css";
import Link from "next/link";

const cardData = [
  {
    id: 0,
    title: "Básico",
    sections: "1-2 (Home, Contacto)",
    design: "basico",
    domain: "1 año gratis",
    form: "Formulario básico",
    seo: "basico",
    price: "130000",
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
    price: "200000",
    manteince: "$40.000/mes",
    time_required: "7 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion Estandar de tu empresa, podrias ayudarme?",
  },
  {
    id: 2,
    title: "Premium",
    sections: "6+ (Home, Servicios, Nosotros, etc)",
    design: "100% personalizado",
    domain: "1 año gratis",
    form: "Formulario avanzado + Chatbot",
    seo: "Avanzado",
    price: "130000",
    manteince: "$40.000/mes",
    time_required: "10 dias habiles",
    link: "https://wa.me/3834934797?text=Hola, me interesa el servicio de contratacion premium de tu empresa, podrias ayudarme?",
  },
];

function Information() {
  return (
    <div
      className="h-[100%] py-20 wave-container flex flex-col items-center justify-center gap-2"
      id="information"
    >
      <h2 className="text-3xl font-bold text-center text-white">
        Nuestros planes
      </h2>

      {cardData.map((card, index) => (
        <>
          <div
            key={index}
            className="h-[30rem] w-[24rem] py-20 bg-[#e7edf7] rounded-2xl shadow-lg shadow-black flex flex-col items-center relative border-2 border-solid border-black"
          >
            <div className="text-center text-black h-full flex flex-col items-center justify-between w-full">
              <div className="bg-[#182439] h-16 w-[100%] absolute top-0 rounded-t-xl rounded-b-[40%] text-center">
                <p className="text-white text-xl font-semibold">{card.title}</p>
              </div>
              <strong className="text-2xl">${card.price} ARS</strong>

              {/* Asegúrate de usar flex para cada par de contenido */}
              <p className="flex justify-between w-full px-4">
                <strong>Diseño:</strong>
                <span>{card.design}</span>
              </p>
              <p className="flex justify-between w-full px-4">
                <strong>Secciones:</strong>
                <span>{card.sections}</span>
              </p>
              <p className="flex justify-between w-full px-4">
                <strong>Contacto:</strong>
                <span>{card.form}</span>
              </p>
              <p className="flex justify-between w-full px-4">
                <strong>Mantenimiento:</strong>
                <span>{card.manteince}</span>
              </p>
              <p className="flex justify-between w-full px-4">
                <strong>Dominio y Hosting:</strong>
                <span>{card.domain}</span>
              </p>
              <p className="flex justify-between w-full px-4">
                <strong>Tiempo Estimado:</strong>
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
        </>
      ))}
    </div>
  );
}

export default Information;
