import type { Metadata } from "next"
import ServiciosClientPage from "./ServiciosClientPage"

export const metadata: Metadata = {
  title: "Nuestros Servicios | SamaragTech",
  description:
    "Descubre la gama completa de servicios de desarrollo de software de SamaragTech: desarrollo web, aplicaciones móviles, IA, consultoría y más.",
  keywords: [
    "servicios de software",
    "desarrollo web",
    "apps móviles",
    "IA y ML",
    "consultoría tecnológica",
    "mantenimiento de software",
    "UX/UI",
  ],
}

export default function ServiciosPage() {
  return <ServiciosClientPage />
}
