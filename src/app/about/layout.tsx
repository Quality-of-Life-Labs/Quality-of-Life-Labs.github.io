import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality of Life Labs team",
  description:
    "Overview of the people behind the Quality of Life Labs initiative.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-white pt-48 pb-16 text-slate-900">
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}

