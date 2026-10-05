import { Trash2, HelpCircle, ClipboardList } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const surveyFacts = [
  {
    label: "Personas encuestadas",
    value: "30 estudiantes",
  },
  {
    label: "Distribución por grado",
    value: "5°: 16 (53,33%) · 11°: 8 (26,67%) · 8°: 6 (20%)",
  },
  {
    label: "Promedio de utilidad de la app",
    value: "4,14 / 5",
  },
  {
    label: "Residuo más frecuente",
    value: "Plástico: 24 respuestas (80%)",
  },
];

export function ProblemSection() {
  return (
    <section id="problematica" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Problemática"
          title="En el colegio los residuos casi nunca terminan donde deben"
          description="Vemos todos los días que las canecas se mezclan: papel con restos de comida, plástico en la caneca equivocada. No es mala intención, la mayoría simplemente no sabe en qué categoría va cada residuo y no hay forma de medir qué tan mal vamos."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <HelpCircle className="h-5 w-5" />,
              title: "Dudas al momento de botar",
              body: "Frente a la caneca hay que decidir en segundos y casi nadie tiene claras las categorías.",
            },
            {
              icon: <Trash2 className="h-5 w-5" />,
              title: "Residuos mezclados",
              body: "Cuando se mezclan, el material reciclable se contamina y ya no sirve para aprovecharse.",
            },
            {
              icon: <ClipboardList className="h-5 w-5" />,
              title: "Sin datos para mejorar",
              body: "No existía registro de qué se bota ni cuánto se falla, así que tampoco se podía medir avance.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="surface-card lift-on-hover h-full p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  {c.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cifras tomadas del dashboard de la encuesta institucional. */}
        <Reveal className="mt-12">
          <div className="surface-card overflow-hidden">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <h3 className="text-xl font-bold">Encuesta de diagnóstico</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Antes de construir nada aplicamos una encuesta a estudiantes de 5°, 8° y 11° de la
                  Institución Educativa Urbana San José. El dashboard resume los resultados reales
                  de esa primera medición.
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {surveyFacts.map((fact) => (
                    <li key={fact.label} className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">{fact.label}</span>
                      <span className="inline-flex w-fit max-w-full rounded-full border border-primary/30 bg-secondary/60 px-3 py-1 text-xs font-semibold leading-relaxed text-primary">
                        {fact.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  Fuente: dashboard de encuesta · I. E. Urbana San José, Ebéjico.
                </p>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
                <img
                  src="/dashboards/dashboard-encuesta.png"
                  alt="Dashboard de encuesta de EcoBin con resultados de 30 estudiantes"
                  loading="lazy"
                  decoding="async"
                  width={1337}
                  height={752}
                  className="block h-auto w-full rounded-xl object-contain"
                />
                <figcaption className="px-2 pb-1 pt-3 text-xs text-muted-foreground">
                  Dashboard de resultados de la encuesta institucional.
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
