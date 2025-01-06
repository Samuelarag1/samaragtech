"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Typewriter from "typewriter-effect/dist/core";

const Header: React.FC = () => {
  const typewriterContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typewriterContainer.current) {
      const typewriter = new Typewriter(typewriterContainer.current, {
        loop: true,
        delay: 100,
        deleteSpeed: 50,
      });

      typewriter
        .typeString("Lo que crees...")
        .pauseFor(2000)
        .deleteChars(8)
        .typeString("queres...")
        .pauseFor(2000)
        .deleteChars(9)
        .typeString("soñas...")
        .pauseFor(2000)
        .deleteChars(8)
        .start();
    }
  }, []);

  return (
    <>
      <header className="flex flex-col items-center justify-center gap-10 h-screen bg-gray-900 text-white relative">
        <div className="h-full w-full relative">
          <Image
            src={"/hero-1.webp"}
            alt="hero"
            width={1280}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10">
          <div className="h-fit flex flex-col w-full p-5">
            <h1 className="lg:text-[4rem] text-4xl font-bold text-start">
              Donde todo comienza
            </h1>
            <div
              ref={typewriterContainer}
              className="typed-element lg:text-[3rem] text-2xl text-start ml-5"
            />
          </div>

          <div className="gap-5 flex flex-col justify-around items-center lg:mt-0 mt-10">
            <h2 className="font-bold text-2xl text-center">
              ¿ Queres saber que te podemos ofrecer ?
            </h2>

            <div className="flex w-full lg:justify-between justify-around">
              <button className="bg-[#2A4B7C] p-4 rounded-full font-bold border-2 border-black shadow-lg shadow-black hover:scale-110 duration-300 hover:bg-[#2A4B7C]/70 flex items-center gap-2">
                <IoLogoWhatsapp /> Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
