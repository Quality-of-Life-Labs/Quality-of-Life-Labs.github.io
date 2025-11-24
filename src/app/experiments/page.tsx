const experiments = [
  {
    title: "Neighborhood Vitality Score",
    status: "Pilot in Kigali",
    summary: "Combines mobility, air quality, and narrative surveys.",
  },
  {
    title: "Participatory Pulse",
    status: "Research Sprint",
    summary: "Residents annotate satellite imagery to ground-truth data gaps.",
  },
  {
    title: "Civic Care Index",
    status: "In Discovery",
    summary: "Maps where public services meet belonging across wards.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          AI explorations
        </p>
        <h1 className="font-heading text-4xl font-semibold text-slate-900">
          Experiments
        </h1>
        <p className="text-lg text-slate-600">
          Tools for anyone to experiment with AI in their city.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {experiments.map((experiment) => (
          <article
            key={experiment.title}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {experiment.status}
            </p>
            <h2 className="font-heading mt-3 text-2xl font-semibold text-slate-900">
              {experiment.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{experiment.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

