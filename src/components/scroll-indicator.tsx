"use client";

import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition < windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const gallerySection = document.getElementById("services");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-sm uppercase tracking-wider">
          Desliza para mas información
        </span>
        <FaChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </div>
  );
}
