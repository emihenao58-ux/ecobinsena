import { Target, Sparkles, Database, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const objetivos = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Mejorar la separación en la fuente",
    body: "Que al momento de botar un residuo la persona reciba una indicación clara de dónde va, en vez de adivinar.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Usar IA como apoyo, no como juez",
    body: "La app identifica el residuo con visión artificial y sugiere la categoría; la persona confirma si acertó o no.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Registrar y medir lo que pasa",
    body: "Cada escaneo se guarda en una base de datos SQL para poder analizarlo después y ver si de verdad mejoramos.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Aplicar lo que estamos aprendiendo",
    body: "Poner en práctica programación, IoT y analítica de datos del programa técnico en un problema real del colegio.",
  },
];

export function ObjectivesSection() {
  return (
    <section id="objetivos" className="relative overflow-hidden bg-secondary/40 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Objetivos"
          title="Qué queremos resolver con EcoBin"
          description="El proyecto no busca resolver el reciclaje del mundo: busca que en nuestro colegio se separe mejor y que podamos demostrarlo con datos."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {objetivos.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <article className="surface-card lift-on-hover flex h-full gap-4 p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  {o.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}