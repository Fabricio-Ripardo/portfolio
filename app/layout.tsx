import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/effects/PageLoader";
import ScrollAnimations from "@/components/effects/ScrollAnimations";
import CustomCursor from "@/components/effects/CustomCursor";
import { site } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-svh bg-white font-sans text-base-900 antialiased dark:bg-base-950 dark:text-white">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10003] focus:rounded-full focus:bg-base-900 focus:px-4 focus:py-2 focus:text-xs focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <PageLoader />
        <CustomCursor />
        <ScrollAnimations />
        <Navigation />
        <main id="conteudo" className="pb-12">
          {children}
        </main>
        <Footer />
        <div aria-hidden="true" className="h-[12vh]" />
      </body>
    </html>
  );
}
