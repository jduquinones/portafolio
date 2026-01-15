"use client";
import Image from "next/image";
import { FaDocker, FaChartBar, FaClipboardCheck, FaCar } from "react-icons/fa";

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
  },
];

export default function proyectos() {
  return (
    // Ejemplo simplificado de la estructura visual principal
    <section id="proyectos" className="pt-3 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ENCABEZADO AL ESTILO GLINT */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-5xl mt-2 mb-4">
            Proyectos <span className="text-teal-300">Destacados</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Una selección de mis mejores trabajos para clientes y empresas
          </p>
        </div>

        {/* GRID DE PROYECTOS - EL CORAZÓN DEL ESTILO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PROYECTO 1: EMPREAGENDA */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* IMAGEN PRINCIPAL */}
            <div className="h-64 overflow-hidden bg-linear-to-br from-blue-900 to-teal-800">
              <Image
                src="/img/proyectos/empreagenda1.webp"
                alt="proyecto empreagenda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            {/* OVERLAY CON INFORMACIÓN AL HACER HOVER */}
            <div className="absolute inset-0 bg-teal-900/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-impact text-2xl text-white mb-2">Empreagenda</h3>
              <p className="text-gray-200 text-sm mb-4">SaaS multi-tenant para gestión de complejos deportivos</p>
              <a
                href="https://empreagenda.com/"
                target="blank"
                className="text-white border border-white px-4 py-2 rounded-lg inline-block self-start hover:bg-white hover:text-teal-900 transition"
              >
                Visitar Sitio
              </a>
            </div>
          </div>

          {/* PROYECTO 2: INSUAGRO */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="h-64 overflow-hidden bg-linear-to-br from-amber-50 to-green-100">
              <div className="h-full flex items-center justify-center">
                <Image
                  src="/img/proyectos/insuagro.webp"
                  alt="proyecto empreagenda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-teal-900/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-impact text-2xl text-white mb-2">Insuagro</h3>
              <p className="text-gray-200 text-sm mb-4">Web corporativa para empresa agropecuaria</p>
              <a
                href="https://insuagro.com"
                target="_blank"
                className="text-white border border-white px-4 py-2 rounded-lg inline-block self-start hover:bg-white hover:text-gray-900 transition"
              >
                Visitar Sitio
              </a>
            </div>
          </div>

          {/* PROYECTO 3: DESPACHOS */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="h-64 overflow-hidden bg-linear-to-br from-blue-50 to-emerald-100">
              <div className="h-full flex items-center justify-center">
                <Image
                  src="/img/proyectos/despachos.webp"
                  alt="proyecto empreagenda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-teal-900/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-impact text-2xl text-white mb-2">Ashe</h3>
              <p className="text-gray-200 text-sm mb-4">App web corporativa para empresa comercializadora de papel</p>
              <a
                href="https://ashe.com.co"
                target="_blank"
                className="text-white border border-white px-4 py-2 rounded-lg inline-block self-start hover:bg-white hover:text-gray-900 transition"
              >
                Visitar Sitio
              </a>
            </div>
          </div>
        </div>

        {/* OTROS PROYECTOS - VERSIÓN MEJORADA */}
        <div className="mb-16 mt-16">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Algunos módulos y soluciones desarrollados durante mi trayectoria empresarial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otrosProyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* HEADER CON GRADIENTE */}
                <div className="relative h-3 bg-linear-to-r from-teal-400 to-blue-500"></div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* ICONO Y TIPO */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-linear-to-br from-gray-50 to-white shadow-sm">
                      <div className="text-2xl">{proyecto.icon}</div>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                      {proyecto.tipo}
                    </span>
                  </div>

                  {/* NOMBRE */}
                  <h4 className="font-impact text-xl text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {proyecto.nombre}
                  </h4>

                  {/* DESCRIPCIÓN COMPLETA */}
                  <div className="flex-1 mb-4">
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{proyecto.descripcion}</p>
                  </div>

                  {/* RESULTADO - DESTACADO */}
                  <div className="bg-teal-50 border-l-4 border-teal-500 p-3 rounded-r-lg flex-1 justify-center h-auto">
                    <p className="text-xs font-semibold text-teal-700 mb-1">Impacto:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{proyecto.resultado}</p>
                  </div>

                  {/* TECNOLOGÍAS - CHIPS COMPACTOS */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {proyecto.tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-200/40 text-teal-700"
                          title={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
