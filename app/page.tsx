import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reserve from "@/components/Reserve";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Reviews />
        <Reserve />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
