import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import BenefitsSection from "./Benefits/benefits";

const Header: React.FC = () => {
  return (
    <header
      id="home"
      className="flex flex-col justify-center items-center lg:h-screen h-full text-white gap-10 bg-gradient-to-b from-[#060e46] to-indigo-800 py-10"
    >
      <div className="bg-white/20 rounded-full p-4 flex items-center gap-2">
        <p>#1 en agencias de creatividad digital</p> <FaCrown color="gold" />
      </div>
      <div className="flex flex-col text-center">
        <p className="h-28 text-5xl lg:h-20 lg:text-6xl font-bold  inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Decisiones Inteligentes
        </p>
        <span className="text-4xl lg:text-5xl font-semibold">
          Para el Crecimiento de tu Negocio
        </span>
        <p className="text-wrap text-sm">
          Contamos con Diseñadores y Desarrolladores con amplia experiencia en
          el campo, apasionados por entregar las mejores soluciones digitales.
        </p>
      </div>
      <Link
        href={"https://wa.me/3518506240"}
        className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 h-16 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
      >
        Contactanos <BsArrowRight />
      </Link>
      <BenefitsSection />
    </header>
  );
};

export default Header;
