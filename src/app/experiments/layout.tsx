import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Active prototypes that test new ways to measure and improve urban wellbeing.",
};

export default function ExperimentsLayout({
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

