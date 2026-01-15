"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    imagen: {
      src: "/img/slide2-s-f-p-p.png",
      alt: "Foto personal profesional de Jose Quiñones",
    },
    contenido: {
      tituloParte1: "Transformo ideas",
      tituloParte2: "en experiencias digitales",
      descripcion:
        "Soy Jose Quiñones, desarrollador especializado en crear soluciones web modernas, rápidas y optimizadas que convierten visitantes en clientes.",
      botonTexto: "Hablemos de tu proyecto",
      botonLink: "https://wa.me/573247728641",
    },
  },
  {
    id: 2,
    imagen: {
      src: "/img/prueba.1.webp",
      alt: "Desarrollo web creativo por Webqui",
    },
    contenido: {
      tituloParte1: "Diseño que comunica",
      tituloParte2: "y tecnología que funciona",
      descripcion:
        "A través de mi marca Webqui, desarrollo soluciones digitales personalizadas que reflejan la esencia de cada proyecto y generan resultados medibles.",
      botonTexto: "Ver mis proyectos",
      botonLink: "/#proyectos",
    },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    handleInteraction();
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] lg:min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-blue-900 to-indigo-900"></div>

      {/* Badge de identidad - Mejorado para responsividad */}
      <div className="absolute top-20 left-50 transform -translate-x-1/2 z-20 md:top-28 md:left-8 lg:left-80 md:transform-none">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:bg-white/15 transition-colors duration-300">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <span className="font-semibold text-white text-sm sm:text-base">Jose Quiñones</span>
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-white/60">—</span>
            <span className="font-tech text-xs text-teal-300 font-semibold tracking-wide">WEBQUI</span>
          </div>
        </div>
      </div>

      {/* Contenido principal - Reorganizado para mobile */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 xl:px-16 py-8 lg:py-12 xl:py-16">
        {/* Texto - Para mobile va arriba, para desktop a la izquierda */}
        <div className="w-full lg:w-5/8 text-white max-w-2xl order-2 lg:order-1 mt-0 lg:mt-0 lg:pr-8 xl:pr-12">
          <div className="overflow-hidden">
            <div
              className={`transform transition-all duration-700 ease-out ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Título principal con mejor responsividad */}
              <h1 className="font-impact text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 mt-4 lg:mb-6 leading-tight">
                <span className="block mb-1 sm:mb-2 tracking-tight">{slides[currentSlide].contenido.tituloParte1}</span>
                <span className="block text-teal-300 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight">
                  {slides[currentSlide].contenido.tituloParte2}
                </span>
              </h1>

              {/* Descripción con mejor espaciado */}
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 opacity-90 leading-relaxed max-w-3xl">
                {slides[currentSlide].contenido.descripcion}
              </p>

              {/* CTA mejorado para mobile */}
              <div className="mt-4 sm:mt-6 ml-0 sm:ml-1 mb-1">
                <a
                  href={slides[currentSlide].contenido.botonLink}
                  target={slides[currentSlide].contenido.botonLink.startsWith("http") ? "_blank" : "_self"}
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-white text-teal-900 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-heading font-semibold text-sm sm:text-base md:text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
                  onClick={handleInteraction}
                >
                  {slides[currentSlide].contenido.botonTexto}
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen - Para mobile va abajo, para desktop a la derecha */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            onMouseEnter={handleInteraction}
          >
            {/* Sello Webqui ajustado para mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-teal-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-tech font-semibold shadow-lg tracking-wide">
              WEBQUI
            </div>

            <div className="relative">
              <div
                className={`relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-700 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src={slides[currentSlide].imagen.src}
                  alt={slides[currentSlide].imagen.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain transition-transform duration-500 p-4"
                  style={{ objectPosition: "center center" }}
                  priority={currentSlide === 0}
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Borde animado */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-xl lg:rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegación mejorados */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 lg:space-x-6 z-20">
        <button
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          disabled={isAnimating}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </button>

        {/* Indicadores */}
        <div className="flex space-x-1.5 sm:space-x-2 lg:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-teal-400 w-5 sm:w-6 lg:w-8 shadow-[0_0_10px_rgba(4,172,137,0.5)]"
                  : "bg-white/50 hover:bg-white/70"
              } ${isAnimating ? "cursor-not-allowed" : "cursor-pointer"}`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            nextSlide();
            handleInteraction();
          }}
          disabled={isAnimating}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
