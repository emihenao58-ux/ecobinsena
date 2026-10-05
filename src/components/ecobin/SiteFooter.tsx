import { ExternalLink } from "lucide-react";
import { LogoSlot } from "./SiteHeader";

const logoSena = "/branding/logo-sena.png";
const logoInstitucion = "/branding/logo-institucion.png";
const qrSite = "/branding/ecobin-qr.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <LogoSlot src={logoSena} alt="Logo SENA" className="h-14 w-14" />
          <span aria-hidden className="h-10 w-px bg-border" />
          <LogoSlot
            src={logoInstitucion}
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

        <a
          href="https://ecobinsena.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="group flex w-fit items-center gap-3 rounded-2xl border border-border bg-background/70 p-3 transition-colors hover:border-primary/50 hover:bg-secondary"
        >
          <img
            src={qrSite}
            alt="Código QR para visitar el sitio web de EcoBin"
            width={92}
            height={92}
            loading="lazy"
            decoding="async"
            className="h-[92px] w-[92px] rounded-lg bg-white p-1"
          />
          <span className="max-w-24 text-xs font-semibold leading-relaxed text-muted-foreground group-hover:text-foreground">
            Escanea para visitar EcoBin
            <ExternalLink className="mt-1 h-3.5 w-3.5 text-primary" />
          </span>
        </a>
      </div>
    </footer>
  );
}
