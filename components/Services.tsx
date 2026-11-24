
import {
  Monitor,
  Server,
  Database,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive and user-friendly interfaces using React, Next.js and modern frontend technologies.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building scalable and secure server-side applications, business logic and efficient backend systems.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing efficient database structures, managing data and optimizing SQL and NoSQL databases.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications by integrating modern frontend interfaces, REST APIs and reliable backend services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-white/5 bg-[#292a2f] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
          WHAT I DO
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold">
            My Services.
          </h2>

          <a
            href="#contact"
            className="text-sm text-gray-400 transition hover:text-[#ff6748]"
          >
            Discuss a Project
            <ArrowUpRight className="ml-2 inline" size={15} />
          </a>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group border-t border-white/10 pt-7 transition hover:border-[#ff6748]"
              >
                <Icon
                  size={32}
                  className="text-[#ff6748] transition group-hover:scale-110"
                />

                <h3 className="mt-6 text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
