import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { Placeholder } from "./Placeholder";

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

        {/* Cifras tomadas del panel de administración de la app EcoScan IA */}
        <Reveal className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Panel de administración de EcoScan IA
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Datos acumulados que registra la propia app (periodo &ldquo;Todo&rdquo;).
          </p>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard value={178} label="clasificaciones totales realizadas" />
          <MetricCard value={95} suffix="%" label="de precisión medida hasta ahora" />
          <MetricCard value={9} label="registros marcados como incorrectos por los usuarios" />
          <MetricCard value={260044} label="tokens consumidos en el periodo (aprox.)" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/*
            TODO EQUIPO ECOBIN: para incrustar un dashboard, en Power BI usar
            "Publicar en la web" y reemplazar el bloque Placeholder por:
            <iframe title="Dashboard EcoBin" src="URL_DE_POWER_BI"
              className="h-full w-full rounded-2xl border-0" allowFullScreen />
          */}
          <Reveal>
            <Placeholder
              label="[DASHBOARD POWER BI: escaneos y categorías]"
              hint="Pegar aquí el iframe de Power BI o una captura del informe"
              className="min-h-72 bg-card"
            />
          </Reveal>
          <Reveal delay={100}>
            <Placeholder
              label="[DASHBOARD POWER BI: encuesta a 30 estudiantes]"
              hint="Pegar aquí el iframe de Power BI o una captura del informe"
              className="min-h-72 bg-card"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ value, label }: { value: number; label: string }) {
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