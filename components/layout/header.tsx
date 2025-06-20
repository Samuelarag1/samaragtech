"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
  const pathname = usePathname();
  const whatsappNumber = "5493834934797";

  const links = [
    { href: "/servicios", label: "Servicios" },
    { href: "/soluciones-digitales", label: "Soluciones Digitales" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="px-4 lg:px-10 h-20 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-[#413C58]/80 shadow-md border-b border-white/10 text-white">
      <Link
        href="/"
        className="flex items-center gap-2 font-extrabold text-xl tracking-tight hover:opacity-90 transition"
      >
        <div className="flex flex-col items-start">
          <span className="text-[#F2DDA4] text-xl font-bold">
            Samarag<span className="text-white">Tech</span>
          </span>
          <span className="text-xs text-white font-semibold ">
            Innovación y Tecnología
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition duration-200 hover:text-[#F2DDA4] ${
              pathname === href
                ? "underline underline-offset-4 text-[#F2DDA4] font-semibold"
                : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* WhatsApp + Mobile Menu */}
      <div className="flex items-center gap-4">
        <Button
          asChild
          className="hidden md:inline-flex rounded-full px-6 py-2 shadow-lg bg-[#F2DDA4] text-[#413C58] hover:bg-[#e6cd85] font-semibold transition"
        >
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="size-4 mr-2" />
            WhatsApp
          </Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden" about="Mobile Menu">
            <Button
              className="text-white h-fit w-fit p-2"
              aria-label="Open Mobile Menu"
            >
              <TiThMenuOutline className="size-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-white/10 backdrop-blur-lg text-white p-0 shadow-xl border-l border-white/20 flex flex-col min-h-full [&>button.absolute]:hidden"
          >
            {/* Header con Logo y Botón de cerrar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 font-extrabold text-xl hover:opacity-90"
                >
                  <span className="text-[#F2DDA4]">
                    Samarag<span className="text-white">Tech</span>
                  </span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="ghost" className="text-white">
                  <X className="size-6" />
                </Button>
              </SheetClose>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 px-6 py-8">
              {links.map(({ href, label }) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    className={`text-xl font-medium transition-colors duration-200 hover:text-[#F2DDA4] focus:outline-none focus:ring-2 focus:ring-[#F2DDA4] rounded px-2 py-1 ${
                      pathname === href
                        ? "underline font-semibold text-[#F2DDA4]"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* WhatsApp botón */}
            <div className="mt-auto px-6 pb-6">
              <hr className="border-white/30 my-6" />
              <SheetClose asChild>
                <Button
                  asChild
                  className="w-full rounded-full shadow-md bg-[#F2DDA4] text-[#413C58] hover:bg-[#e6cd85] font-semibold py-3 transition"
                >
                  <Link
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="size-5" />
                    WhatsApp
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
