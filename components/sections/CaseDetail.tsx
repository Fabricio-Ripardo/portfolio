import Image from "next/image";
import Link from "next/link";
import AnimatedWords from "@/components/ui/AnimatedWords";
import CaseCover from "@/components/ui/CaseCover";
import Wrapper from "@/components/ui/Wrapper";
import type { PortfolioCase } from "@/data/portfolio";
import { text } from "@/lib/typography";

type Props = {
  item: PortfolioCase;
  index: number;
  backHref: string;
  backLabel: string;
  next?: { href: string; title: string };
};

const backClass =
  "text-xs tracking-tight text-base-600 transition-colors hover:text-accent-700 dark:text-base-300 dark:hover:text-accent-400";

export default function CaseDetail({ item, index, backHref, backLabel, next }: Props) {
  return (
    <article className="pb-16 pt-32 lg:pb-32 lg:pt-40">
      <Wrapper>
        <Link href={backHref} className={backClass}>
          ← {backLabel}
        </Link>

        {/* Cabeçalho */}
        <header className="mt-8 grid grid-cols-1 gap-8 border-b border-base-200 pb-12 lg:mt-12 lg:grid-cols-4 lg:items-start lg:gap-12 dark:border-base-800">
          <p className={`${text.textXS} uppercase text-base-600 dark:text-base-300`}>{item.period}</p>

          <div className="lg:col-span-2">
            <AnimatedWords
              as="h1"
              variant="heading"
              text={item.title}
              className={`${text.displaySM} font-semibold leading-tight tracking-tighter text-base-900 dark:text-white`}
            />
            <p className={`${text.textSM} mt-6 text-base-600 dark:text-base-300`}>{item.detail.summary}</p>

            {item.links && item.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-base-900 px-5 py-2.5 text-xs tracking-tight text-white transition-colors hover:bg-accent-700 dark:bg-white dark:text-base-900 dark:hover:bg-accent-400"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>

          <dl className="flex flex-col gap-6 border-t border-base-200 pt-6 lg:border-t-0 lg:pt-0 dark:border-base-800">
            <div>
              <dt className={`${text.textXS} uppercase text-base-400 dark:text-base-500`}>Categoria</dt>
              <dd className={`${text.textSM} mt-1 text-base-700 dark:text-base-200`}>{item.category}</dd>
            </div>
            {item.detail.meta.map((entry) => (
              <div key={entry.label}>
                <dt className={`${text.textXS} uppercase text-base-400 dark:text-base-500`}>{entry.label}</dt>
                <dd className={`${text.textSM} mt-1 text-base-700 dark:text-base-200`}>{entry.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <CaseCover
          title={item.title}
          category={item.category}
          index={index}
          src={item.cover}
          priority
          className={`mt-12 w-full lg:mt-16 ${item.cover ? "aspect-[2/1]" : "aspect-[4/3] sm:aspect-[16/9]"}`}
        />

        {/* Blocos de conteúdo */}
        {item.detail.blocks.map((block, blockIndex) => (
          <section
            key={block.heading}
            className="mt-16 border-t border-base-200 pt-12 lg:mt-24 lg:pt-16 dark:border-base-800"
          >
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
              <p className={`${text.textXS} uppercase text-base-600 lg:col-span-3 dark:text-base-300`}>
                {String(blockIndex + 1).padStart(2, "0")}
              </p>
              <div className="lg:col-span-6">
                <AnimatedWords
                  as="h2"
                  variant="heading"
                  text={block.heading}
                  className={`${text.textLG} font-semibold leading-tight text-base-900 dark:text-white`}
                />
                <AnimatedWords text={block.text} className={`${text.textSM} mt-4 text-base-600 dark:text-base-300`} />
              </div>
              <p
                className={`${text.textSM} max-w-xs border-l-2 border-accent-500 pl-4 text-base-500 lg:col-span-3 dark:text-base-400`}
              >
                {block.aside}
              </p>
            </div>
          </section>
        ))}

        {/* Galeria opcional */}
        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-24 lg:grid-cols-2">
            {item.gallery.map((src, galleryIndex) => (
              <div
                key={src}
                data-reveal
                className="relative aspect-[2/1] overflow-hidden bg-base-100 dark:bg-base-900"
              >
                <Image
                  src={src}
                  alt={`${item.title} — imagem ${galleryIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <nav
          aria-label="Navegação entre cases"
          className="mt-16 flex flex-col gap-6 border-t border-base-200 pt-10 sm:flex-row sm:items-start sm:justify-between lg:mt-24 dark:border-base-800"
        >
          <Link href={backHref} className={backClass}>
            ← {backLabel}
          </Link>
          {next && (
            <Link href={next.href} className="group text-left sm:text-right" data-cursor-magnetic>
              <span className={`${text.textXS} block uppercase text-base-500 dark:text-base-400`}>Próximo</span>
              <span className={`${text.textLG} mt-1 block font-semibold tracking-tight text-base-900 transition-colors group-hover:text-accent-700 dark:text-white dark:group-hover:text-accent-400`}>
                {next.title} →
              </span>
            </Link>
          )}
        </nav>
      </Wrapper>
    </article>
  );
}
