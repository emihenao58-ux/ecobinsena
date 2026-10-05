import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

const dashboardPanels = [
  {
    title: "Dashboard de escaneos y categorías",
    description:
      "Resumen del funcionamiento de EcoBin: aciertos, categorías de residuos, evolución de escaneos, usuarios y retroalimentación.",
    imageSrc: "/dashboards/dashboard-ecobin.png",
    imageAlt:
      "Dashboard de escaneos de EcoBin con 100 escaneos, 57 por ciento de aciertos y gráficos de categorías",
    width: 1325,
    height: 742,
  },
  {
    title: "Dashboard de encuesta a estudiantes",
    description:
      "Resultados de la investigación inicial con 30 estudiantes de la Institución Educativa Urbana San José.",
    imageSrc: "/dashboards/dashboard-encuesta.png",
    imageAlt:
      "Dashboard de encuesta de EcoBin con 30 estudiantes, interés por la app y tipos de residuos frecuentes",
    width: 1337,
    height: 752,
  },
] as const;

const dashboardFacts = [
  { value: "57%", label: "porcentaje de aciertos registrado en el panel de escaneos" },
  { value: "No aprovechables", label: "categoría más frecuente en el panel de escaneos" },
  { value: "57 · 38 · 5", label: "feedback del panel: sí · timeout · no" },
  { value: "30", label: "estudiantes incluidos en el dashboard de encuesta" },
];

export function ResultsSection() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-secondary/40 py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Resultados y analítica"
          title="Lo que llevamos medido hasta ahora"
          description="El piloto sigue en marcha, así que estas cifras cambian cada semana. Los dashboards de Power BI se alimentan de la base de datos SQL a través de scripts en Python."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <MetricCard value={100} label="escaneos de prueba realizados" />
          <MetricCard value={50} label="escaneos nuevos por semana (aprox.)" />
          <MetricCard value={500} label="meta final del piloto (250 a 500)" />
        </div>

        <Reveal className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Datos destacados de los dashboards
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cifras y categorías que se leen directamente en los dos paneles entregados por el
            equipo.
          </p>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardFacts.map((fact) => (
            <Reveal key={fact.label}>
              <div className="surface-card lift-on-hover h-full p-5">
                <p className="font-display text-xl font-extrabold text-gradient-brand">
                  {fact.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{fact.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {dashboardPanels.map((dashboard, i) => (
            <Reveal key={dashboard.title} delay={i * 100}>
              <figure className="surface-card h-full overflow-hidden">
                <div className="border-b border-border bg-card p-3 sm:p-4">
                  <img
                    src={dashboard.imageSrc}
                    alt={dashboard.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={dashboard.width}
                    height={dashboard.height}
                    className="block h-auto w-full rounded-xl border border-border object-contain shadow-[var(--shadow-soft)]"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-lg font-extrabold">{dashboard.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {dashboard.description}
                  </p>
                  <a
                    href={dashboard.imageSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Abrir dashboard en tamaño completo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  return (
    <Reveal>
      <div className="surface-card lift-on-hover h-full p-6">
        <p className="font-display text-4xl font-extrabold text-gradient-brand">
          <AnimatedCounter value={value} suffix={suffix ?? ""} />
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </div>
    </Reveal>
  );
}
