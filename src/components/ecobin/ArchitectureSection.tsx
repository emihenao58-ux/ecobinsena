import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  BrainCircuit,
  Radio,
  CircuitBoard,
  Trash2,
  Database,
  BarChart3,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Etapas del flujo del sistema. Al hacer clic/hover se resalta y se explica. */
const stages = [
  {
    id: "app",
    icon: Smartphone,
    label: "App móvil",
    short: "EcoScan IA",
    detail:
      "El usuario abre la app EcoScan IA y toma una foto del residuo que va a botar. La app está hecha en React Native con Expo.",
  },
  {
    id: "ia",
    icon: BrainCircuit,
    label: "IA",
    short: "Visión artificial",
    detail:
      "Un modelo de visión artificial analiza la foto e identifica el residuo, sugiriendo la categoría a la que corresponde junto con una explicación corta.",
  },
  {
    id: "mqtt",
    icon: Radio,
    label: "Servidor MQTT",
    short: "Mensajería IoT",
    detail:
      "La categoría se publica como un mensaje MQTT. Este protocolo es liviano y permite que la app y la caneca se comuniquen por WiFi casi al instante.",
  },
  {
    id: "esp",
    icon: CircuitBoard,
    label: "ESP8266",
    short: "NodeMCU V3",
    detail:
      "La placa ESP8266 NodeMCU V3 está suscrita al servidor MQTT. Cuando recibe el mensaje, interpreta la categoría y decide qué compartimento debe abrirse.",
  },
  {
    id: "caneca",
    icon: Trash2,
    label: "Caneca",
    short: "Servomotores",
    detail:
      "Los servomotores abren el compartimento correcto de la caneca inteligente, para que el residuo caiga en el lugar que corresponde.",
  },
  {
    id: "sql",
    icon: Database,
    label: "Base de datos",
    short: "SQL",
    detail:
      "Cada escaneo queda registrado en una base de datos SQL: categoría detectada, fecha y el feedback que dio el usuario.",
  },
  {
    id: "bi",
    icon: BarChart3,
    label: "Power BI",
    short: "Analítica",
    detail:
      "Con Python (Pandas y NumPy) procesamos los registros y los llevamos a dashboards de Power BI para ver tendencias y aciertos.",
  },
] as const;

export function ArchitectureSection() {
  return <ArchitectureSectionInner />;
}

/**
 * Micro-animación propia de cada etapa, mostrada solo cuando está activa.
 * Cada efecto representa visualmente lo que hace ese paso del sistema.
 */
function StageEffect({ id }: { id: string }) {
  switch (id) {
    case "app":
      // flash de cámara
      return (
        <span
          aria-hidden
          className="anim-flash pointer-events-none absolute -inset-2 rounded-full bg-primary-foreground/80 blur-[2px]"
        />
      );
    case "ia":
      // línea de escaneo recorriendo el ícono
      return (
        <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded">
          <span className="anim-scan absolute inset-x-0 h-0.5 bg-primary-foreground shadow-[0_0_6px_currentColor]" />
        </span>
      );
    case "mqtt":
      // ondas de señal saliendo
      return (
        <span aria-hidden className="pointer-events-none absolute inset-0">
          {[0, 0.6, 1.2].map((d) => (
            <span
              key={d}
              style={{ animationDelay: `${d}s` }}
              className="anim-wave absolute inset-0 rounded-full border border-primary-foreground/70"
            />
          ))}
        </span>
      );
    case "esp":
      // LED parpadeando
      return (
        <span
          aria-hidden
          className="anim-led pointer-events-none absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary-foreground shadow-[0_0_8px_currentColor]"
        />
      );
    case "caneca":
      // tapa girando como si el servomotor abriera
      return (
        <span
          aria-hidden
          className="anim-servo pointer-events-none absolute -top-1 left-0 h-0.5 w-6 rounded-full bg-primary-foreground"
        />
      );
    case "sql":
      // filas llenándose
      return (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-1.5 left-1/2 flex w-6 -translate-x-1/2 flex-col gap-0.5"
        >
          {[0, 0.25, 0.5].map((d) => (
            <span
              key={d}
              style={{ animationDelay: `${d}s` }}
              className="anim-row h-0.5 rounded-full bg-primary-foreground/80"
            />
          ))}
        </span>
      );
    case "bi":
      // barras de gráfica creciendo
      return (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-1.5 left-1/2 flex h-2 w-6 -translate-x-1/2 items-end justify-center gap-0.5"
        >
          {[0.4, 0.75, 1].map((h, i) => (
            <span
              key={h}
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}
              className="anim-bar w-1 rounded-sm bg-primary-foreground/80"
            />
          ))}
        </span>
      );
    default:
      return null;
  }
}

