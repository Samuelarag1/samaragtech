"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
        <span className="text-[#F2DDA4]">Samarag</span>
        <span className="text-white">Tech</span>
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

      {/* Botón WhatsApp + Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* WhatsApp Button */}
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

        {/* Menú Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white border border-white/20"
            >
              <Menu className="size-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white/10 backdrop-blur-lg text-white p-8 space-y-8 shadow-xl border-l border-white/20 flex flex-col justify-between min-h-full"
          >
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-extrabold text-2xl mb-8 hover:opacity-90"
              >
                <span className="text-[#F2DDA4]">Samarag</span>
                <span>Tech</span>
              </Link>

              <nav className="flex flex-col gap-6">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-xl font-medium transition-colors duration-200 hover:text-[#F2DDA4] focus:outline-none focus:ring-2 focus:ring-[#F2DDA4] rounded px-2 py-1 ${
                      pathname === href
                        ? "underline font-semibold text-[#F2DDA4]"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <hr className="border-white/30 my-6" />
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
//               >
