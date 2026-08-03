import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const integrantes = ["Emiliano Henao", "Eider Martínez", "Jhonatan Acevedo", "Justin Bedoya"];

export function TeamSection() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-secondary/40 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Equipo"
          title="Quiénes hicimos EcoBin"
          description="Somos cuatro estudiantes de grado 11 de la Institución Educativa Urbana San José, en Ebéjico, Antioquia, cursando el Técnico en Programación para Analítica de Datos del SENA."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrantes.map((nombre, i) => (
            <Reveal key={nombre} delay={i * 80}>
              <article className="surface-card lift-on-hover h-full p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand font-display text-xl font-extrabold text-primary-foreground">
                  {nombre
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-base font-bold">{nombre}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Grado 11 · Aprendiz SENA</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="surface-card grid gap-4 p-6 text-sm text-muted-foreground sm:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">Institución</p>
              <p className="mt-1">I. E. Urbana San José · Ebéjico, Antioquia</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Programa</p>
              <p className="mt-1">Técnico en Programación para Analítica de Datos</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Entidad</p>
              <p className="mt-1">SENA · Servicio Nacional de Aprendizaje</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}