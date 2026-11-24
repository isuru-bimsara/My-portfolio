
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C",
      "C++",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    icon: Database,
    title: "Databases & ORM",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Sequelize",
      "Prisma",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#292a2f] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
          MY EXPERTISE
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-4xl font-bold md:text-5xl">
            Technical Skills.
          </h2>

          <p className="max-w-md text-sm leading-7 text-gray-400">
            A collection of technologies and tools I use to
            design, develop and deploy modern full-stack
            applications.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group border border-white/10 bg-[#242529] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff6748]/60"
              >
                {/* ICON AND TITLE */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#ff6748]/30 bg-[#ff6748]/5">
                    <Icon
                      size={25}
                      className="text-[#ff6748] transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-base font-semibold">
                    {group.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-4 py-2 text-xs text-gray-300 transition hover:border-[#ff6748] hover:text-[#ff6748]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
