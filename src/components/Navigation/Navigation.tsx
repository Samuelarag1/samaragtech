"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpenMenu(false);
    }
  };

  return (
    <nav className="relative">
      <div className="hidden md:flex w-full justify-around h-20 items-center bg-[#060e46] shadow-md">
        <h2 className="text-2xl font-bold text-white">
          Samarag
          <span className="bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text">
            Tech
          </span>
        </h2>
        <div className="flex gap-6">
          <button
            onClick={() => handleScroll("inicio")}
            className="hover:text-gray-300"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-gray-300"
          >
            Servicios
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:text-gray-300"
          >
            Proyectos
          </button>
          <Link href="/about" className="hover:text-gray-300">
            Nosotros
          </Link>
        </div>
        <Link
          href={"https://wa.me/3518506240"}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-40 rounded-full hover:scale-105 transition-transform flex items-center justify-center text-white font-medium"
        >
          Contáctanos
        </Link>
      </div>

      <div className="w-full flex justify-between items-center bg-[#060e46] p-4 md:hidden">
        <h1 className="text-xl font-bold text-white">
          Samarag
          <span className="bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text">
            Tech
          </span>
        </h1>
        <button onClick={() => setIsOpenMenu(!isOpenMenu)} className="z-50">
          {isOpenMenu ? (
            <CgClose size={40} className="text-white" />
          ) : (
            <BiMenu size={40} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white text-black shadow-lg flex flex-col items-center justify-center space-y-6 z-40"
          >
            <button onClick={() => handleScroll("inicio")} className="text-lg">
              Inicio
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="text-lg"
            >
              Servicios
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-lg"
            >
              Proyectos
            </button>
            <Link href="/about" className="text-lg">
              Nosotros
            </Link>
            <Link
              href={"https://wa.me/3518506240"}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-40 rounded-full hover:scale-105 transition-transform flex items-center justify-center text-white font-medium"
            >
              Contáctanos
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
