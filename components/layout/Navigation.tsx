import Link from "next/link";
import Wrapper from "@/components/ui/Wrapper";
import { site } from "@/data/portfolio";

const links = [
  { href: "/#work", label: "Trabalho" },
  { href: "/#projects", label: "Projetos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#education", label: "Educação" },
];

const linkClass =
  "text-xs tracking-tight text-base-600 transition-colors hover:text-accent-700 dark:text-base-300 dark:hover:text-accent-400";

export default function Navigation() {
  return (
    <nav aria-label="Principal" className="fixed top-0 z-10 w-full bg-white/90 backdrop-blur dark:bg-base-950/90">
      <Wrapper className="py-3">
        <div className="grid grid-cols-3 items-start lg:grid-cols-4">
          <Link href="/" className={`-mt-0.5 ${linkClass}`} data-cursor-magnetic>
            {site.logo}
          </Link>

          <p className="text-xs leading-snug tracking-tight text-base-600 dark:text-base-300">
            {site.location}
            <br />
            {site.role}
          </p>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass} data-cursor-magnetic>
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/#contato" className={`ml-auto ${linkClass}`} data-cursor-magnetic>
            Contato
          </Link>
        </div>
      </Wrapper>
    </nav>
  );
}
