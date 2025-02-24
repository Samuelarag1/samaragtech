import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div>
      <div className="flex w-full justify-around h-16 items-center">
        <h2 className="text-2xl font-bold">
          Samarag<span>Tech</span>
        </h2>
        <nav className="flex gap-5">
          <a href="#" className="hover:border-b hover:border-white">
            Inicio
          </a>
          <a href="#" className="hover:border-b hover:border-white">
            Servicios
          </a>
          <a href="#" className="hover:border-b hover:border-white">
            Proyectos
          </a>
          <a href="#" className="hover:border-b hover:border-white">
            Nosotros
          </a>
        </nav>
        <Link
          href={"https://wa.me/3518506240"}
          className="bg-gradient-to-r from-blue-600 to-indigo-400 h-12 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
        >
          Contactanos
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
