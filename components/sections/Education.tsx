import AnimatedWords from "@/components/ui/AnimatedWords";
import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/sections/SectionHeader";
import { education } from "@/data/portfolio";
import { text } from "@/lib/typography";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <Wrapper className="py-12 lg:py-24">
        <SectionHeader eyebrow="Minha formação" title="Educação" />

        <div className="mt-12 flex flex-col">
          {education.map((item) => (
            <article key={item.title} className="border-t border-base-200 py-12 dark:border-base-800">
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-4">
                <p className={`${text.textXS} uppercase text-base-600 dark:text-base-300`}>{item.period}</p>
                <AnimatedWords
                  as="h3"
                  variant="heading"
                  text={item.title}
                  className={`${text.textLG} font-semibold leading-tight text-base-900 dark:text-white`}
                />
                <AnimatedWords text={item.description} className={`${text.textSM} text-base-600 dark:text-base-300`} />
                <p className={`${text.textXS} uppercase text-base-600 lg:col-start-4 lg:ml-auto dark:text-base-300`}>
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
