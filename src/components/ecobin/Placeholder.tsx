import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Marcador visible para contenido pendiente (fotos, logos, dashboards, datos).
 * TODO EQUIPO ECOBIN: reemplazar cada uno de estos bloques por el archivo real.
 */
export function Placeholder({
  label,
  hint,
  className,
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-primary/35 bg-secondary/40 p-6 text-center",
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">{label}</span>
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      {children}
    </div>
  );
}

/** Marcador en línea para cifras que aún no se han completado. */
export function DataPlaceholder({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-md bg-accent/15 px-1.5 py-0.5 text-sm font-semibold text-accent-foreground/90 [color:var(--teal)]">
      [DATO REAL: {children}]
    </mark>
  );
}