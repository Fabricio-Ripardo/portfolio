import Image from "next/image";
import { cn } from "@/lib/typography";

type Props = {
  title: string;
  category: string;
  index: number;
  src?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Capa de um trabalho/projeto.
 * Com `src`, mostra a imagem; sem, gera uma capa tipográfica no tema do site.
 */
export default function CaseCover({ title, category, index, src, className, priority, sizes = "100vw" }: Props) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-base-100 dark:bg-base-900", className)}>
        <Image
          src={src}
          alt={`Capa de ${title}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Capa de ${title}`}
      className={cn(
        "relative flex flex-col justify-between overflow-hidden bg-base-950 p-6 text-white sm:p-10 lg:p-14",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -bottom-[40%] size-[70%] rounded-full bg-accent-500/25 blur-3xl transition-transform duration-700 group-hover:scale-110"
      />
      <div className="relative flex items-start justify-between text-xs uppercase tracking-tight text-base-400">
        <span>{category}</span>
        <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <p className="relative max-w-3xl text-2xl font-semibold leading-tight tracking-tighter sm:text-4xl lg:text-6xl">
        {title}
      </p>
    </div>
  );
}
