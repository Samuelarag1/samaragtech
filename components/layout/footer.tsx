import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = "5493834934797";

  return (
    <footer className="bg-[#413C58] text-white px-6 py-14 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Columna 1 - Logo y descripción */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-lg">SamaragTech</span>
          </div>
          <p className="text-sm text-gray-300">
            Somos un equipo de diseñadores, desarrolladores y comercializadores
            experimentados, apasionado por ofrecer soluciones digitales
            excepcionales.
          </p>

          <div className="flex items-center gap-2 mt-4 text-gray-300 text-sm">
            <Mail className="w-4 h-4" />
            <span>samuelaragon616@gmail.com</span>
          </div>
        </div>

        {/* Columna 2 - Menú */}
        <div>
          <h4 className="font-semibold text-base mb-3">Menú</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Soporte */}
        <div>
          <h4 className="font-semibold text-base mb-3">Soporte</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/privacidad">Políticas de Privacidad</Link>
            </li>
            <li>
              <Link href="/terminos">Términos de Servicio</Link>
            </li>
          </ul>
        </div>

        {/* Columna 4 - Redes Sociales */}
        <div>
          <h4 className="font-semibold text-base mb-3">Redes Sociales</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </Link>
            </li>
          </ul>
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-5 py-2 rounded-full"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      <p className="text-center text-xs text-gray-400">
        Copyright © {year} by <strong>SamaragTech</strong>. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
