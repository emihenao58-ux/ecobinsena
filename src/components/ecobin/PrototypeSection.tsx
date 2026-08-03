import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

/**
 * Galería tipo mosaico con celdas de distinto tamaño.
 * Cada celda es un placeholder para una foto real del ensamblaje.
 */
const fotos = [
  { label: "[FOTO: caneca ensamblada completa]", span: "sm:col-span-2 sm:row-span-2" },
  { label: "[FOTO: placa ESP8266 NodeMCU V3]", span: "" },
  { label: "[FOTO: servomotores instalados]", span: "" },
  { label: "[FOTO: estructura en cartón]", span: "sm:col-span-2" },
  { label: "[FOTO: cableado y pruebas]", span: "" },
  { label: "[FOTO: equipo trabajando en el prototipo]", span: "" },
];

export function PrototypeSection() {
  return (
    <section id="prototipo" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Prototipo físico"
          title="Cómo se ve la caneca por dentro"
          description="El prototipo está armado con una estructura de cartón, servomotores y una placa ESP8266. Es sencillo a propósito: la idea era probar que el flujo completo funciona antes de pensar en materiales definitivos."
        />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[170px]">
          {fotos.map((f, i) => (
            <Reveal key={f.label} delay={i * 70} className={f.span}>
              {/* TODO: reemplazar por <img src="..." alt="..." className="h-full w-full object-cover rounded-2xl" /> */}
              <div className="group h-full overflow-hidden rounded-2xl">
                <Placeholder
                  label={f.label}
                  className="h-full bg-card transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}