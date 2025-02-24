import Link from "next/link";
import { BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <>
      <header
        id="home"
        className="flex flex-col justify-center items-center h-screen text-white gap-20"
      >
        <div className="bg-white/20 rounded-full p-4 flex items-center gap-2">
          <p>#1 en agencias de creatividad digital</p> <FaCrown color="gold" />
        </div>
        <div className="flex flex-col text-center">
          <p className="h-20 font-bold text-6xl inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Decisiones Inteligentes
          </p>
          <span className="text-5xl font-semibold">
            Para el Crecimiento de tu Negocio
          </span>
          <p className="text-wrap">
            Contamos con Diseniadores, Desarrolladores con amplia experiencia en
            el campo Apasionados por entregar las mejores soluciones digitales{" "}
          </p>
        </div>
        <Link
          href={"https://wa.me/3518506240"}
          className="bg-gradient-to-r from-blue-600 to-indigo-400 h-16 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
        >
          Contactanos <BsArrowRight />
        </Link>
      </header>
    </>
  );
};

export default Header;
