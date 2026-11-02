import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetail from "@/components/sections/CaseDetail";
import { getWorkItem, workItems } from "@/data/portfolio";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/trabalho/${item.slug}` },
    openGraph: { title: item.title, description: item.description, url: `/trabalho/${item.slug}` },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const index = workItems.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const item = workItems[index];
  const nextItem = workItems[(index + 1) % workItems.length];

  return (
    <CaseDetail
      item={item}
      index={index}
      backHref="/#work"
      backLabel="Voltar para Trabalho"
      next={nextItem.slug !== item.slug ? { href: `/trabalho/${nextItem.slug}`, title: nextItem.title } : undefined}
    />
  );
}
