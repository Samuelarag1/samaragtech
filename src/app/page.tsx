import Header from "@/components/Header";
import Information from "@/components/information";
import Navigation from "@/components/Navigation/Navigation";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <ScrollIndicator />
      <Information />
    </>
  );
}
