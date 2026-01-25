"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

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

// Variantes de animación seguras (sin Math.random)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: { opacity: 0, scale: 0.9 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    handleInteraction();
  };

  // Efecto para animar el badge cuando cambia el slide
  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 },
    });
  }, [currentSlide, controls]);

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] lg:min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Fondo con lineares estáticos */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-blue-900 to-indigo-900">
        {/* Efectos de luz estáticos */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Badge de identidad */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 md:top-28 md:left-8 lg:left-80 md:transform-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:bg-white/15 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          animate={controls}
        >
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
          <span className="font-tech text-white text-sm sm:text-base">Jose Quiñones</span>
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-white/60">—</span>
            <span className="font-tech text-xs text-teal-300 tracking-wide">WEBQUI</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 xl:px-16 py-8 lg:py-12 xl:py-16">
        {/* Texto */}
        <div className="w-full lg:w-5/8 text-white max-w-2xl order-2 lg:order-1 mt-0 lg:mt-0 lg:pr-8 xl:pr-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {/* Título principal */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-impact text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 mt-4 lg:mb-6 leading-tight"
                >
                  <span className="block mb-1 sm:mb-2 tracking-tight">
                    {slides[currentSlide].contenido.tituloParte1}
                  </span>
                  <motion.span
                    variants={fadeInUp}
                    className="block text-teal-300 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight"
                  >
                    {slides[currentSlide].contenido.tituloParte2}
                  </motion.span>
                </motion.h1>

                {/* Descripción */}
                <motion.p
                  variants={fadeInUp}
                  className="text-sm xs:text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 opacity-90 leading-relaxed max-w-3xl"
                >
                  {slides[currentSlide].contenido.descripcion}
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeInUp} className="mt-4 sm:mt-6 ml-0 sm:ml-1 mb-1">
                  <motion.a
                    href={slides[currentSlide].contenido.botonLink}
                    target={slides[currentSlide].contenido.botonLink.startsWith("http") ? "_blank" : "_self"}
                    className="group inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-white text-teal-900 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-heading font-semibold text-sm sm:text-base md:text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto"
                    onClick={handleInteraction}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {slides[currentSlide].contenido.botonTexto}
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
          <div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            onMouseEnter={handleInteraction}
          >
            {/* Sello Webqui */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-teal-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-tech font-semibold shadow-lg tracking-wide"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              WEBQUI
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white/20">
                  <Image
                    src={slides[currentSlide].imagen.src}
                    alt={slides[currentSlide].imagen.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain transition-transform duration-700 p-4"
                    style={{ objectPosition: "center center" }}
                    priority={currentSlide === 0}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-teal-900/10 via-transparent to-transparent" />
                </div>

                {/* Borde estático */}
                <div className="absolute -inset-1 bg-linear-to-r from-teal-500/30 to-blue-500/30 rounded-xl lg:rounded-2xl blur-xl -z-10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 lg:space-x-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </motion.button>

        {/* Indicadores */}
        <div className="flex space-x-1.5 sm:space-x-2 lg:space-x-3"></div>

        <motion.button
          onClick={() => {
            nextSlide();
            handleInteraction();
          }}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </motion.button>
      </motion.div>

      {/* Partículas de fondo - SOLO en cliente (opcional, comentado por si quieres activarlo) */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              initial={{
                x: `${(i + 1) * 20}%`,
                y: `${(i + 1) * 15}%`,
              }}
              animate={{
                y: [null, "-100vh"],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
