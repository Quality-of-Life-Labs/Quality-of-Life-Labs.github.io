const team = [
  { name: "Grayson Bass", role: "Team Lead" },
  { name: "Alexa Martínez Soto", role: "Data Scientist" },
  { name: "Anmol Manchanda", role: "Software Engineer" },
  { name: "Connie Kang", role: "UX/UI & Graphic Designer" },
  { name: "Dipto Biswas", role: "Lead Software Engineer" },
  { name: "Guruprasanna Rajukannan Suresh", role: "Senior Software Engineer" },
  { name: "Ishu Trivedi", role: "Senior Software Engineer" },
  { name: "Ming Mei Dang", role: "Data Scientist" },
  { name: "Mohamed Fouda", role: "Systems Designer" },
  {
    name: "Salman Naqvi",
    role: "Cloud Security & Automation Engineer",
  },
  { name: "Linh Van Khuong", role: "UX/UI Designer" },
  { name: "Zac Waite", role: "AI Services Full Stack Engineer" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Quality of Life Labs
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-900">
          Meet the team!
        </h1>
        <p className="text-lg text-slate-600">
          A group of designers, engineers, and data scientists who love building things that help people and cities thrive.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-900/5"
          >
            <div className="mb-5 flex h-64 items-center justify-center rounded-2xl bg-slate-100">
              <span
                aria-hidden="true"
                className="text-3xl font-heading text-slate-400"
              >
                {getInitials(member.name)}
              </span>
              <span className="sr-only">{`Placeholder headshot for ${member.name}`}</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {member.role}
            </p>
            <h2 className="font-heading mt-3 text-2xl text-slate-900">
              {member.name}
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
}
