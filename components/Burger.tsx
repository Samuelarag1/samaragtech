"use client";

import { useState } from "react";
import classNames from "classnames";

interface BurgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Burger({ isOpen, toggle }: BurgerProps) {
  return (
    <button
      onClick={toggle}
      className="relative w-10 h-8 focus:outline-none z-50"
      aria-label="Toggle navigation menu"
    >
      <span
        className={classNames(
          "block absolute h-1 w-full bg-white rounded transition-transform duration-300",
          isOpen ? "rotate-45 top-3 left-1" : "top-0 left-0 rotate-0"
        )}
      />
      <span
        className={classNames(
          "block absolute h-1 w-full bg-white rounded transition-all duration-300",
          isOpen ? "opacity-0 top-3" : "top-3"
        )}
      />
      <span
        className={classNames(
          "block absolute h-1 w-full bg-white rounded transition-transform duration-300",
          isOpen ? "-rotate-45 top-3 left-1" : "top-6 left-0 rotate-0"
        )}
      />
    </button>
  );
}
