import { useState } from "react";
import {
  Smartphone,
  BrainCircuit,
  Database,
  Code2,
  BarChart3,
  Target,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  ClipboardList,
  Activity,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { cn } from "@/lib/utils";

/**
 * Centro de Inteligencia de EcoBin.
 * Muestra el recorrido del dato (app -> IA -> SQL -> Python -> Power BI -> decisiones)
 * y dos tarjetas listas para incrustar los informes publicados de Power BI.
 *
 * TODO EQUIPO ECOBIN: cuando publiquen cada informe en Power BI
 * ("Publicar en la web"), peguen la URL del iframe en `embedUrl`.
 */
const flujo = [
  {
    icon: Smartphone,
    title: "EcoScan IA",
    body: "Cada foto tomada en la app genera un registro: residuo, hora y respuesta del usuario.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    body: "La visión artificial sugiere la categoría del residuo y deja constancia de su nivel de acierto.",
  },
  {
    icon: Database,
    title: "Base de datos SQL",
    body: "Todos los escaneos se almacenan de forma ordenada para poder consultarlos después.",
  },
  {
    icon: Code2,
    title: "Procesamiento con Python",
    body: "Con Pandas y NumPy limpiamos, agrupamos y preparamos los datos para el análisis.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Power BI",
    body: "Los resultados se visualizan en informes interactivos fáciles de leer.",
  },
  {
    icon: Target,
    title: "Toma de decisiones",
    body: "La institución puede ver qué se recicla, dónde falla la separación y qué reforzar.",
  },
] as const;

const dashboards = [
  {
    id: "escaneos",
    icon: Activity,
    eyebrow: "Dashboard de escaneos",
    title: "Actividad del sistema EcoBin",
    body: "Analiza el funcionamiento de EcoBin y la actividad generada por la clasificación automática de residuos.",
    indicadores: [
      "Total de escaneos",
      "Categorías detectadas",
      "Evolución temporal",
      "Top de residuos",
      "Confiabilidad de la IA",
      "Actividad de usuarios",
      "Distribución de categorías",
      "Retroalimentación de clasificación",
    ],
    // TODO: pegar aquí la URL del informe publicado en Power BI
    embedUrl: "",
    preview: "bars" as const,
  },
  {
    id: "formulario",
    icon: ClipboardList,
    eyebrow: "Dashboard de formularios",
    title: "Investigación en la institución",
    body: "Presenta los resultados de la encuesta aplicada a estudiantes del colegio durante la fase de investigación.",
    indicadores: [
      "Participación por grado",
      "Conocimiento sobre reciclaje",
      "Frecuencia de separación de residuos",
      "Interés por utilizar EcoBin",
      "Tipos de residuos más frecuentes",
      "Opinión sobre la implementación",
    ],
    // TODO: pegar aquí la URL del informe publicado en Power BI
    embedUrl: "",
    preview: "donut" as const,
  },
];

export function IntelligenceSection() {
  return (
    <section id="inteligencia" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Centro de inteligencia"
          title="Centro de Inteligencia de EcoBin"
          description="EcoBin no se queda en identificar residuos. Cada interacción de los usuarios genera información que se almacena, se procesa y se analiza para entender los hábitos de reciclaje del colegio y revisar cómo se está comportando el sistema."
        />

        {/* Recorrido del dato */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flujo.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="surface-card lift-on-hover relative h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Paso {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>

                {/* conector: hacia abajo en móvil, hacia el lado en pantallas grandes */}
                {i < flujo.length - 1 ? (
                  <>
                    <ArrowDown
                      aria-hidden
                      className="absolute -bottom-3.5 left-1/2 h-5 w-5 -translate-x-1/2 text-primary/50 sm:hidden"
                    />
                    <ArrowRight
                      aria-hidden
                      className={cn(
                        "absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/50 sm:block",
                        (i + 1) % 2 === 0 && "lg:hidden",
                        (i + 1) % 3 === 0 && "lg:hidden",
                      )}
                    />
                  </>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tarjetas de dashboards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {dashboards.map((d, i) => (
            <Reveal key={d.id} delay={i * 100}>
              <DashboardCard {...d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  indicadores,
  embedUrl,
  preview,
}: (typeof dashboards)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <article className="surface-card lift-on-hover flex h-full flex-col overflow-hidden">
      {/* Vista previa del informe (mock hasta tener la captura/iframe real) */}
      <div className="border-b border-border bg-secondary/40 p-4">
        <DashboardPreview variant={preview} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {indicadores.map((ind) => (
            <li key={ind} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
              {ind}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex-1" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Explorar Dashboard
          <ExternalLink className="h-4 w-4" />
        </button>

        {open ? (
          <div className="mt-4">
            {embedUrl ? (
              <iframe
                title={title}
                src={embedUrl}
                className="h-96 w-full rounded-2xl border-0"
                allowFullScreen
              />
            ) : (
              /* TODO EQUIPO ECOBIN: al publicar el informe en Power BI, poner la URL en `embedUrl`. */
              <Placeholder
                label="[IFRAME POWER BI PENDIENTE]"
                hint="Publicar el informe en Power BI y pegar la URL en embedUrl"
                className="min-h-56 bg-card"
              />
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}

/** Simulación ligera del informe (solo decorativa) mientras no hay captura real. */
function DashboardPreview({ variant }: { variant: "bars" | "donut" }) {
  return (
    <div aria-hidden className="rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-24 rounded-full bg-secondary" />
        <span className="h-2.5 w-10 rounded-full bg-secondary" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((k) => (
          <div key={k} className="rounded-xl bg-secondary/60 p-3">
            <span className="block h-3 w-10 rounded-full bg-gradient-brand opacity-80" />
            <span className="mt-2 block h-2 w-full rounded-full bg-border" />
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-[1.4fr_1fr] gap-3">
        <div className="flex h-24 items-end gap-1.5 rounded-xl bg-secondary/50 p-3">
          {[45, 70, 35, 90, 60, 80, 50].map((h, k) => (
            <span
              key={k}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t-md bg-gradient-brand opacity-80"
            />
          ))}
        </div>
        <div className="flex h-24 items-center justify-center rounded-xl bg-secondary/50 p-3">
          {variant === "donut" ? (
            <span
              className="h-14 w-14 rounded-full"
              style={{
                background:
                  "conic-gradient(var(--primary) 0 45%, var(--teal) 45% 75%, var(--border) 75% 100%)",
                maskImage: "radial-gradient(circle, transparent 52%, black 53%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 52%, black 53%)",
              }}
            />
          ) : (
            <div className="w-full space-y-2">
              {[85, 60, 40].map((w, k) => (
                <span
                  key={k}
                  style={{ width: `${w}%` }}
                  className="block h-2.5 rounded-full bg-gradient-brand opacity-80"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