function ArchitectureSectionInner() {
  const [active, setActive] = useState<string>("app");
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeIndex = Math.max(
    0,
    stages.findIndex((s) => s.id === active),
  );
  const current = stages[activeIndex] ?? stages[0];

  /** Recorrido automático: avanza una etapa cada 2.2s hasta llegar al final. */
  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setActive((prev) => {
        const i = stages.findIndex((s) => s.id === prev);
        const next = (i + 1) % stages.length;
        return stages[next]!.id;
      });
    }, 2200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const select = (id: string) => {
    setPlaying(false);
    setActive(id);
  };

  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="El recorrido completo, desde la foto hasta el dashboard"
          description="Toca o pasa el mouse por cada etapa: se ilumina el paso, el dato viaja por el conector y cada ícono se anima según lo que hace. También puedes reproducir el recorrido completo."
        />

        <Reveal className="mt-12">
          <div className="surface-card p-5 sm:p-8">
            {/* Controles del recorrido automático */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Flujo de datos en tiempo real
              </span>
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                aria-pressed={playing}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/60 px-4 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {playing ? "Pausar recorrido" : "Reproducir recorrido"}
              </button>
            </div>

            {/* Diagrama de flujo interactivo tipo "pipeline":
                - la etapa activa se ilumina y ejecuta su micro-animación,
                - las etapas ya recorridas quedan en un estado intermedio,
                - el conector se "llena" y un punto de luz viaja hacia el siguiente paso. */}
            <ol className="flex flex-wrap items-stretch gap-3">
              {stages.map((s, i) => {
                const Icon = s.icon;
                const isActive = s.id === active;
                const isDone = i < activeIndex;
                const isPending = i > activeIndex;
                return (
                  <li key={s.id} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => select(s.id)}
                      onMouseEnter={() => select(s.id)}
                      onFocus={() => select(s.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "relative flex w-28 flex-col items-center gap-2 overflow-hidden rounded-2xl border p-3 text-center outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-32",
                        isActive
                          ? "-translate-y-1 scale-[1.04] border-transparent bg-gradient-brand text-primary-foreground shadow-[var(--shadow-lift)]"
                          : isDone
                            ? "border-primary/35 bg-secondary/60 opacity-90"
                            : "border-border bg-card opacity-55 hover:-translate-y-0.5 hover:border-primary/40 hover:opacity-100",
                      )}
                      style={{ transitionDelay: `${isPending ? 0 : i * 40}ms` }}
                    >
                      {/* halo pulsante detrás de la etapa activa */}
                      {isActive ? (
                        <span
                          aria-hidden
                          className="anim-halo pointer-events-none absolute inset-0 rounded-2xl bg-primary-foreground/10"
                        />
                      ) : null}

                      <span className="relative flex h-7 w-7 items-center justify-center">
                        <Icon
                          className={cn(
                            "h-6 w-6 transition-transform duration-500",
                            isActive ? "scale-110" : "text-primary",
                          )}
                        />
                        {isActive ? <StageEffect id={s.id} /> : null}
                      </span>
                      <span className="text-xs font-bold leading-tight">{s.label}</span>
                      <span
                        className={cn(
                          "text-[10px] leading-tight",
                          isActive ? "opacity-80" : "text-muted-foreground",
                        )}
                      >
                        {s.short}
                      </span>
                      {/* barra de progreso del pipeline bajo cada etapa recorrida */}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full bg-gradient-brand transition-transform duration-500 ease-out",
                          isPending ? "scale-x-0" : "scale-x-100",
                          isActive && "bg-primary-foreground/70",
                        )}
                      />
                    </button>
                    {i < stages.length - 1 ? (
                      <span
                        aria-hidden
                        className="relative hidden h-4 w-8 shrink-0 items-center sm:flex"
                      >
                        {/* riel del conector */}
                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-border" />
                        {/* relleno del conector según el avance */}
                        <span
                          className={cn(
                            "absolute inset-x-0 top-1/2 h-0.5 origin-left -translate-y-1/2 rounded-full bg-gradient-brand transition-transform duration-500 ease-out",
                            i < activeIndex ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                        {/* punto de luz que viaja hacia la siguiente etapa */}
                        {i === activeIndex ? (
                          <span className="anim-travel absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                        ) : null}
                        <ChevronRight
                          className={cn(
                            "absolute -right-1 h-3 w-3 transition-colors duration-500",
                            i < activeIndex ? "text-primary" : "text-muted-foreground/50",
                          )}
                        />
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {/* Explicación de la etapa seleccionada */}
            <div
              key={current.id}
              className="mt-6 animate-fade-in rounded-2xl border border-primary/20 bg-secondary/60 p-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Paso {activeIndex + 1} de {stages.length}
              </span>
              <h3 className="mt-1 text-base font-bold">
                {current.label} · <span className="text-primary">{current.short}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.detail}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}