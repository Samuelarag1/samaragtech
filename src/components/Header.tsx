"use client";
import React, { useEffect, useRef } from "react";
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
        .deleteAll()
        .typeString("Lo que quieres...")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Lo que sueñas...")
        .pauseFor(2000)
        .deleteAll()
        .start();
    }
  }, []);

  return (
    <header className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Donde todo comienza</h1>
      <div ref={typewriterContainer} className="typed-element text-2xl" />
    </header>
  );
};

export default Header;
