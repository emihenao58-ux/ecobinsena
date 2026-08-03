import { Reveal } from "./Reveal";

const proximos = [
  "Llegar a la meta de 250 a 500 escaneos para tener datos más sólidos.",
  "Revisar con el feedback de los usuarios en qué residuos la IA se equivoca más.",
  "Mejorar la estructura física de la caneca y probarla en más puntos del colegio.",
];

export function ClosingSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="surface-card overflow-hidden bg-gradient-hero p-8 text-center sm:p-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">EcoBin sigue en construcción</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Esto es un piloto, no un producto terminado. Lo que ya funciona es el flujo completo:
              tomar la foto, clasificar, abrir el compartimento y guardar el dato. Lo que sigue es
              usarlo más, recoger más registros y ajustar con base en lo que muestren los datos.
            </p>
            <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left">
              {proximos.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm backdrop-blur"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}