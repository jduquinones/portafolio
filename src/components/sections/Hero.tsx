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
    <section className="relative w-full min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-blue-900 to-indigo-900"></div>

      {/* Badge de identidad - POSICIÓN CORRECTA */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20 md:top-28 md:left-16 md:translate-x-0">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 transition-colors duration-300">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <span className="font-semibold text-white">Jose Quiñones</span>
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-white/60">—</span>
            <span className="font-tech text-xs text-teal-300 font-semibold tracking-wide">WEBQUI</span>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
        {/* Texto - Izquierda */}
        <div className="lg:w-1/2 text-white max-w-2xl order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="overflow-hidden">
            <div
              className={`transform transition-all duration-700 ease-out ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Título principal con animación de entrada */}
              <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                <span className="block mb-2 tracking-tight">{slides[currentSlide].contenido.tituloParte1}</span>
                <span className="block text-teal-300 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight">
                  {slides[currentSlide].contenido.tituloParte2}
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed max-w-3xl">
                {slides[currentSlide].contenido.descripcion}
              </p>

              {/* CTA con icono */}
              <div className="mt-6 ml-1 mb-1">
                <a
                  href={slides[currentSlide].contenido.botonLink}
                  target={slides[currentSlide].contenido.botonLink.startsWith("http") ? "blank" : "_self"}
                  className="group inline-flex items-center gap-3 bg-white text-teal-900 px-6 sm:px-8 py-4 rounded-xl font-heading font-semibold text-base sm:text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-95"
                  onClick={handleInteraction}
                >
                  {slides[currentSlide].contenido.botonTexto}
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen - Derecha */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            onMouseEnter={handleInteraction}
          >
            {/* Sello Webqui en la imagen */}
            <div className="absolute -top-3 -right-3 z-10 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-tech font-semibold shadow-lg tracking-wide">
              WEBQUI
            </div>

            <div className="relative">
              <div
                className={`relative h-56 sm:h-64 md:h-72 lg:h-96 xl:h-[28rem] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-700 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src={slides[currentSlide].imagen.src}
                  alt={slides[currentSlide].imagen.alt}
                  fill
                  sizes="(max-width: 750px) 80vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-contain transition-transform duration-500 p-4"
                  style={{ objectPosition: "center center" }}
                  priority={currentSlide === 0}
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Borde animado */}
              <div className="absolute -inset-1 bg-linear-to-r from-teal-500/30 to-blue-500/30 rounded-xl lg:rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-6 z-20">
        <button
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          disabled={isAnimating}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Indicadores */}
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-teal-400 w-6 sm:w-8 shadow-[0_0_10px_rgba(4,172,137,0.5)]"
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
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
