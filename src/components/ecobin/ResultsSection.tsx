import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";
import panelMetricas from "@/assets/panel-1-metricas.png.asset.json";
import panelActividad from "@/assets/panel-2-actividad.png.asset.json";

export function ResultsSection() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-secondary/40 py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Resultados y analítica"
          title="Lo que llevamos medido hasta ahora"
          description="El piloto sigue en marcha, así que estas cifras cambian cada semana. Los dashboards de Power BI se alimentan de la base de datos SQL a través de scripts en Python."
        />

        {/* Cifras tomadas del panel de administración de la app (no estimadas). */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard value={178} label="clasificaciones totales realizadas" />
          <MetricCard value={95} suffix="%" label="de precisión medida hasta ahora" />
          <MetricCard value={9} label="registros marcados como incorrectos por los usuarios" />
          <MetricCard value={260044} label="tokens consumidos en el periodo (aprox.)" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <DashboardShot
            src={panelMetricas.url}
            alt="Panel de analítica de EcoScan IA: 178 clasificaciones, 95% de precisión, 9 marcadas incorrectas y consumo de tokens"
            caption="Panel de analítica de la app: métricas generales y consumo de tokens."
          />
          <DashboardShot
            src={panelActividad.url}
            alt="Panel de analítica de EcoScan IA: actividad por hora del día y listado de registros"
            caption="Actividad por hora del día y registros recientes. Se muestra como referencia visual: los valores exactos de cada barra no se leen en la captura."
            delay={100}
          />
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

/** Captura del panel de administración, presentada como evidencia visual. */
function DashboardShot({
  src,
  alt,
  caption,
  delay = 0,
}: {
  src: string;
  alt: string;
  caption: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <figure className="surface-card lift-on-hover h-full overflow-hidden p-4">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img src={src} alt={alt} loading="lazy" className="block w-full object-cover object-top" />
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}