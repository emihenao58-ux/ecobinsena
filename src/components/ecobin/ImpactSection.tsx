import { GraduationCap, Route as RouteIcon, Recycle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Impacto esperado del piloto: expectativas, no resultados ya logrados. */
const frentes = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Educación",
    body: "La app no solo clasifica el residuo: explica por qué va en cada categoría, para que la persona aprenda mientras recicla.",
  },
  {
    icon: <RouteIcon className="h-5 w-5" />,
    title: "Trazabilidad",
    body: "Cada residuo escaneado queda registrado en la base de datos, así el avance del piloto se puede medir con datos reales.",
  },
  {
    icon: <Recycle className="h-5 w-5" />,
    title: "Menos error, más aprovechamiento",
    body: "La meta es que menos residuos terminen mal clasificados y que más material sí se pueda aprovechar.",
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impacto esperado"
          title="Reciclar mejor, medir mejor, decidir mejor"
          description="EcoBin no promete milagros: apunta a una mejora real en tres frentes que se refuerzan entre sí."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {frentes.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <article className="surface-card lift-on-hover flex h-full flex-col p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  {f.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}