import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  headshot?: string;
};

const team: TeamMember[] = [
  { name: "Grayson Bass", role: "Team Lead", headshot: "/headshots/grayson.jpeg" },
  { name: "Alexa Martínez Soto", role: "Data Scientist", headshot: "/headshots/alexa.jpeg" },
  { name: "Anmol Manchanda", role: "Software Engineer", headshot: "/headshots/anmol.jpeg"},
  { name: "Connie Kang", role: "UX/UI & Graphic Designer", headshot: "/headshots/connie.png" },
  { name: "Dipto Biswas", role: "Lead Software Engineer", headshot: "/headshots/dipto.png" },
  { name: "Guruprasanna Rajukannan Suresh", role: "Senior Software Engineer", headshot: "/headshots/guru.jpeg" },
  { name: "Ishu Trivedi", role: "Senior Software Engineer", headshot: "/headshots/ishu.png" },
  { name: "Ming Mei Dang", role: "Data Scientist", headshot: "/headshots/mei.jpeg" },
  { name: "Mohamed Fouda", role: "Systems Designer", headshot: "/headshots/mohamed.jpeg" },
  { name: "Salman Naqvi", role: "Cloud Security & Automation Engineer", headshot: "/headshots/salman.jpeg" },
  { name: "Linh Van Khuong", role: "UX/UI Designer", headshot: "/headshots/linh.JPG" },
  { name: "Zac Waite", role: "AI Services Full Stack Engineer", headshot: "/headshots/zac.JPEG" },
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
            {member.headshot ? (
              <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
                <div className="relative h-64">
                  <Image
                    src={member.headshot}
                    alt={`Headshot of ${member.name}`}
                    fill
                    sizes="(min-width: 768px) 220px, 100vw"
                    className="object-cover object-center"
                    priority={member.name === "Grayson Bass"}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-5 flex h-64 items-center justify-center rounded-2xl bg-slate-100">
                <span
                  aria-hidden="true"
                  className="text-3xl font-heading text-slate-400"
                >
                  {getInitials(member.name)}
                </span>
                <span className="sr-only">{`Placeholder headshot for ${member.name}`}</span>
              </div>
            )}
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
