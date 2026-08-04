import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  Recycle,
  Loader2,
  CheckCircle2,
  PenLine,
  Trash2,
  RotateCcw,
  Sparkle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Carrusel de mockups de la app EcoScan IA.
 * Cada pantalla está RECREADA como interfaz limpia con los tokens del sitio
 * (no son capturas de pantalla pegadas). El contenido de los textos sí
 * corresponde a lo que muestra la app real en uso.
 */
const screens: { id: string; label: string; render: () => ReactElement }[] = [
  { id: "inicio", label: "Inicio", render: () => <ScreenInicio /> },
  { id: "analizando", label: "Analizando", render: () => <ScreenAnalizando /> },
  { id: "resultado", label: "Resultado", render: () => <ScreenResultado /> },
  { id: "detalle", label: "Instrucción", render: () => <ScreenDetalle /> },
];

export function EcoScanPhoneCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % screens.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + screens.length) % screens.length);

  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-3">
        <CarouselButton label="Pantalla anterior" onClick={() => go(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </CarouselButton>

        <PhoneShell>
          {screens.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "absolute inset-0 transition-all duration-500",
                i === index
                  ? "translate-x-0 opacity-100"
                  : i < index
                    ? "pointer-events-none -translate-x-3 opacity-0"
                    : "pointer-events-none translate-x-3 opacity-0",
              )}
              aria-hidden={i !== index}
            >
              {s.render()}
            </div>
          ))}
        </PhoneShell>

        <CarouselButton label="Pantalla siguiente" onClick={() => go(1)}>
          <ChevronRight className="h-4 w-4" />
        </CarouselButton>
      </div>

      {/* Puntos / etiquetas de navegación */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {screens.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-current={i === index}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
              i === index
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="lift-on-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </button>
  );
}

/** Marco de celular: la carcasa y la pantalla interior. */
function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="w-[16rem] rounded-[2.4rem] border-[7px] border-foreground/85 bg-foreground/85 p-1 shadow-[var(--shadow-lift)] sm:w-[17rem]">
      <div className="relative aspect-[9/18] overflow-hidden rounded-[1.9rem] bg-card">
        <span className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-foreground/20" />
        {children}
      </div>
    </div>
  );
}

/** Cabecera común de la app dentro del mockup. */
function AppHeader() {
  return (
    <div className="flex flex-col items-center gap-1 px-4 pt-7 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
        <Recycle className="h-4.5 w-4.5" />
      </span>
      <p className="font-display text-base font-extrabold">
        EcoScan <span className="text-gradient-brand">IA</span>
      </p>
      <p className="text-[9px] text-muted-foreground">Clasificación inteligente de residuos</p>
    </div>
  );
}

function ScreenShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <AppHeader />
      <div className="min-h-0 flex-1 px-3.5 pb-4 pt-3">{children}</div>
    </div>
  );
}

/* ---------- Pantalla 1: inicio ---------- */
function ScreenInicio() {
  return (
    <ScreenShell>
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
          <Camera className="h-6 w-6" />
        </span>
        <p className="font-display text-sm font-extrabold">Analiza tu residuo</p>
        <p className="text-[10px] leading-relaxed text-muted-foreground">
          Toma una foto para saber dónde depositarlo
        </p>
        <span className="mt-1 w-full rounded-full px-3 py-2 text-[11px] font-bold text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
          Escanear ahora
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
          <Images className="h-3 w-3" /> Seleccionar de galería
        </span>
      </div>
    </ScreenShell>
  );
}

/* ---------- Pantalla 2: analizando ---------- */
function ScreenAnalizando() {
  return (
    <ScreenShell>
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 text-center">
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <div className="flex h-16 items-center justify-center bg-secondary">
            <Recycle className="h-7 w-7 text-primary" />
          </div>
          <div className="h-0.5 w-full" style={{ backgroundImage: "var(--gradient-brand)" }} />
          <p className="bg-card py-2 text-[10px] font-bold uppercase tracking-widest">
            Reciclables
          </p>
        </div>
        <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          <Loader2 className="h-3 w-3 animate-spin" /> Analizando con IA…
        </p>
      </div>
    </ScreenShell>
  );
}

/* ---------- Pantalla 3: resultado confirmado ---------- */
function ScreenResultado() {
  return (
    <ScreenShell>
      <div className="flex h-full flex-col gap-2.5">
        {/* Foto tomada por el usuario (marcador: la sube el equipo) */}
        <div className="flex h-20 items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-secondary/50 text-[9px] font-semibold uppercase tracking-widest text-primary">
          Foto del residuo
        </div>
        <p className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-primary/25 bg-secondary/60 py-2 text-[10px] font-semibold text-primary">
          <CheckCircle2 className="h-3.5 w-3.5" /> ¡Gracias por confirmar!
        </p>
        <div className="flex-1 rounded-2xl border border-border/70 bg-card/80 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-accent">
              <PenLine className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-extrabold">Bolígrafo</p>
              <span className="mt-0.5 inline-block rounded-full bg-secondary px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-secondary-foreground">
                Clasificado
              </span>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-secondary/50 p-2.5">
            <p className="text-[8px] font-bold uppercase tracking-widest text-primary">
              Análisis de la IA
            </p>
            <p className="mt-1 text-[9.5px] leading-relaxed text-muted-foreground">
              Pertenece a esta categoría porque es un artículo compuesto por múltiples
              materiales…
            </p>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ---------- Pantalla 4: análisis completo + instrucción ---------- */
function ScreenDetalle() {
  return (
    <ScreenShell>
      <div className="flex h-full flex-col gap-2.5">
        <div className="rounded-2xl border border-border/70 bg-card/80 p-3">
          <p className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-primary">
            <Sparkle className="h-2.5 w-2.5" /> Análisis de la IA
          </p>
          <p className="mt-1.5 text-[9.5px] leading-relaxed text-muted-foreground">
            Pertenece a esta categoría porque es un artículo compuesto por múltiples materiales
            (plástico, metal y tinta) que no pueden separarse fácilmente para su reciclaje.
          </p>
          <div className="my-2.5 h-px bg-border" />
          <p className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-accent">
            <Trash2 className="h-2.5 w-2.5" /> Instrucción
          </p>
          <p className="mt-1.5 text-[9.5px] leading-relaxed text-muted-foreground">
            Deposítalo directamente en la caneca negra para residuos no aprovechables.
          </p>
        </div>
        <div className="mt-auto flex items-center gap-2">
          <span className="flex-1 rounded-full px-3 py-2 text-center text-[11px] font-bold text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
            Nuevo escaneo
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary text-primary">
            <RotateCcw className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </ScreenShell>
  );
}