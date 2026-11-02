import type { ReactNode } from "react";
import { cn } from "@/lib/typography";

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-screen px-6 sm:px-8 2xl:max-w-[90rem]", className)}>{children}</div>;
}
