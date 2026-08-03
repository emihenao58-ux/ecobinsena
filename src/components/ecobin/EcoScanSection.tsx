import { Camera, ScanSearch, ListChecks, ThumbsUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

const pasos = [
  {
    icon: <Camera className="h-5 w-5" />,
    title: "1. Foto del residuo",
    body: "El usuario abre EcoScan IA y toma una foto de lo que va a botar.",
  },
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: "2. Clasificación",
    body: "La IA identifica el residuo y sugiere la categoría a la que pertenece, con su nombre.",
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: "3. Explicación e instrucción",
    body: "La app muestra por qué pertenece a esa categoría y en qué compartimento debe botarse.",
  },
  {
    icon: <ThumbsUp className="h-5 w-5" />,
    title: "4. Feedback del usuario",
    body: "La persona responde si la clasificación fue correcta (sí / no) o la pantalla se cierra por tiempo (timeout). Ese dato nos sirve para revisar qué tanto acierta la IA.",
  },
];

export function EcoScanSection() {
  return (
    <section id="ecoscan" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="EcoScan IA"
          title="La app que acompaña a la caneca"
          description="EcoScan IA es la parte que ve el usuario. No pretende ser infalible: identifica el residuo, sugiere la categoría correcta y pide confirmación para seguir mejorando."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <ol className="grid gap-4 sm:grid-cols-2">
            {pasos.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} as="li">
                <div className="surface-card lift-on-hover h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    {p.icon}
                  </span>
                  <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Mockups: 3 pantallas dentro de marcos de celular */}
          <Reveal className="flex flex-wrap justify-center gap-5 lg:flex-nowrap">
            <PhoneFrame label="[CAPTURA APP 1: foto del residuo]" />
            <PhoneFrame label="[CAPTURA APP 2: clasificación]" className="lg:mt-8" />
            <PhoneFrame label="[CAPTURA APP 3: instrucción y feedback]" className="lg:mt-16" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Marco de celular para mostrar las capturas reales de EcoScan IA. */
function PhoneFrame({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`lift-on-hover w-40 rounded-[2rem] border-[6px] border-foreground/85 bg-foreground/85 p-1 shadow-[var(--shadow-soft)] sm:w-44 ${className ?? ""}`}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-card">
        <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-foreground/20" />
        {/* TODO: reemplazar por la captura real de la app */}
        <Placeholder label={label} className="aspect-[9/19] border-0 bg-transparent px-3" />
      </div>
    </div>
  );
}