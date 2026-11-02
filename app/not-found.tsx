import Link from "next/link";
import Wrapper from "@/components/ui/Wrapper";
import { text } from "@/lib/typography";

export default function NotFound() {
  return (
    <section>
      <Wrapper className="pb-8 pt-40 lg:pt-80">
        <div className="grid grid-cols-1 items-end gap-y-8 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:col-start-3">
            <h1 className={`${text.displayLG} font-semibold leading-snug tracking-tighter text-base-900 dark:text-white`}>
              404 — Página não encontrada
            </h1>
            <Link
              href="/"
              className="mt-8 inline-block text-sm tracking-tight text-base-600 underline underline-offset-4 hover:text-accent-700 dark:text-base-300 dark:hover:text-accent-400"
            >
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
