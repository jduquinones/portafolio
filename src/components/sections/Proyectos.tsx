"use client";
import Image from "next/image";
import { FaDocker, FaChartBar, FaClipboardCheck, FaCar } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Proyectos sin imágenes (módulos)
const otrosProyectos = [
  {
    id: 3,
    nombre: "Dockerización de App Web",
    tipo: "DevOps",
    descripcion: "Dockerización completa de aplicación web existente",
    tecnologias: ["Docker", "Docker Compose", "Apache", "MySQL", "PostgreSQL"],
    resultado: "Dockerización exitosa para facilitar despliegue y escalabilidad",
    icon: <FaDocker className="text-blue-500" />,
    color: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    nombre: "Autoevaluación",
    tipo: "Módulo App Web",
    descripcion:
      "Sistema de evaluación 360° configurable por categorías y competencias. Permite autoevaluación del colaborador y evaluación del jefe",
    tecnologias: ["Laravel", "Boostrap", "MySQL", "PostgreSQL"],
    resultado:
      "Genera planes de acción obligatorios o voluntarios según umbrales configurables por RRHH, con seguimiento y monitoreo de mejoras. Aplica para evaluaciones anuales y cambios de cargo",
    icon: <FaClipboardCheck className="text-green-500" />,
    color: "bg-green-50",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    nombre: "API para Power BI",
    tipo: "API & Business Intelligence",
    descripcion: "API REST para consumo de datos desde ERP hacia Power BI",
    tecnologias: ["Laravel", "API REST", "Power BI", "PostgreSQL"],
    resultado: "Dashboard interactivo con datos en tiempo real del ERP",
    icon: <FaChartBar className="text-purple-500" />,
    color: "bg-purple-50",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 9,
    nombre: "Inspección de Vehículos",
    tipo: "Módulo App Web",
    descripcion:
      "Sistema de inspección pre-operativa de flota vehicular y control de entrega de mercancía por medio de firma digital",
    tecnologias: ["Laravel", "Boostrap", "JavaScript"],
    resultado: "Control completo de flota y trazabilidad de entregas con firma digital del cliente",
    icon: <FaCar className="text-amber-500" />,
    color: "bg-orange-50",
    gradient: "from-amber-500 to-orange-500",
  },
];

