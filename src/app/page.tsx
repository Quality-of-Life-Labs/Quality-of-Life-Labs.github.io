import Link from "next/link";

const spotlightProject = {
  title: "Quality of Life Initiative",
  metric: "Now Live",
  description:
    "Explore how people define and experience quality of life in cities across the globe.",
  href: "https://qolimpact.com",
  cta: "Explore qolimpact.com",
};

export default function Home() {
  return (
    <section className="relative flex h-screen flex-col justify-between overflow-hidden bg-white px-6 pb-10 pt-32 text-slate-900 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center text-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Tools Experiments
          </p>
          <h1 className="font-heading mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Quality of Life Labs
          </h1>
          <p className="mt-4 text-xl text-slate-600 sm:text-2xl">
            Improving how cities measure wellbeing, turning data into insights, creating thriving neighborhoods.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/experiments"
              className="rounded-full bg-slate-900 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              Experiments
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-slate-400"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </div>

      <a
        href={spotlightProject.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl sm:ml-0 sm:max-w-sm"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>{spotlightProject.metric}</span>
        </div>
        <p className="font-heading mt-3 text-2xl text-slate-900">
          {spotlightProject.title}
        </p>
        <p className="mt-2 text-sm text-slate-600">
          {spotlightProject.description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:translate-x-1">
          {spotlightProject.cta} →
        </span>
      </a>
    </section>
  );
}
