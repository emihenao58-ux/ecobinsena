import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const logoSena = "/branding/logo-sena.png";
const logoInstitucion = "/branding/logo-institucion.png";

/** Enlaces de navegación por anclas (la página es de un solo scroll). */
const links = [
  { href: "#problematica", label: "Problemática" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ecoscan", label: "EcoScan IA" },
  { href: "#inteligencia", label: "Inteligencia" },
  { href: "#resultados", label: "Resultados" },
  { href: "#prototipo", label: "Prototipo" },
  { href: "#equipo", label: "Equipo" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2 sm:gap-4 sm:px-6 sm:py-3">
        <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-3">
          {/* Bloque institucional: ambos logos con el mismo peso visual */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <LogoSlot src={logoSena} alt="Logo SENA" className="h-8 w-8 sm:h-11 sm:w-11" />
            <span aria-hidden className="h-6 w-px bg-border sm:h-7" />
            <LogoSlot
              src={logoInstitucion}
              alt="Logo Institución Educativa Urbana San José"
              className="h-8 w-8 sm:h-11 sm:w-11"
            />
          </div>
          <span aria-hidden className="hidden h-7 w-px bg-border sm:block" />
          <a href="#inicio" className="shrink-0">
            <span className="block whitespace-nowrap font-display text-base font-extrabold text-gradient-brand sm:text-lg">
              EcoBin
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              SENA · Analítica de Datos
            </span>
          </a>
        </div>

        <div className="ml-auto flex min-w-0 shrink items-center gap-1.5 sm:gap-3">
          <nav className="hidden items-center gap-1 xl:ml-3 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* En pantallas estrechas priorizamos que se vea EcoBin completo. */}
          <ThemeToggle className="hidden sm:flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium sm:h-auto sm:w-auto sm:px-3 sm:py-2 xl:hidden"
          >
            {open ? <X className="h-4 w-4 sm:hidden" /> : <Menu className="h-4 w-4 sm:hidden" />}
            <span className="hidden sm:inline">Menú</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="grid gap-1 border-t border-border bg-background px-4 py-3 xl:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

/** Contenedor de los logos oficiales con una caja cuadrada compartida. */
export function LogoSlot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center", className)}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-contain drop-shadow-sm"
      />
    </div>
  );
}
