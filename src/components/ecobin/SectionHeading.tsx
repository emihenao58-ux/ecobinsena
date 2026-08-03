import { Reveal } from "./Reveal";

/** Encabezado reutilizable de sección: etiqueta + título + descripción. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}