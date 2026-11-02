import Link from "next/link";
import AnimatedWords from "@/components/ui/AnimatedWords";
import Wrapper from "@/components/ui/Wrapper";
import { site } from "@/data/portfolio";
import { text } from "@/lib/typography";

export default function Intro() {
  return (
    <section>
      <Wrapper className="pb-12 pt-32 lg:pb-20 lg:pt-48">
        <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-4 lg:gap-x-12">
          {/* Coluna da esquerda: disponibilidade e localização */}
          <div className="flex flex-col gap-3 lg:pt-3">
            {site.availability && (
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-base-200 px-3 py-1.5 text-xs tracking-tight text-base-700 dark:border-base-800 dark:text-base-200">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-500 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
                </span>
                {site.availability}
              </p>
            )}
            <p className={`${text.textXS} uppercase text-base-500 dark:text-base-400`}>
              {site.location} · {site.role}
            </p>
          </div>

          {/* Apresentação */}
          <div className="lg:col-span-3">
            <AnimatedWords
              as="h1"
              variant="heading"
              text={site.intro}
              className={`${text.displayLG} max-w-5xl font-semibold leading-snug tracking-tighter text-base-900 dark:text-white`}
            />

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                data-cursor-magnetic
                className="rounded-full bg-base-900 px-6 py-3 text-xs font-medium tracking-tight text-white transition-colors hover:bg-accent-700 dark:bg-white dark:text-base-900 dark:hover:bg-accent-400"
              >
                Ver projetos ↓
              </Link>
              <Link
                href="/#contato"
                data-cursor-magnetic
                className="rounded-full border border-base-300 px-6 py-3 text-xs font-medium tracking-tight text-base-900 transition-colors hover:border-accent-600 hover:text-accent-700 dark:border-base-700 dark:text-white dark:hover:border-accent-400 dark:hover:text-accent-400"
              >
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
