import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

/** Botón para alternar entre modo claro y oscuro. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-4.5 w-4.5 transition-all duration-300",
          mounted && isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-4.5 w-4.5 transition-all duration-300",
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}