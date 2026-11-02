import type { ElementType } from "react";

type Props = {
  as?: ElementType;
  text: string;
  className?: string;
  /** "heading" sobe as palavras; "body" faz fade com blur. */
  variant?: "heading" | "body";
  id?: string;
};

/**
 * Renderiza o texto já dividido em palavras, para o GSAP animar no scroll.
 * No Astro isso era feito mexendo no DOM; aqui o React gera os spans direto,
 * o que evita conflito com a hidratação.
 */
export default function AnimatedWords({ as: Tag = "p", text, className, variant = "body", id }: Props) {
  const words = text.trim().split(/\s+/);

  return (
    <Tag className={className} id={id} data-animate-words={variant}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <span key={index} aria-hidden="true">
          <span className="word-wrap">
            <span className="word">{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
