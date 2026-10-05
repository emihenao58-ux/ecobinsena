import { useEffect, useState } from "react";
import { Recycle, Cpu, BarChart3 } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function HeroSection() {
  // Parallax sutil: las formas del fondo se mueven un poco al hacer scroll.
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero">
      {/* Formas orgánicas de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        style={{ transform: `translateY(${offset * -0.1}px)` }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            Proyecto escolar · SENA · Técnico en Programación para Analítica de Datos
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            <span className="text-gradient-brand">EcoBin</span>
            <span className="block text-foreground">
              una caneca inteligente que aprende a separar residuos
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Unimos una app móvil con inteligencia artificial, una caneca con sensores y
            servomotores, y analítica de datos para que separar los residuos en el colegio sea más
            fácil y se pueda medir. Es un prototipo funcional hecho por estudiantes de grado 11.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#como-funciona"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Ver cómo funciona
            </a>
            <a
              href="#resultados"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Resultados y analítica
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <Stat value={100} label="escaneos de prueba" />
            <Stat value={50} label="escaneos nuevos por semana" suffix="~" prefixMode />
            <Stat value={500} label="meta final (250–500)" />
          </dl>
        </div>

        {/* Composición visual sin placeholder: el prototipo se explica con sus tres ideas clave. */}
        <div className="relative flex min-h-[360px] flex-col justify-center lg:pl-8">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-primary/5 blur-[1px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25"
          />

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-brand shadow-[var(--shadow-lift)]">
              <span
                aria-hidden
                className="absolute inset-3 rounded-full border border-primary-foreground/30"
              />
              <Recycle className="h-20 w-20 text-primary-foreground" strokeWidth={1.4} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Prototipo funcional
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Una idea construida por estudiantes: separar residuos, mover una caneca y convertir
              cada interacción en datos útiles para el colegio.
            </p>

            <div className="mt-6 grid w-full grid-cols-3 gap-3">
              <MiniCard icon={<Recycle className="h-5 w-5" />} text="Reciclaje" />
              <MiniCard icon={<Cpu className="h-5 w-5" />} text="IA + IoT" />
              <MiniCard icon={<BarChart3 className="h-5 w-5" />} text="Datos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  suffix,
  prefixMode,
}: {
  value: number;
  label: string;
  suffix?: string;
  prefixMode?: boolean;
}) {
  return (
    <div>
      <dd className="font-display text-3xl font-extrabold text-foreground">
        {prefixMode ? suffix : null}
        <AnimatedCounter value={value} />
      </dd>
      <dt className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dt>
    </div>
  );
}

function MiniCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="lift-on-hover flex flex-col items-center gap-2 rounded-xl border border-border bg-card/80 p-3 text-center text-xs font-medium backdrop-blur">
      <span className="text-primary">{icon}</span>
      {text}
    </div>
  );
}
