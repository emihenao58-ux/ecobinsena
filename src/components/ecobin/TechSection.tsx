import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const tech = [
  { name: "React Native + Expo", role: "App móvil EcoScan IA" },
  { name: "Visión artificial", role: "Clasificación de residuos por foto" },
  { name: "ESP8266 NodeMCU V3", role: "Control de la caneca por WiFi" },
  { name: "MQTT", role: "Mensajería entre la app y la caneca" },
  { name: "Servomotores", role: "Apertura del compartimento correcto" },
  { name: "SQL", role: "Registro de escaneos y feedback" },
  { name: "Python (Pandas / NumPy)", role: "Procesamiento de los datos" },
  { name: "Power BI", role: "Dashboards y analítica" },
];

export function TechSection() {
  return (
    <section id="tecnologias" className="relative overflow-hidden bg-secondary/40 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tecnologías"
          title="Con qué está construido"
          description="Todo lo que usamos hace parte de lo que hemos visto en el programa técnico o de lo que investigamos por nuestra cuenta durante el proyecto."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="surface-card lift-on-hover h-full p-5">
                <h3 className="text-sm font-bold">{t.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}