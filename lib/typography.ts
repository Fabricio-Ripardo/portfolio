/** Escala tipográfica herdada do projeto original (Text.astro). */
export const text = {
  displayLG: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
  displayMD: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl",
  displaySM: "text-2xl sm:text-3xl md:text-3xl lg:text-3xl",
  textXL: "text-lg sm:text-xl md:text-2xl",
  textLG: "text-base sm:text-lg md:text-xl",
  textSM: "text-sm",
  textXS: "text-xs",
} as const;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
