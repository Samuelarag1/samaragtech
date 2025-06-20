import type { Metadata } from "next"
import SolucionesDigitalesClientPage from "./SolucionesDigitalesClientPage"

export const metadata: Metadata = {
  title: "Soluciones Digitales Integrales | SamaragTech",
  description:
    "Descubre cómo SamaragTech impulsa tu transformación digital con optimización de procesos, soluciones en la nube, análisis de datos y desarrollo de plataformas SaaS.",
  keywords: [
    "soluciones digitales",
    "transformación digital",
    "optimización de procesos",
    "soluciones en la nube",
    "análisis de datos",
    "integración de sistemas",
    "desarrollo SaaS",
  ],
}

export default function SolucionesDigitalesPage() {
  return <SolucionesDigitalesClientPage />
}
