import { useState } from "react";
import {
  Smartphone,
  BrainCircuit,
  Radio,
  CircuitBoard,
  Trash2,
  Database,
  BarChart3,
  ChevronRight,
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
  const [active, setActive] = useState<string>("app");
  const activeIndex = Math.max(
    0,
    stages.findIndex((s) => s.id === active),
  );
  const current = stages[activeIndex] ?? stages[0];

  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="El recorrido completo, desde la foto hasta el dashboard"
          description="Toca o pasa el mouse por cada etapa: se ilumina el paso, se completa el recorrido hasta él y las demás etapas quedan atenuadas."
        />

        <Reveal className="mt-12">
          <div className="surface-card p-5 sm:p-8">
            {/* Diagrama de flujo interactivo tipo "pipeline":
                - la etapa activa se ilumina,
                - las etapas ya recorridas quedan en un estado intermedio,
                - las siguientes se atenúan hasta que se seleccionan. */}
            <ol
              className="flex flex-wrap items-stretch gap-3"
              onMouseLeave={() => setActive(stages[activeIndex]?.id ?? "app")}
            >
              {stages.map((s, i) => {
                const Icon = s.icon;
                const isActive = s.id === active;
                const isDone = i < activeIndex;
                const isPending = i > activeIndex;
                return (
                  <li key={s.id} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(s.id)}
                      onMouseEnter={() => setActive(s.id)}
                      onFocus={() => setActive(s.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "relative flex w-28 flex-col items-center gap-2 rounded-2xl border p-3 text-center outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-32",
                        isActive
                          ? "-translate-y-1 scale-[1.04] border-transparent bg-gradient-brand text-primary-foreground shadow-[var(--shadow-lift)]"
                          : isDone
                            ? "border-primary/35 bg-secondary/60 opacity-90"
                            : "border-border bg-card opacity-55 hover:-translate-y-0.5 hover:border-primary/40 hover:opacity-100",
                      )}
                      style={{ transitionDelay: `${isPending ? 0 : i * 40}ms` }}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6 transition-transform duration-500",
                          isActive ? "scale-110" : "text-primary",
                        )}
                      />
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
                      <ChevronRight
                        className={cn(
                          "hidden h-4 w-4 shrink-0 transition-all duration-500 sm:block",
                          i < activeIndex
                            ? "translate-x-0.5 text-primary"
                            : "text-muted-foreground/50",
                        )}
                      />
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