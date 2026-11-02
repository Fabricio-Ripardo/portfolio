import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetail from "@/components/sections/CaseDetail";
import { getProjectItem, projectItems } from "@/data/portfolio";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/projeto/${item.slug}` },
    openGraph: { title: item.title, description: item.description, url: `/projeto/${item.slug}` },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const index = projectItems.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const item = projectItems[index];
  const nextItem = projectItems[(index + 1) % projectItems.length];

  return (
    <CaseDetail
      item={item}
      index={index}
      backHref="/#projects"
      backLabel="Voltar para Projetos"
      next={nextItem.slug !== item.slug ? { href: `/projeto/${nextItem.slug}`, title: nextItem.title } : undefined}
    />
  );
}
