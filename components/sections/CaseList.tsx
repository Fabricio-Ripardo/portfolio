import Link from "next/link";
import AnimatedWords from "@/components/ui/AnimatedWords";
import CaseCover from "@/components/ui/CaseCover";
import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/sections/SectionHeader";
import type { PortfolioCase } from "@/data/portfolio";
import { text } from "@/lib/typography";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: PortfolioCase[];
  basePath: "/trabalho" | "/projeto";
};

/** Lista usada nas seções Trabalho e Projetos (antes eram dois arquivos quase iguais). */
export default function CaseList({ id, eyebrow, title, items, basePath }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <Wrapper className="py-12 lg:py-24">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="mt-8 flex flex-col lg:gap-12">
          {items.map((item, index) => (
            <article key={item.slug} className="border-t border-base-200 py-12 dark:border-base-800">
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-4">
                <p className={`${text.textXS} uppercase text-base-600 dark:text-base-300`}>{item.period}</p>
                <AnimatedWords
                  as="h3"
                  variant="heading"
                  text={item.title}
                  className={`${text.displaySM} font-semibold leading-tight text-base-900 dark:text-white`}
                />
                <AnimatedWords
                  text={item.description}
                  className={`${text.textSM} text-base-600 dark:text-base-300`}
                />
                <p className={`${text.textXS} uppercase text-base-600 lg:col-start-4 lg:ml-auto dark:text-base-300`}>
                  {item.category}
                </p>
              </div>

              <Link
                href={`${basePath}/${item.slug}`}
                aria-label={`Ver detalhes: ${item.title}`}
                className="group relative mt-12 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-base-950"
              >
                <div data-reveal className="overflow-hidden">
                  <CaseCover
                    title={item.title}
                    category={item.category}
                    index={index}
                    src={item.cover}
                    className={item.cover ? "aspect-[2/1] w-full" : "aspect-[4/3] w-full sm:aspect-[2/1]"}
                    sizes="(min-width: 1440px) 1376px, 100vw"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-base-950/0 transition-colors duration-300 group-hover:bg-base-950/45 group-focus-visible:bg-base-950/45"
                >
                  <span className="translate-y-2 rounded-full bg-white px-6 py-3 text-xs font-medium tracking-tight text-base-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    Ver mais
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
