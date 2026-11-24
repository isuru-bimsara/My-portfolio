
import { GraduationCap, Award, BookOpen } from "lucide-react";

const certificates = [
  {
    name: "Certificate Name",
    provider: "Issuing Organization",
    year: "2026",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 bg-[#292a2f]" >
      <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
        ACADEMIC BACKGROUND
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Education & Certifications.
      </h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <div>
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#ff6748]" size={26} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="border border-white/10 bg-[#292a2f] p-7">
            <GraduationCap size={32} className="text-[#ff6748]" />

            <p className="mt-6 text-xs tracking-widest text-[#ff6748]">
              UNDERGRADUATE
            </p>

            <h4 className="mt-3 text-xl font-bold leading-snug">
              B.Sc. (Hons) in Information Technology
            </h4>

            <p className="mt-3 text-sm text-gray-300">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Undergraduate studies focused on Information Technology,
              software development, databases and computing.
            </p>
          </div>
        </div>

  

      </div>
    </section>
  );
}
