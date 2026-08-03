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
  const current = stages.find((s) => s.id === active) ?? stages[0];

  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="El recorrido completo, desde la foto hasta el dashboard"
          description="Toca cada etapa del diagrama para ver qué pasa en ese punto del sistema."
        />

        <Reveal className="mt-12">
          <div className="surface-card p-5 sm:p-8">
            {/* Diagrama de flujo interactivo */}
            <ol className="flex flex-wrap items-stretch gap-3">
              {stages.map((s, i) => {
                const Icon = s.icon;
                const isActive = s.id === active;
                return (
                  <li key={s.id} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(s.id)}
                      onMouseEnter={() => setActive(s.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex w-28 flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all duration-300 sm:w-32",
                        isActive
                          ? "-translate-y-1 border-transparent bg-gradient-brand text-primary-foreground shadow-[var(--shadow-lift)]"
                          : "border-border bg-card hover:-translate-y-0.5 hover:border-primary/40",
                      )}
                    >
                      <Icon className={cn("h-6 w-6", isActive ? "" : "text-primary")} />
                      <span className="text-xs font-bold leading-tight">{s.label}</span>
                      <span
                        className={cn(
                          "text-[10px] leading-tight",
                          isActive ? "opacity-80" : "text-muted-foreground",
                        )}
                      >
                        {s.short}
                      </span>
                    </button>
                    {i < stages.length - 1 ? (
                      <ChevronRight className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {/* Explicación de la etapa seleccionada */}
            <div className="mt-6 rounded-2xl bg-secondary/60 p-5">
              <h3 className="text-base font-bold">
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