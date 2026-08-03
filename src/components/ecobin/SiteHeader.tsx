import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import logoSena from "@/assets/logo-sena.png.asset.json";
import logoInstitucion from "@/assets/logo-institucion.png.asset.json";

/** Enlaces de navegación por anclas (la página es de un solo scroll). */
const links = [
  { href: "#problematica", label: "Problemática" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ecoscan", label: "EcoScan IA" },
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
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <LogoSlot src={logoSena.url} alt="Logo SENA" />
          <a href="#inicio" className="min-w-0">
            <span className="block truncate font-display text-lg font-extrabold text-gradient-brand">
              EcoBin
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              SENA · Analítica de Datos
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <LogoSlot
            src={logoInstitucion.url}
            alt="Logo Institución Educativa Urbana San José"
            className="hidden sm:flex"
          />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
            className="rounded-full border border-border bg-card px-3 py-2 text-sm font-medium lg:hidden"
          >
            Menú
          </button>
        </div>
      </div>

      {open ? (
        <nav className="grid gap-1 border-t border-border bg-background px-4 py-3 lg:hidden">
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

/**
 * Contenedor de los logos oficiales (SENA / Institución).
 * Fondo claro fijo para que los logos se lean bien también en modo oscuro,
 * y altura común para que ambos tengan el mismo peso visual.
 */
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
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-contain" />
    </div>
  );
}