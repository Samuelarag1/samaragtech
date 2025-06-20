import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "Contacto | SamaragTech",
  description:
    "Contáctanos en SamaragTech para discutir tus proyectos de software, consultoría o cualquier consulta. ¡Estamos listos para ayudarte!",
  keywords: ["contacto", "SamaragTech contacto", "número de WhatsApp", "email de contacto"],
}

export default function ContactoPage() {
  return <ContactoClientPage />
}
