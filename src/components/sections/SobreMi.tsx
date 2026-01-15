"use client";

import { Code2, Rocket, Users, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Estadistica {
  valor: string;
  label: string;
  icon: React.ElementType;
}

const estadisticas: Estadistica[] = [
  { valor: "4+", label: "Años de Experiencia", icon: Award },
  { valor: "50+", label: "Proyectos Completados", icon: Rocket },
  { valor: "100%", label: "Clientes Satisfechos", icon: Users },
  { valor: "24/7", label: "Soporte Dedicado", icon: Code2 },
];

export default function SobreMi() {
  return (
    <section className="py-16 bg-white" id="sobre-mi">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* COLUMNA IZQUIERDA - IMAGEN */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/sobremi.webp"
                alt="José Quiñones - Desarrollador Full Stack"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Badge de disponibilidad */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-800 text-sm">Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - CONTENIDO */}
          <div className="space-y-6">
            {/* Título */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transformo desafíos empresariales en{" "}
                <span className="text-transparent bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text">
                  soluciones digitales efectivas
                </span>
              </h2>
            </div>

            {/* Contenido */}
            <div className="space-y-4 text-gray-600">
              <p>
                Soy <strong className="text-gray-900">José Quiñones</strong>, fundador de{" "}
                <strong className="text-teal-600">Webqui</strong>. Con más de 4 años de experiencia, desarrollo sistemas
                que resuelven problemas reales de negocio.
              </p>

              <p className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <strong className="text-teal-700">Mi especialidad:</strong> sistemas con lógica empresarial compleja que
                automatizan procesos y optimizan operaciones.
              </p>

              <p>
                Creo desde sitios web profesionales hasta aplicaciones personalizadas, adaptando cada solución a las
                necesidades específicas de tu empresa.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {estadisticas.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.valor}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón CTA */}
            <div>
              <a
                href="https://wa.me/573247728641"
                target="blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
