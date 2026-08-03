import { useState } from "react";
import { Camera, ScanSearch, ListChecks, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import appInicio from "@/assets/app-1-inicio.png.asset.json";
import appAnalizando from "@/assets/app-2-analizando.png.asset.json";
import appResultado from "@/assets/app-3-resultado.png.asset.json";
import appInstruccion from "@/assets/app-4-instruccion.png.asset.json";

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

/** Capturas reales de la app, en el orden del flujo de uso. */
const capturas = [
  { src: appInicio.url, caption: "Pantalla de inicio: el usuario abre EcoScan IA y toma la foto." },
  { src: appAnalizando.url, caption: "La IA analiza la imagen y sugiere la categoría del residuo." },
  { src: appResultado.url, caption: "Resultado con la foto tomada y la confirmación del usuario." },
  { src: appInstruccion.url, caption: "Explicación de la IA e instrucción de dónde depositarlo." },
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

          {/* Carrusel con las capturas reales de la app dentro de un marco de celular */}
          <Reveal className="flex justify-center">
            <PhoneCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Carrusel de capturas reales dentro de un marco de celular.
 * Navegación con flechas y con los puntos inferiores (sin autoplay para no distraer).
 */
function PhoneCarousel() {
  const [index, setIndex] = useState(0);
  const total = capturas.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const actual = capturas[index]!;

  return (
    <div className="w-full max-w-xs">
      <div className="relative mx-auto w-56 rounded-[2.2rem] border-[6px] border-foreground/85 bg-foreground/85 p-1 shadow-[var(--shadow-soft)] sm:w-64">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-card">
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-background/40" />
          <img
            key={actual.src}
            src={actual.src}
            alt={actual.caption}
            loading="lazy"
            className="block aspect-[9/19] w-full object-cover object-top"
          />
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Captura anterior"
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Captura siguiente"
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {capturas.map((c, i) => (
          <button
            key={c.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver captura ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"}`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        {actual.caption}
      </p>
    </div>
  );
}