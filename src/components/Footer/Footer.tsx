import Link from "next/link";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0b2e] to-[#080829]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0 max-w-xl">
            Discutamos y hagamos realidad tu visión.
          </h2>
          <Link
            href={"https://wa.me/3518506240"}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-40 rounded-full hover:scale-105 duration-300 flex gap-2 items-center justify-center"
          >
            Contactanos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-700">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg" />
              <span className="text-white text-xl font-bold">SamaragTech</span>
            </div>
            <p className="text-gray-300 mb-6">
              Somos un equipo de diseñadores, desarrolladores y
              comercializadores experimentados, apasionado por ofrecer
              soluciones digitales excepcionales.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MdMail className="w-5 h-5" />
              <a
                href="mailto:aragonsalisolutions@gmail.com"
                className="hover:text-white transition-colors"
              >
                aragonsalisolutions@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3">
              {["FAQ", "Politicas de Privacidad", "Terminos de Servicio"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-3">
              {["Instagram"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} by SamaragTech. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
