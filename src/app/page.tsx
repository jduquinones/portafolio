import Header from "@/components/layouts/Header";
import Hero from "@/components/sections/Hero";
import Proyectos from "@/components/sections/Proyectos";
import Tecnologia from "@/components/sections/Tecnologias";
import Servicios from "@/components/sections/Servicios";
import SobreMi from "@/components/sections/SobreMi";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Servicios />
      <Tecnologia />
      <Proyectos />
      <SobreMi />
    </div>
  );
}
