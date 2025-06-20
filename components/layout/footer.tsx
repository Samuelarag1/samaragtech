import Link from "next/link";
import { MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "5493834934797"; // Tu número real

  return (
    <footer className="w-full border-t bg-gray-100 text-gray-600 py-10 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-start">
          &copy; {new Date().getFullYear()} <strong>SamaragTech</strong>. Todos
          los derechos reservados.
        </p>

        {/* Navegación de enlaces */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="#" className="hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Términos de Servicio
          </Link>
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Link>
          <Link
            href="https://twitter.com/SamaragTech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </Link>
        </nav>
      </div>
    </footer>
  );
}
