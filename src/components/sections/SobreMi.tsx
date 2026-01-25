"use client";

import { Rocket, Users, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import type { Variants } from "framer-motion";

interface Estadistica {
  valor: string;
  label: string;
  icon: React.ElementType;
}

const estadisticas: Estadistica[] = [
  { valor: "4+", label: "Años de Experiencia", icon: Award },
  { valor: "20+", label: "Proyectos", icon: Rocket },
  { valor: "100%", label: "Clientes Satisfechos", icon: Users },
];

// Variantes de animación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.8,
    },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -5,
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    backgroundSize: "0% 100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    backgroundSize: "100% 100%",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

export default function SobreMi() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-50px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} className="pb-12 sm:pb-16 md:pb-20 bg-white overflow-hidden" id="sobre-mi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* COLUMNA IZQUIERDA - IMAGEN */}
          <motion.div className="w-full lg:w-1/2 relative order-2 lg:order-1" variants={imageVariants}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
              {/* Contenedor de imagen con efectos */}
              <div className="aspect-3/4 sm:aspect-4/5 lg:aspect-5/6 relative overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/img/sobremi.webp"
                  alt="José Quiñones - Desarrollador Full Stack"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay con lineare animado */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent group-hover:from-teal-900/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-teal-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Marco decorativo */}
              <motion.div
                className="absolute -inset-4 rounded-2xl sm:rounded-3xl bg-linear-to-br from-teal-400/20 to-blue-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                initial={false}
              />
            </div>

            {/* Badge de disponibilidad animado */}
            <motion.div
              className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg border border-gray-100 min-w-[200px] sm:min-w-auto font-space-grotesk backdrop-blur-sm"
              variants={badgeVariants}
              animate={["visible", "pulse"]}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="font-medium text-gray-800 text-xs sm:text-sm whitespace-nowrap">
                  Disponible para proyectos
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA - CONTENIDO */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-5 sm:space-y-7">
              {/* Título con animación */}
              <motion.h2
                className="font-impact text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 leading-tight text-center lg:text-left"
                variants={textVariants}
              >
                Transformo desafíos empresariales en{" "}
                <motion.span
                  className="text-transparent bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text block sm:inline relative"
                  variants={{
                    hidden: {
                      backgroundSize: "0% 100%",
                      opacity: 0.8,
                    },
                    visible: {
                      backgroundSize: "100% 100%",
                      opacity: 1,
                      transition: {
                        backgroundSize: {
                          duration: 1.2,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.6,
                        },
                      },
                    },
                  }}
                >
                  soluciones digitales efectivas
                </motion.span>
              </motion.h2>

              {/* Contenido */}
              <div className="space-y-4 sm:space-y-5 text-gray-600 font-outfit">
                <motion.p className="text-sm sm:text-base leading-relaxed" variants={textVariants}>
                  Soy{" "}
                  <strong className="text-gray-900 relative inline-block">
                    <span className="relative z-10">José Quiñones</span>
                  </strong>
                  , fundador de{" "}
                  <strong className="text-teal-600 relative inline-block">
                    <span className="relative z-10">Webqui</span>
                  </strong>
                  . Con más de 4 años de experiencia, desarrollo sistemas que resuelven problemas reales de negocio.
                </motion.p>

                {/* Highlight especialidad */}
                <motion.div
                  className="bg-linear-to-r from-teal-50/80 to-blue-50/80 p-4 sm:p-5 rounded-xl border-l-4 border-teal-500 shadow-sm font-space-grotesk overflow-hidden"
                  variants={highlightVariants}
                  whileHover={{
                    borderLeftColor: "#0d9488",
                    boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative">
                    {/* Fondo animado sutil */}
                    <motion.div
                      className="absolute -right-4 -top-4 w-20 h-20 bg-linear-to-br from-teal-400/10 to-blue-500/10 rounded-full"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />

                    <p className="text-sm sm:text-base text-gray-800 relative z-10 leading-relaxed">
                      <strong className="text-teal-700 font-semibold">Mi especialidad:</strong> sistemas con lógica
                      empresarial compleja que automatizan procesos y optimizan operaciones.
                    </p>
                  </div>
                </motion.div>

                <motion.p className="text-sm sm:text-base leading-relaxed" variants={textVariants}>
                  Creo desde sitios web profesionales hasta aplicaciones personalizadas, adaptando cada solución a las
                  necesidades específicas de tu empresa.
                </motion.p>
              </div>

              {/* Estadísticas */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.6,
                    },
                  },
                }}
              >
                {estadisticas.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={statVariants}
                      whileHover="hover"
                      className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 font-space-grotesk group/stat"
                    >
                      {/* Fondo sutil al hover */}
                      <motion.div
                        className="absolute inset-0 bg-linear-to-br from-teal-50/30 to-blue-50/30 opacity-0 group-hover/stat:opacity-100 rounded-lg sm:rounded-xl -z-10 transition-opacity duration-300"
                        initial={false}
                      />

                      <div className="flex items-center gap-3">
                        <motion.div
                          className="p-2 sm:p-2.5 bg-linear-to-br from-teal-100 to-blue-100 rounded-lg text-teal-600 group-hover/stat:from-teal-200 group-hover/stat:to-blue-200 transition-all duration-300"
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                        <div className="min-w-0">
                          <motion.div
                            className="text-lg sm:text-xl font-bold text-gray-900 truncate"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {stat.valor}
                          </motion.div>
                          <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <div className="relative">
              {/* Línea decorativa */}
              <div className="flex items-center justify-center gap-4 mt-8 mb-2">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-gray-300"></div>
                <span className="text-gray-400 text-sm font-medium tracking-wider">¿LISTO PARA COMENZAR?</span>
                <div className="h-px w-12 bg-linear-to-l from-transparent to-gray-300"></div>
              </div>
            </div>

            {/* Botón CTA - Desktop */}
            <motion.div
              className="hidden pt-6 lg:flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/573247728641"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-3 px-7 py-3.5 bg-linear-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 font-inter overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-teal-500 to-blue-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Texto y flecha */}
                <span className="relative z-10">Hablemos de tu proyecto</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    x: [0, 5, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                  }}
                >
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </motion.div>

                {/* Efecto de borde animado */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover/cta:border-white/20 rounded-lg"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Botón CTA - Móvil */}
          <motion.div
            className="w-full lg:hidden order-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="https://wa.me/573247728641"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta-mobile inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-linear-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 w-full font-inter overflow-hidden relative"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Efecto de brillo al hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-teal-500 to-blue-500 opacity-0 group-hover/cta-mobile:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <span className="text-sm sm:text-base relative z-10">Hablemos de tu proyecto</span>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 4, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <ArrowRight className="w-4 h-4 group-hover/cta-mobile:translate-x-1 transition-transform" />
              </motion.div>
            </motion.a>

            <motion.p
              className="mt-3 text-xs sm:text-sm text-gray-500 text-center font-outfit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Respuesta en menos de 2 horas durante horario laboral
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
