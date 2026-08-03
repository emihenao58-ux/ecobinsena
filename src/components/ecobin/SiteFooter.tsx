import { LogoSlot } from "./SiteHeader";
import logoSena from "@/assets/logo-sena.png.asset.json";
import logoInstitucion from "@/assets/logo-institucion.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[auto_1fr]">
        <div className="flex items-center gap-4">
          <LogoSlot src={logoSena.url} alt="Logo SENA" className="h-14 w-14" />
          <span aria-hidden className="h-10 w-px bg-border" />
          <LogoSlot
            src={logoInstitucion.url}
            alt="Logo Institución Educativa Urbana San José"
            className="h-14 w-14"
          />
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