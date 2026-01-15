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
    <section className="py-1 sm:py-12 md:py-16 bg-white" id="sobre-mi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* COLUMNA IZQUIERDA - IMAGEN */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-3/4 sm:aspect-4/5 lg:aspect-5/6 relative">
                <Image
                  src="/img/sobremi.webp"
                  alt="José Quiñones - Desarrollador Full Stack"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent"></div>
            </div>

            {/* Badge de disponibilidad */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md border border-gray-100 min-w-[200px] sm:min-w-auto">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-800 text-xs sm:text-sm whitespace-nowrap">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - CONTENIDO */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Título */}
              <div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight text-center lg:text-left">
                  Transformo desafíos empresariales en{" "}
                  <span className="text-transparent bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text block sm:inline">
                    soluciones digitales efectivas
                  </span>
                </h2>
              </div>

              {/* Contenido */}
              <div className="space-y-3 sm:space-y-4 text-gray-600">
                <p className="text-sm sm:text-base">
                  Soy <strong className="text-gray-900">José Quiñones</strong>, fundador de{" "}
                  <strong className="text-teal-600">Webqui</strong>. Con más de 4 años de experiencia, desarrollo
                  sistemas que resuelven problemas reales de negocio.
                </p>

                <div className="bg-teal-50 p-3 sm:p-4 rounded-lg border-l-3 sm:border-l-4 border-teal-500">
                  <p className="text-sm sm:text-base">
                    <strong className="text-teal-700">Mi especialidad:</strong> sistemas con lógica empresarial compleja
                    que automatizan procesos y optimizan operaciones.
                  </p>
                </div>

                <p className="text-sm sm:text-base">
                  Creo desde sitios web profesionales hasta aplicaciones personalizadas, adaptando cada solución a las
                  necesidades específicas de tu empresa.
                </p>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4">
                {estadisticas.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 bg-teal-100 rounded-lg sm:rounded-lg text-teal-600 shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-lg sm:text-xl font-bold text-gray-900 truncate">{stat.valor}</div>
                          <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botón CTA - DENTRO de la columna derecha para desktop */}
            <div className="hidden lg:block pt-4">
              <a
                href="https://wa.me/573247728641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-300 group"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-3 text-sm text-gray-500">Respuesta en menos de 2 horas durante horario laboral</p>
            </div>
          </div>

          {/* Botón CTA SOLO para móvil - FUERA del grid principal */}
          <div className="w-full lg:hidden order-3 mt-4">
            <a
              href="https://wa.me/573247728641"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-300 w-full group"
            >
              <span className="text-sm sm:text-base">Hablemos de tu proyecto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center">
              Respuesta en menos de 2 horas durante horario laboral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
