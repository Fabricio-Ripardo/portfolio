import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/sections/SectionHeader";
import { skillGroups } from "@/data/portfolio";
import { text } from "@/lib/typography";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <Wrapper className="py-12 lg:py-24">
        <SectionHeader eyebrow="Ferramentas com que trabalho" title="Stack" />

        <div className="mt-12 grid grid-cols-1 border-t border-base-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-base-800">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="border-b border-base-200 py-8 sm:pr-8 lg:border-b-0 dark:border-base-800"
            >
              <h3 className={`${text.textXS} uppercase text-base-600 dark:text-base-300`}>{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className={`${text.textLG} font-semibold tracking-tight text-base-900 dark:text-white`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
