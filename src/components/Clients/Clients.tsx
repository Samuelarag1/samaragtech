import Image from "next/image";
import React from "react";

interface IMCLients {
  id: number;
  title: string;
  description: string;
  url: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const clients: IMCLients[] = [
  {
    id: 0,
    title: "Zurdoo Tattoo",
    description: "Tatuajes y piercings en Catamarca, Argentina.",
    url: "https://zurdo-tattoo.vercel.app/",
    image: {
      src: "/static/zurdoo-tattoo.webp",
      alt: "RentaFacil",
      width: 500,
      height: 500,
    },
  },
  {
    id: 1,
    title: "RentaFacil",
    description: "Alquiler de propiedades en Argentina.",
    url: "https://apartment-rentals.vercel.app/",
    image: {
      src: "/static/renta-facil.webp",
      alt: "RentaFacil",
      width: 500,
      height: 500,
    },
  },
];

function Clients() {
  return (
    <div className="h-screen" id="clients">
      <div className="py-10  flex flex-col justify-around">
        <h3 className="text-center text-3xl font-bold mt-10">
          Nuestros Clientes
        </h3>
        <div className="flex flex-wrap w-full items-center justify-around gap-2">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-black/60 p-4 rounded-xl flex flex-col items-end gap-2 m-4 shadow-xl shadow-black"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={client.image.src}
                  alt={client.image.alt}
                  width={client.image.width}
                  height={client.image.height}
                />
                <h2 className="font-bold text-xl">{client.title}</h2>
                <p>{client.description}</p>
              </div>

              <a
                href={client.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#cad8ed] text-black shadow-sm shadow-[#cad8ed] rounded-full font-bold "
              >
                VISITAR
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
