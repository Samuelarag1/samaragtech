"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
  whatsappNumber: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  links,
  pathname,
  whatsappNumber,
}) => (
  <div
    className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#E7EFC5] text-[#413C58] p-6 space-y-6 z-50 transform transition-transform duration-300 shadow-xl ${
      open ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex flex-col gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-lg hover:opacity-80"
        onClick={onClose}
      >
        <span>SamaragTech</span>
      </Link>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-lg font-medium transition hover:text-[#A3C4BC] ${
            pathname === href ? "underline font-semibold text-[#F2DDA4]" : ""
          }`}
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center bg-[#A3C4BC] text-[#413C58] px-4 py-2 rounded-full font-medium shadow hover:bg-[#BFD7B5] transition"
      >
        <FaWhatsapp className="size-4 mr-2" /> WhatsApp
      </a>
    </div>
  </div>
);

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <label
    className="relative w-10 h-8 cursor-pointer z-50"
    onClick={() => setOpen(!open)}
  >
    <input type="checkbox" checked={open} readOnly className="hidden" />
    <span
      className={`block absolute h-1 w-full bg-white rounded-full transition duration-300 ${
        open ? "rotate-45 top-2 left-[5px]" : "top-0"
      }`}
    ></span>
    <span
      className={`block absolute h-1 w-full bg-white rounded-full transition duration-300 ${
        open ? "w-0 opacity-0" : "top-1/2 -translate-y-1/2"
      }`}
    ></span>
    <span
      className={`block absolute h-1 w-full bg-white rounded-full transition duration-300 ${
        open ? "-rotate-45 bottom-[4px] left-[5px]" : "bottom-0"
      }`}
    ></span>
  </label>
);

export default function Header() {
  const pathname = usePathname();
  const whatsappNumber = "5493834934797";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/servicios", label: "Servicios" },
    { href: "/soluciones-digitales", label: "Soluciones Digitales" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-[#413C58] text-white shadow-md sticky top-0 z-50">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-lg hover:opacity-90 transition"
      >
        <h1 className="text-white text-2xl">SamaragTech</h1>
      </Link>

      <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition duration-200 hover:text-[#A3C4BC] ${
              pathname === href ? "underline font-semibold text-[#F2DDA4]" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 md:gap-6">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded-full shadow-md bg-[#A3C4BC] text-[#413C58] px-4 py-2 font-medium hover:bg-[#BFD7B5] transition"
        >
          <FaWhatsapp className="size-4 mr-2" /> WhatsApp
        </a>
        <div className="md:hidden relative">
          <Burger open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        pathname={pathname}
        whatsappNumber={whatsappNumber}
      />
    </header>
  );
}
