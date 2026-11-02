import AnimatedWords from "@/components/ui/AnimatedWords";
import Wrapper from "@/components/ui/Wrapper";
import { site } from "@/data/portfolio";
import { text } from "@/lib/typography";

const linkClass =
  "text-sm tracking-tight text-base-600 underline decoration-base-300 underline-offset-4 transition-colors hover:text-accent-700 hover:decoration-accent-500 dark:text-base-300 dark:decoration-base-700 dark:hover:text-accent-400";

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-24">
      <Wrapper className="py-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-8 border-t border-base-200 pt-12 lg:grid-cols-4 lg:pt-16 dark:border-base-800">
          <p className={`${text.textSM} text-base-600 lg:col-start-2 dark:text-base-300`}>Contato</p>

          <div className="lg:col-span-2">
            <AnimatedWords
              as="h2"
              variant="heading"
              text="Aberto a estágios e oportunidades em QA e desenvolvimento."
              className={`${text.displayMD} font-semibold leading-tight tracking-tighter text-base-900 dark:text-white`}
            />

            <a
              href={`mailto:${site.email}`}
              data-cursor-magnetic
              className="mt-10 inline-block break-all text-xl font-semibold tracking-tight text-accent-700 transition-colors hover:text-accent-600 sm:text-2xl lg:text-3xl dark:text-accent-400 dark:hover:text-accent-300"
            >
              {site.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-8">
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn ↗
              </a>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
