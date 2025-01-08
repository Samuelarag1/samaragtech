import Header from "@/components/Header";
import Navigation from "@/components/Navigation/Navigation";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Planes from "@/components/Planes/Planes";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <ScrollIndicator />
      <Planes />
    </>
  );
}
