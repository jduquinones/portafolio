"use client";

import { FaDocker, FaGithub, FaHtml5, FaJs, FaLaravel, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";

const tecnologias = [
  { id: 1, icon: <FaDocker className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "Docker" },
  { id: 2, icon: <FaGithub className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "GitHub" },
  { id: 3, icon: <FaHtml5 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "HTML5" },
  { id: 4, icon: <FaJs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "JavaScript" },
  { id: 5, icon: <FaLaravel className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "Laravel" },
  { id: 6, icon: <FaReact className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "React" },
  { id: 7, icon: <FaCss3Alt className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "CSS3" },
  { id: 8, icon: <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "Next.js" },
  { id: 9, icon: <SiTailwindcss className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "Tailwind" },
  { id: 10, icon: <FaNodeJs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "Node.js" },
  { id: 11, icon: <SiMysql className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "MySQL" },
  { id: 12, icon: <SiPostgresql className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />, name: "PostgreSQL" },
];

// Para un efecto infinito perfecto, necesitamos al menos 2 copias
const tecnologiasDuplicadas = [...tecnologias, ...tecnologias, ...tecnologias];

export default function Tecnologias() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-impact text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
          Tecnologías
        </h2>

        {/* PRIMER SLIDER (derecha a izquierda) */}
        <div className="relative overflow-hidden py-6 sm:py-8 group/slider">
          {/* FADE EFFECTS */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 lg:w-32 bg-linear-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 lg:w-32 bg-linear-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-slide-left group-hover/slider:[animation-play-state:paused]">
            {tecnologiasDuplicadas.map((tech, index) => (
              <div
                key={`${tech.id}-${index}`}
                className="flex flex-col items-center justify-center min-w-17.5 sm:min-w-20 md:min-w-22.5 lg:min-w-25 shrink-0 group/item"
              >
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-md sm:shadow-lg border border-gray-200 group-hover/item:border-teal-300 group-hover/item:shadow-xl transition-all duration-300">
                  <div className="text-teal-500 group-hover/item:text-teal-600 group-hover/item:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
                <span className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-700 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SEGUNDO SLIDER (izquierda a derecha) */}
        <div className="relative overflow-hidden py-6 sm:py-8 group/slider2 mt-6 sm:mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 lg:w-32 bg-linear-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 lg:w-32 bg-linear-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 animate-slide-right group-hover/slider2:[animation-play-state:paused]">
            {tecnologiasDuplicadas.map((tech, index) => (
              <div
                key={`reverse-${tech.id}-${index}`}
                className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] shrink-0 group/item"
              >
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-md sm:shadow-lg border border-gray-200 group-hover/item:border-blue-300 group-hover/item:shadow-xl transition-all duration-300">
                  <div className="text-blue-500 group-hover/item:text-blue-600 group-hover/item:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
                <span className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-700 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Texto descriptivo opcional */}
        <div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
            Domino un stack tecnológico moderno para crear soluciones escalables y de alto rendimiento
          </p>
        </div>
      </div>
    </section>
  );
}
