"use client";

import { useState } from "react";
import { Globe, Code, ShoppingCart, Cloud, ArrowRight } from "lucide-react";

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
  },
];

export default function Servicios() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" id="servicios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-impact text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
              Soluciones
            </span>
            <span className="ml-2 text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text">
              Digitales
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Desarrollo tecnologías que transforman ideas en herramientas poderosas para tu negocio
          </p>
        </div>

        {/* Grid mejorado con más breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(servicio.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icono con contenedor responsivo */}
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6 justify-center sm:justify-start">
                {/* Icono */}
                <div className="shrink-0">
                  <div
                    className={`p-3 rounded-xl ${servicio.bgColor} ${servicio.borderColor} border-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`${servicio.color}`}>{servicio.icon}</div>
                  </div>
                </div>

                {/* Título - alineado verticalmente con el icono */}
                <h3 className={`text-xl sm:text-2xl font-bold ${servicio.color}`}>{servicio.titulo}</h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">{servicio.descripcion}</p>

              {/* Enlace CTA - Mejorado para mobile */}
              <div className="pt-4 sm:pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/573247728641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between sm:justify-start gap-2 sm:gap-3 text-sm sm:text-base font-semibold ${servicio.color} hover:${servicio.color}/80 transition-colors w-full sm:w-auto`}
                >
                  <span className="flex items-center gap-2">
                    <span>Consultar servicio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional para mobile (opcional) */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            ¿Necesitas una solución personalizada?{" "}
            <a
              href="https://wa.me/573247728641"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-600 hover:text-teal-700 underline underline-offset-2"
            >
              Hablemos de tu proyecto
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
