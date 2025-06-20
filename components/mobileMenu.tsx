"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  links: { href: string; label: string }[];
  whatsappNumber: string;
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  links,
  whatsappNumber,
  pathname,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-[#E7EFC5] text-[#413C58] p-6 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col gap-6 mt-12">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg font-medium transition hover:text-[#A3C4BC] ${
              pathname === href ? "underline font-semibold text-[#F2DDA4]" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}

        <Button
          asChild
          className="rounded-full shadow-md mt-4 bg-[#A3C4BC] text-[#413C58] hover:bg-[#BFD7B5]"
        >
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            WhatsApp
          </Link>
        </Button>
      </nav>
    </div>
  );
}
