"use client";

import { useState } from "react";
import { Globe, Code, ShoppingCart, Cloud, ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import type { Variants } from "framer-motion";

const servicios = [
  {
    id: 1,
    titulo: "Sitios Web",
    descripcion:
      "Desarrollo de sitios web profesionales, responsivos y optimizados para conversión. Desde landing pages efectivas hasta sitios corporativos completos que reflejan la esencia de tu marca.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    linear: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    titulo: "Aplicaciones Web",
    descripcion:
      "Creación de software a medida que automatiza procesos únicos de tu negocio. Sistemas de gestión internos diseñados exclusivamente para optimizar tu operación diaria.",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    linear: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    titulo: "E-commerce",
    descripcion:
      "Tiendas online completas con catálogos dinámicos, sistemas de pago integrados y gestión simplificada. Soluciones escalables para vender 24/7 con experiencia optimizada.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    linear: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    titulo: "SaaS",
    descripcion:
      "Plataformas de Software como Servicio multi-tenant para monetizar tu solución digital. Aplicaciones suscripcionales con arquitectura segura para múltiples clientes.",
    icon: <Cloud className="w-6 h-6" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    linear: "from-amber-500 to-orange-500",
  },
];

// Variantes de animación optimizadas CON TIPOS CORRECTOS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const iconContainerVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const iconVariants: Variants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const arrowVariants: Variants = {
  normal: { x: 0 },
  hover: {
    x: 6,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

export default function Servicios() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "-50px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-linear-to-b from-white via-gray-50/30 to-white overflow-hidden"
      id="servicios"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con animación mejorada */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as any,
          }}
        >
          <h2 className="font-impact text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 md:mb-6">
            <motion.span
              className="bg-linear-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              Soluciones
            </motion.span>
            <motion.span
              className="ml-2 sm:ml-3 text-transparent bg-linear-to-r from-teal-500 to-blue-500 bg-clip-text inline-block p-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              Digitales
            </motion.span>
          </h2>

          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            Desarrollo tecnologías que transforman ideas en herramientas poderosas para tu negocio
          </motion.p>
        </motion.div>

        {/* Grid de servicios con mejor spacing */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {servicios.map((servicio) => (
            <motion.div
              key={servicio.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative"
              onMouseEnter={() => setHoveredId(servicio.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                zIndex: hoveredId === servicio.id ? 10 : 1,
              }}
            >
              {/* Efecto de sombra al hacer hover */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{
                  background:
                    hoveredId === servicio.id
                      ? `radial-linear(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)`
                      : "transparent",
                }}
              />

              {/* Tarjeta principal */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 group-hover:border-gray-200 shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Línea decorativa superior */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-transparent to-transparent"
                  initial={false}
                  animate={{
                    background:
                      hoveredId === servicio.id
                        ? `linear-linear(90deg, transparent, ${servicio.linear.split(" ")[1].replace("from-", "")} 50%, transparent)`
                        : "linear-linear(90deg, transparent, transparent 50%, transparent)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Contenedor del icono y título */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                  {/* Icono animado */}
                  <motion.div
                    variants={iconContainerVariants}
                    initial="normal"
                    whileHover="hover"
                    className="shrink-0 relative self-center sm:self-start"
                  >
                    <div
                      className={`p-4 rounded-xl ${servicio.bgColor} ${servicio.borderColor} border-2 relative z-10`}
                    >
                      <motion.div className={`${servicio.color}`} variants={iconVariants}>
                        {servicio.icon}
                      </motion.div>
                    </div>

                    {/* Efecto sutil de pulso */}
                    {hoveredId === servicio.id && (
                      <>
                        <motion.div
                          className={`absolute -inset-2 bg-linear-to-br ${servicio.linear} rounded-2xl opacity-0`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0, 0.15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className={`absolute -inset-3 bg-linear-to-br ${servicio.linear} rounded-2xl opacity-0`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: [0.8, 1.4, 0.8],
                            opacity: [0, 0.1, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Título animado */}
                  <div className="text-center sm:text-left">
                    <motion.h3
                      className={`text-xl sm:text-2xl font-bold ${servicio.color} mb-2`}
                      variants={titleVariants}
                    >
                      {servicio.titulo}
                    </motion.h3>

                    {/* Badge sutil */}
                    <motion.span
                      className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${servicio.bgColor} ${servicio.color}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {servicio.id === 1 && "Responsive"}
                      {servicio.id === 2 && "A medida"}
                      {servicio.id === 3 && "Escalable"}
                      {servicio.id === 4 && "Multi-tenant"}
                    </motion.span>
                  </div>
                </div>

                {/* Descripción animada */}
                <motion.div className="mb-8" variants={textVariants}>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{servicio.descripcion}</p>
                </motion.div>

                {/* Enlace CTA animado */}
                <motion.div
                  className="pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300"
                  variants={ctaVariants}
                >
                  <motion.a
                    href="https://wa.me/573247728641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/cta inline-flex items-center justify-between text-sm sm:text-base font-semibold ${servicio.color} hover:${servicio.color}/80 transition-colors w-full`}
                    whileHover="hover"
                    initial="normal"
                  >
                    <motion.span className="flex items-center gap-3" variants={arrowVariants}>
                      <span className="relative">
                        Consultar servicio
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current opacity-50"
                          initial={false}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <motion.div
                        className="flex items-center"
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: servicio.id * 0.2,
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.span>
                    <span
                      className={`opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 ${servicio.color}`}
                    >
                      →
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota adicional con animación mejorada */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <motion.div
              className="h-px w-8 bg-gray-300"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
            <span className="text-gray-400 text-sm">¿Necesitas más?</span>
            <motion.div
              className="h-px w-8 bg-gray-300"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            ¿Necesitas una solución personalizada?{" "}
            <motion.a
              href="https://wa.me/573247728641"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link font-semibold text-teal-600 hover:text-teal-700 relative inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Hablemos de tu proyecto</span>
              {/* Subrayado animado */}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover/link:w-full transition-all duration-300"
                initial={false}
                whileHover={{ width: "100%" }}
              />
              {/* Fondo sutil al hover */}
              <motion.span
                className="absolute -inset-2 bg-teal-50 rounded-lg opacity-0 group-hover/link:opacity-100 -z-10 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
