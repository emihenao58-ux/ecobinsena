import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

/** Contador que anima de 0 al valor final cuando la sección entra en pantalla. */
export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easing suave al final
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("es-CO")}
      {suffix}
    </span>
  );
}