"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className="relative">
      <div className="hidden md:flex w-full justify-around h-16 items-center">
        <h2 className="text-2xl font-bold">
          Samarag<span>Tech</span>
        </h2>
        <div className="flex gap-5">
          <Link href="/" className="hover:border-b hover:border-white">
            Inicio
          </Link>
          <Link href="/services" className="hover:border-b hover:border-white">
            Servicios
          </Link>
          <Link href="/projects" className="hover:border-b hover:border-white">
            Proyectos
          </Link>
          <Link href="/about" className="hover:border-b hover:border-white">
            Nosotros
          </Link>
        </div>
        <Link
          href={"https://wa.me/3518506240"}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
        >
          Contactanos
        </Link>
      </div>
      <div className="w-full flex justify-between items-center">
        <button
          className="md:hidden z-50 text-black m-2"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? (
            <CgClose size={40} />
          ) : (
            <BiMenu size={40} color="white" />
          )}
        </button>{" "}
        <Link
          href={"https://wa.me/3518506240"}
          className="md:hidden m-2 bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
        >
          Contactanos
        </Link>
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white text-black shadow-lg flex flex-col items-center justify-center space-y-6 z-40"
          >
            <Link href={"/"} onClick={() => setIsOpenMenu(false)}>
              Inicio
            </Link>
            <Link href={"/services"} onClick={() => setIsOpenMenu(false)}>
              Servicios
            </Link>
            <Link href={"/projects"} onClick={() => setIsOpenMenu(false)}>
              Proyectos
            </Link>
            <Link href={"/about"} onClick={() => setIsOpenMenu(false)}>
              Nosotros
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
