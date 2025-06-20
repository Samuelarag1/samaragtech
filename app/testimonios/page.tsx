import type { Metadata } from "next"
import TestimoniosClientPage from "./TestimoniosClientPage"

export const metadata: Metadata = {
  title: "Testimonios de Clientes | SamaragTech",
  description:
    "Lee lo que nuestros clientes satisfechos dicen sobre las soluciones de software y el servicio de SamaragTech. Historias de éxito que nos inspiran.",
  keywords: ["testimonios", "opiniones de clientes", "casos de éxito", "reseñas de software"],
}

export default function TestimoniosPage() {
  return <TestimoniosClientPage />
}