// Proyectos principales con imágenes
const proyectosPrincipales = [
  {
    id: 1,
    nombre: "Empreagenda",
    tipo: "SaaS Multi-tenant",
    descripcion: "SaaS multi-tenant para gestión de complejos deportivos",
    imagen: "/img/proyectos/empreagenda1.webp",
    url: "https://empreagenda.com/",
    color: "from-blue-900 to-teal-800",
  },
  {
    id: 2,
    nombre: "Insuagro",
    tipo: "Web Corporativa",
    descripcion: "Web corporativa para empresa agropecuaria",
    imagen: "/img/proyectos/insuagro.webp",
    url: "https://insuagro.com",
    color: "from-amber-50 to-green-100",
  },
  {
    id: 3,
    nombre: "Ashe",
    tipo: "App Web Corporativa",
    descripcion: "App web corporativa para empresa comercializadora de papel",
    imagen: "/img/proyectos/despachos.webp",
    url: "https://ashe.com.co",
    color: "from-blue-50 to-emerald-100",
  },
];

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const projectCardVariants = {
  hidden: {
    y: 60,
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
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const moduleCardVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    rotateX: 5,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
  hover: {
    y: -6,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const imageVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 1,
    y: 0,
  },
};

export default function Proyectos() {
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
      id="proyectos"
      ref={ref}
      className="pt-16 sm:pt-20 md:pt-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO CON ANIMACIÓN */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2 className="font-impact text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 md:mb-6">
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              Proyectos
            </motion.span>
            <motion.span
              className="ml-2 sm:ml-3 text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              Destacados
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
            Una selección de mis mejores trabajos para clientes y empresas
          </motion.p>
        </motion.div>

        {/* GRID DE PROYECTOS PRINCIPALES */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {proyectosPrincipales.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              variants={projectCardVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* EFECTO DE BRILLO AL HOVER */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl -z-10"
                initial={false}
                transition={{ duration: 0.4 }}
              />

              {/* IMAGEN PRINCIPAL */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <motion.div variants={imageVariants} className="relative h-full w-full">
                  <Image
                    src={proyecto.imagen}
                    alt={`proyecto ${proyecto.nombre}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* OVERLAY GRADIENTE SOBRE LA IMAGEN */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* BADGE FLOTANTE */}
                <motion.span
                  className="absolute top-4 left-4 text-xs font-semibold text-white px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {proyecto.tipo}
                </motion.span>
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
                <h3 className="font-impact text-xl md:text-2xl text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {proyecto.nombre}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{proyecto.descripcion}</p>

                {/* BOTÓN VISITAR SITIO */}
                <motion.a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm md:text-base"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>Visitar sitio</span>
                  <motion.div
                    animate={{ rotate: [0, 45, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: proyecto.id * 0.3,
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              </div>

              {/* OVERLAY DE HOVER - INFO COMPLETA */}
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                whileHover="visible"
                className="absolute inset-0 bg-gradient-to-br from-teal-900/95 to-blue-900/95 p-6 md:p-8 flex flex-col justify-end opacity-0 rounded-2xl"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-impact text-2xl text-white mb-3">{proyecto.nombre}</h3>
                  <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">{proyecto.descripcion}</p>
                  <motion.a
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white border border-white/50 hover:border-white hover:bg-white hover:text-teal-900 px-4 py-3 rounded-lg transition-all duration-300 group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visitar proyecto</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECCIÓN DE OTROS PROYECTOS */}
        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h3
              className="font-impact text-2xl md:text-3xl text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Soluciones Técnicas
              </span>
            </motion.h3>

            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Algunos módulos y soluciones desarrollados durante mi trayectoria empresarial
            </motion.p>
          </div>

          {/* GRID DE MÓDULOS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            transition={{ delayChildren: 1.2 }}
          >
            {otrosProyectos.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                variants={moduleCardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* LÍNEA SUPERIOR ANIMADA */}
                <motion.div
                  className="relative h-1.5 bg-gradient-to-r from-teal-400 to-blue-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: proyecto.id * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* EFECTO DE FONDO AL HOVER */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${proyecto.gradient} opacity-0 group-hover:opacity-5 rounded-2xl -z-10`}
                  initial={false}
                />

                <div className="p-6 flex-1 flex flex-col">
                  {/* ICONO Y TIPO */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm group-hover:shadow-md transition-shadow"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      <div className="text-2xl">{proyecto.icon}</div>
                    </motion.div>

                    <motion.span
                      className="text-xs font-semibold text-gray-500 px-3 py-1.5 bg-gray-100 rounded-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {proyecto.tipo}
                    </motion.span>
                  </div>

                  {/* NOMBRE */}
                  <motion.h4
                    className="font-impact text-xl text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {proyecto.nombre}
                  </motion.h4>

                  {/* DESCRIPCIÓN */}
                  <motion.div
                    className="flex-1 mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{proyecto.descripcion}</p>
                  </motion.div>

                  {/* RESULTADO DESTACADO */}
                  <motion.div
                    className={`mb-5 p-4 rounded-lg border-l-4 border-teal-500 ${proyecto.color}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xs font-semibold text-teal-700 mb-1">Impacto:</p>
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{proyecto.resultado}</p>
                  </motion.div>

                  {/* TECNOLOGÍAS */}
                  <motion.div
                    className="mt-auto pt-5 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { type: "spring", stiffness: 400 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CALL TO ACTION FINAL */}
        {/* CALL TO ACTION FINAL - MODERNO */}
        <motion.div
          className="mt-20 md:mt-24 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute -inset-4 overflow-hidden opacity-10">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
