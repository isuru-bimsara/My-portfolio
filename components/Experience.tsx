
import { BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 ">
      <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
        MY JOURNEY
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Professional Experience.
      </h2>

      <div className="mt-14 border  border-white/10 bg-[#292a2f] p-7 md:p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center bg-[#ff6748]/10">
            <BriefcaseBusiness size={27} className="text-[#ff6748]" />
          </div>

          <div>
            <p className="text-xs tracking-widest text-[#ff6748]">
              INTERNSHIP
            </p>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              Backend Developer Intern
            </h3>
            <p className="mt-1 text-sm text-gray-400">Niolla</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-8 text-gray-400">
          Working on backend development and software engineering
          tasks, focusing on API development, database integration
          and backend application functionality.
        </p>

        <h4 className="mt-8 font-semibold">Key Responsibilities</h4>

        <ul className="mt-4 space-y-3 text-sm text-gray-400">
          {[
            "Developing and maintaining backend functionality",
            "Working with REST APIs and server-side logic",
            "Database integration and data management",
            "Understanding software development workflows",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#ff6748]">✦</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {["Node.js", "Express.js", "JavaScript", "PostgreSQL", "Git"].map((tech) => (
            <span key={tech} className="border border-white/10 px-3 py-2 text-xs text-gray-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
