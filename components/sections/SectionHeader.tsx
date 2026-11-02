import AnimatedWords from "@/components/ui/AnimatedWords";
import { text } from "@/lib/typography";

export default function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid grid-cols-1 items-start gap-2 lg:grid-cols-4">
      <p className={`${text.textSM} text-base-600 lg:col-start-2 dark:text-base-300`}>{eyebrow}</p>
      <AnimatedWords
        as="h2"
        variant="heading"
        text={title}
        className={`${text.textXL} font-semibold leading-snug tracking-tighter text-base-900 lg:col-span-2 dark:text-white`}
      />
    </div>
  );
}
