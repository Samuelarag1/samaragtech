import type React from "react";
import { BiDollar, BiStar } from "react-icons/bi";
import { FaEarthAmericas, FaUsers } from "react-icons/fa6";

export default function Benefits() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500">
        <div className="absolute left-0 top-0 w-32 h-32 bg-indigo-800/20 rounded-full -translate-x-16 -translate-y-16" />

        <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-400/20 rounded-full translate-x-20 translate-y-20" />

        <div className="relative px-8 py-12 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Beneficios de mejorar tu negocio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <BenefitCard
              icon={<FaEarthAmericas className="w-6 h-6 text-indigo-600" />}
              title="Expansion del mercado"
            />
            <BenefitCard
              icon={<BiDollar className="w-6 h-6 text-indigo-600" />}
              title="Alta Rentabilidad"
            />
            <BenefitCard
              icon={<BiStar className="w-6 h-6 text-indigo-600" />}
              title="Mas Profesionalismo"
            />
            <BenefitCard
              icon={<FaUsers className="w-6 h-6 text-indigo-600" />}
              title="Atraccion de clientes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-20 h-20 bg-black rounded-full items-center justify-center flex bg-gradient-to-b to-indigo-600">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </div>
  );
}
