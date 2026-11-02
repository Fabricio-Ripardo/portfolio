import Wrapper from "@/components/ui/Wrapper";
import { site } from "@/data/portfolio";

const linkClass =
  "text-xs tracking-tight text-base-600 transition-colors hover:text-accent-700 dark:text-base-300 dark:hover:text-accent-400";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6">
      <Wrapper className="py-2">
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <p className="text-xs tracking-tight text-base-600 dark:text-base-300">
            © {year} {site.fullName}
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
            <a href={`mailto:${site.email}`} className={linkClass}>
              E-mail
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
