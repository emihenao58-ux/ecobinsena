import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Galería tipo mosaico con fotografías reales del prototipo EcoBin. */
const fotos = [
  {
    label: "Caneca ensamblada completa",
    src: "/prototype/caneca-ensamblada-completa.jpg",
    alt: "Caneca plástica EcoBin ensamblada completa con la placa y los servomotores visibles",
    fit: "contain" as const,
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "Placa ESP8266 NodeMCU V3",
    src: "/prototype/placa-esp8266.png",
    alt: "Placa ESP8266 NodeMCU V3 conectada en una protoboard",
    fit: "cover" as const,
    span: "",
  },
  {
    label: "Servomotores instalados",
    src: "/prototype/servomotores.png",
    alt: "Servomotores utilizados para el mecanismo de la caneca EcoBin",
    fit: "cover" as const,
    span: "",
  },
  {
    label: "Caneca de plástico",
    src: "/prototype/caneca-plastica.jpg",
    alt: "Caneca de plástico elegida para el prototipo EcoBin",
    fit: "contain" as const,
    span: "sm:col-span-2",
  },
  {
    label: "Equipo trabajando en el prototipo",
    src: "/prototype/equipo-trabajando.png",
    alt: "Estudiantes de EcoBin trabajando juntos en el prototipo",
    fit: "contain" as const,
    span: "sm:col-span-4 sm:row-span-2",
  },
] as const;

type Foto = (typeof fotos)[number];

export function PrototypeSection() {
  const [selected, setSelected] = useState<Foto | null>(null);

  useEffect(() => {
    if (!selected) return;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selected]);

  return (
    <>
      <section id="prototipo" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Prototipo físico"
            title="Así se ve la caneca EcoBin en desarrollo"
            description="El prototipo ahora utiliza una caneca de plástico, servomotores y una placa ESP8266. Estas fotografías muestran el ensamblaje, los componentes principales y el trabajo del equipo en el laboratorio. Haz clic en cualquier imagen para verla completa."
          />

          <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[170px]">
            {fotos.map((foto, i) => (
              <Reveal key={foto.label} delay={i * 70} className={foto.span}>
                <button
                  type="button"
                  onClick={() => setSelected(foto)}
                  aria-label={`Abrir ${foto.label} en tamaño completo`}
                  className="group relative h-full w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "h-full w-full transition-transform duration-500 group-hover:scale-[1.04]",
                      foto.fit === "contain" ? "bg-card object-contain p-2" : "object-cover",
                    )}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">
                    {foto.label}
                  </span>
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Ver completa
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista completa: ${selected.label}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-[96vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[84vh] max-w-[94vw] rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-3 rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white">
              {selected.label}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
