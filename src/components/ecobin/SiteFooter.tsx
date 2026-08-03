import { LogoSlot } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[auto_1fr]">
        <div className="flex items-center gap-4">
          {/* TODO: reemplazar por los archivos reales de los logos */}
          <LogoSlot text="LOGO SENA" />
          <LogoSlot text="LOGO INSTITUCIÓN" />
        </div>

        <div className="text-sm text-muted-foreground md:text-right">
          <p className="font-display text-base font-extrabold text-gradient-brand">EcoBin</p>
          <p className="mt-2">
            Emiliano Henao · Eider Martínez · Jhonatan Acevedo · Justin Bedoya — Grado 11
          </p>
          <p className="mt-1">
            Institución Educativa Urbana San José · Ebéjico, Antioquia, Colombia
          </p>
          <p className="mt-1">Técnico en Programación para Analítica de Datos · SENA</p>
          <p className="mt-4 text-xs">
            Proyecto escolar en desarrollo. Los datos mostrados corresponden al piloto en curso.
          </p>
        </div>
      </div>
    </footer>
  );
}