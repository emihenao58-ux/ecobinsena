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
  ClipboardList,
  Activity,
  ChevronDown,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * Centro de Inteligencia de EcoBin.
 * Muestra el recorrido del dato (app -> IA -> SQL -> Python -> Power BI -> decisiones)
 * y los dos dashboards entregados por el equipo.
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
    imageSrc: "/dashboards/dashboard-ecobin.png",
    imageAlt:
      "Dashboard de EcoBin con escaneos totales, porcentaje de aciertos, categorías, evolución y actividad por usuario",
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
    // TODO: si el equipo publica el informe en Power BI, poner aquí la URL del iframe.
    embedUrl: "",
  },
  {
    id: "formulario",
    icon: ClipboardList,
    eyebrow: "Dashboard de formularios",
    title: "Investigación en la institución",
    body: "Presenta los resultados de la encuesta aplicada a estudiantes del colegio durante la fase de investigación.",
    imageSrc: "/dashboards/dashboard-encuesta.png",
    imageAlt:
      "Dashboard de encuesta de EcoBin con estudiantes encuestados, interés por la app, promedio de utilidad y tipos de residuos",
    indicadores: [
      "Participación por grado",
      "Conocimiento sobre reciclaje",
      "Frecuencia de separación de residuos",
      "Interés por utilizar EcoBin",
      "Tipos de residuos más frecuentes",
      "Opinión sobre la implementación",
    ],
    // TODO: si el equipo publica el informe en Power BI, poner aquí la URL del iframe.
    embedUrl: "",
  },
] as const;

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

        {/* Dashboards reales */}
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
  imageSrc,
  imageAlt,
}: (typeof dashboards)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <article className="surface-card lift-on-hover flex h-full flex-col overflow-hidden">
      <div className="border-b border-border bg-secondary/40 p-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          width={1325}
          height={742}
          className="block aspect-video w-full rounded-2xl border border-border bg-card object-contain shadow-[var(--shadow-soft)]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {indicadores.map((ind) => (
            <li key={ind} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              />
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
          {open ? "Ocultar dashboard" : "Explorar dashboard"}
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>

        {open ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card p-2">
            {embedUrl ? (
              <iframe
                title={title}
                src={embedUrl}
                className="h-96 w-full rounded-xl border-0"
                allowFullScreen
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                width={1325}
                height={742}
                className="block h-auto w-full rounded-xl object-contain"
              />
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
