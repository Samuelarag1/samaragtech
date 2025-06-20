import type { Metadata } from "next"
import NosotrosClientPage from "./NosotrosClientPage"

export const metadata: Metadata = {
  title: "Sobre Nosotros | SamaragTech",
  description:
    "Conoce al equipo de SamaragTech, nuestra misión, visión y los valores que nos impulsan a crear soluciones de software innovadoras y de alta calidad.",
  keywords: ["quiénes somos", "equipo SamaragTech", "misión", "visión", "valores", "empresa de software"],
}

export default function NosotrosPage() {
  return <NosotrosClientPage />
}
