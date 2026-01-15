"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre mí", href: "/#sobre-mi" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Extraer el hash de la url
    const url = new URL(href, window.location.href);
    const hash = url.hash;

    if (!hash) {
      window.location.href = href;
      setMobileMenuOpen(false);
      return;
    }

    if (pathname === "/" || pathname === "/#inicio") {
      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", hash);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = `/${hash}`;
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-md"}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="/#incio" className="flex items-center" onClick={(e) => handleAnchorClick(e, "/#inicio")}>
            <Image
              src="/img/logo_sf_512x514.webp"
              alt="Logo Webqui"
              width={56}
              height={56}
              className={`transition duration-300 ${transparent ? "brightness-0" : ""}`}
              priority
            />
          </a>

          {/* Desktop nav - USANDO OUTFIT */}
          <nav className="hidden md:flex items-center gap-1 font-heading">
            {navigationLinks.map(({ name, href }) => {
              const active = pathname === href;
              const isAnchor = href.includes("#");

              return (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => (isAnchor ? handleAnchorClick(e, href) : undefined)}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition relative group
                    ${transparent ? "text-white hover:text-teal-300" : "text-gray-800 hover:text-teal-600"}
                    ${active && (transparent ? "text-teal-300" : "text-teal-600")}
                  `}
                >
                  {name}
                  {/* Línea de subrayado */}
                  <span
                    className={`
                    absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 
                    transition-all duration-300
                    ${active ? "w-3/4" : "w-0 group-hover:w-3/4"}
                    ${transparent ? "bg-teal-300" : "bg-teal-600"}
                  `}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA - TAMBIÉN CON OUTFIT PERO MÁS NEGRITA */}
          <a
            href="https://wa.me/573247728641"
            target="blank"
            className={`
              hidden md:inline-flex px-6 py-2.5 rounded-lg font-semibold transition
              font-heading
              ${transparent ? "bg-white text-teal-900 hover:bg-teal-50" : "bg-teal-600 text-white hover:bg-teal-700"}
            `}
          >
            Contactar
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${transparent ? "text-white" : "text-gray-800"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - TAMBIÉN CON OUTFIT */}
      <div
        className={`
          fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20 font-heading">
          {navigationLinks.map(({ name, href }) => {
            const active = pathname === href;
            const isAnchor = href.includes("#");
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => {
                  if (isAnchor) {
                    handleAnchorClick(e, href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className={`
                  text-xl font-medium transition-all duration-300 px-6 py-3 w-64 text-center rounded-lg
                  ${
                    active
                      ? "bg-teal-50 text-teal-600 border border-teal-200"
                      : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                  }
                `}
              >
                {name}
              </a>
            );
          })}
          <a
            href="https://wa.me/573247728641"
            target="blank"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-teal-600 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
