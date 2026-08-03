import { Trash2, HelpCircle, ClipboardList } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { DataPlaceholder, Placeholder } from "./Placeholder";

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

        {/* Encuesta de diagnóstico: los números los completa el equipo */}
        <Reveal className="mt-12">
          <div className="surface-card overflow-hidden">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <h3 className="text-xl font-bold">Encuesta de diagnóstico</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Antes de construir nada aplicamos una encuesta a 30 estudiantes del colegio de los
                  grados 5°, 8° y 11°, para entender qué tanto se sabe sobre separación de residuos.
                  Estos son los indicadores que estamos midiendo:
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex flex-wrap items-center gap-2">
                    Separa correctamente sus residuos:{" "}
                    <DataPlaceholder>completar % con resultado de la encuesta</DataPlaceholder>
                  </li>
                  <li className="flex flex-wrap items-center gap-2">
                    Conoce las categorías de la caneca:{" "}
                    <DataPlaceholder>completar % con resultado de la encuesta</DataPlaceholder>
                  </li>
                  <li className="flex flex-wrap items-center gap-2">
                    Duda al menos una vez al día:{" "}
                    <DataPlaceholder>completar % con resultado de la encuesta</DataPlaceholder>
                  </li>
                  <li className="flex flex-wrap items-center gap-2">
                    Usaría una app para saber dónde botar:{" "}
                    <DataPlaceholder>completar % con resultado de la encuesta</DataPlaceholder>
                  </li>
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  Muestra: 30 estudiantes · Grados 5°, 8° y 11° · I. E. Urbana San José, Ebéjico.
                </p>
              </div>

              {/* TODO: pegar aquí el iframe público del dashboard de la encuesta */}
              <Placeholder
                label="[DASHBOARD POWER BI: encuesta de diagnóstico]"
                hint="Reemplazar por el iframe de publicación web del informe o por una captura del dashboard"
                className="min-h-64"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}