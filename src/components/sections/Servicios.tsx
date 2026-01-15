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
    <section className="py-20 bg-linear-to-b from-white via-gray-50/50 to-white" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-5xl mb-6">
            <span className="bg-linear-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
              Soluciones
            </span>
            <span className="ml-2 text-transparent bg-linear-to-r from-teal-500 to-blue-500 bg-clip-text pb-4">
              Digitales
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Desarrollo tecnologías que transforman ideas en herramientas poderosas para tu negocio
          </p>
        </div>

        {/* Grid mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="group">
              <div
                className={`p-1 rounded-xl ${servicio.bgColor} inline-block mb-4 group-hover:scale-110 transition-transform`}
              >
                <div className={`p-3 rounded-lg bg-white ${servicio.color}`}>{servicio.icon}</div>
              </div>

              <h3 className={`text-2xl font-bold ${servicio.color} mb-3`}>{servicio.titulo}</h3>

              <p className="text-gray-600 leading-relaxed">{servicio.descripcion}</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/573247728641"
                  target="blank"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${servicio.color}`}
                >
                  <span>Consultar servicio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
