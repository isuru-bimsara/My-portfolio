
import {
  Code2,
  Database,
  Layers,
  BrainCircuit,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Clean, scalable and maintainable code",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient data management and architecture",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Building complete web applications",
  },
  {
    icon: BrainCircuit,
    title: "Emerging Technologies",
    description: "Exploring AI, ML and Cloud Computing",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
    >
      <div className="grid items-start gap-14 lg:grid-cols-[1.2fr_0.8fr]">

        {/* ABOUT CONTENT */}
        <div>
          <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
            ABOUT ME
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Turning Ideas Into
            <br />
            Digital
            <span className="text-[#ff6748]"> Solutions.</span>
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-gray-400">
            <p>
              I&apos;m a passionate <span className="font-semibold text-white">Full-Stack Developer</span> and a 4th-year BSc (Hons) Information Technology undergraduate at <span className="font-semibold text-white">Sri Lanka Institute of Information Technology (SLIIT)</span>. I enjoy building modern web applications and developing reliable software solutions that solve real-world problems.
            </p>

            <p>
              I mainly work with <span className="font-semibold text-white">Node.js, Express.js, React, and Java</span>, with experience in databases such as <span className="font-semibold text-white">PostgreSQL, MySQL, and MongoDB</span>. My interests include frontend development, backend engineering, RESTful API development, and database design.
            </p>

            <p>
              I&apos;m currently expanding my knowledge in <span className="font-semibold text-white">Artificial Intelligence, Machine Learning, Large Language Models (LLMs), Cloud Computing, and DevOps</span>. I&apos;m always eager to explore new technologies, improve my skills, and turn innovative ideas into practical applications.
            </p>

            <p>
              I believe in continuous learning, writing clean and maintainable code, and collaborating with other developers to build meaningful digital experiences.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border border-[#ff6748] px-6 py-3 text-xs font-bold tracking-widest text-[#ff6748] transition hover:bg-[#ff6748] hover:text-white"
          >
            LET&apos;S CONNECT
          </a>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex gap-5 border-b border-white/10 pb-6 transition hover:border-[#ff6748]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#ff6748]/30 bg-[#ff6748]/5">
                  <Icon
                    size={23}
                    className="text-[#ff6748] transition group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
