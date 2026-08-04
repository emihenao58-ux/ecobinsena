import { Camera, ScanSearch, ListChecks, ThumbsUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EcoScanPhoneCarousel } from "./EcoScanPhoneCarousel";

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

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
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

          {/* Mockup interactivo: recreación limpia de las pantallas reales de la app */}
          <Reveal className="flex justify-center">
            <EcoScanPhoneCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}