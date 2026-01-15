"use client";

import { FaDocker, FaGithub, FaHtml5, FaJs, FaLaravel, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";

const tecnologias = [
  { id: 1, icon: <FaDocker className="size-12 md:size-16" />, name: "Docker" },
  { id: 2, icon: <FaGithub className="size-12 md:size-16" />, name: "GitHub" },
  { id: 3, icon: <FaHtml5 className="size-12 md:size-16" />, name: "HTML5" },
  { id: 4, icon: <FaJs className="size-12 md:size-16" />, name: "JavaScript" },
  { id: 5, icon: <FaLaravel className="size-12 md:size-16" />, name: "Laravel" },
  { id: 6, icon: <FaReact className="size-12 md:size-16" />, name: "React" },
  { id: 7, icon: <FaCss3Alt className="size-12 md:size-16" />, name: "CSS3" },
  { id: 8, icon: <SiNextdotjs className="size-12 md:size-16" />, name: "Next.js" },
  { id: 9, icon: <SiTailwindcss className="size-12 md:size-16" />, name: "Tailwind" },
  { id: 10, icon: <FaNodeJs className="size-12 md:size-16" />, name: "Node.js" },
  { id: 11, icon: <SiMysql className="size-12 md:size-16" />, name: "MySQL" },
  { id: 12, icon: <SiPostgresql className="size-12 md:size-16" />, name: "PostgreSQL" },
];

// Para un efecto infinito perfecto, necesitamos al menos 2 copias
const tecnologiasDuplicadas = [...tecnologias, ...tecnologias, ...tecnologias];

export default function Tecnologias() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-impact text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Tecnologías</h2>

        {/* PRIMER SLIDER (derecha a izquierda) */}
        <div className="relative overflow-hidden py-8 group/slider">
          {/* FADE EFFECTS - CORREGIDO */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-gray-50 via-gray-50/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-gray-50 via-gray-50/90 to-transparent z-10"></div>

          <div className="flex gap-8 md:gap-12 animate-slide-left group-hover/slider:[animation-play-state:paused]">
            {tecnologiasDuplicadas.map((tech, index) => (
              <div
                key={`${tech.id}-${index}`}
                className="flex flex-col items-center justify-center min-w-25 md:min-w-35 group/item shrink-0"
              >
                <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-200 group-hover/item:border-teal-300 group-hover/item:shadow-xl transition-all duration-300">
                  <div className="text-teal-500 group-hover/item:text-teal-600 group-hover/item:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SEGUNDO SLIDER (izquierda a derecha) */}
        <div className="relative overflow-hidden py-8 group/slider2 mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-gray-50 via-gray-50/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-gray-50 via-gray-50/90 to-transparent z-10"></div>

          <div className="flex gap-8 md:gap-12 animate-slide-right group-hover/slider2:[animation-play-state:paused]">
            {tecnologiasDuplicadas.map((tech, index) => (
              <div
                key={`reverse-${tech.id}-${index}`}
                className="flex flex-col items-center justify-center min-w-25 md:min-w-35 group/item shrink-0"
              >
                <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-200 group-hover/item:border-blue-300 group-hover/item:shadow-xl transition-all duration-300">
                  <div className="text-blue-500 group-hover/item:text-blue-600 group-hover/item:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
