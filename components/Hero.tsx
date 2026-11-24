import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28"
    >
      {/* BACKGROUND TEXT */}
      <span className="pointer-events-none absolute -left-10 top-0 select-none text-[130px] font-black text-transparent opacity-10 [-webkit-text-stroke:1px_#ff6748] md:text-[220px]">
        Creative
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="z-10">
          <p className="mb-6 text-xs font-bold tracking-[0.4em] text-[#ff6748]">
            INTRODUCING
          </p>

          <h1 className="text-5xl font-black uppercase leading-[1.1] md:text-7xl">
            I&apos;M ISURU B
            <br />
            <span className="text-[#ff6748]">SURAWEERA.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
            Full-Stack Developer
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-8 text-gray-400">
            I build modern, scalable web applications with seamless frontend experiences and reliable backend systems. Passionate about creating user-friendly solutions, developing efficient APIs,
             and transforming ideas into impactful digital products.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-[#ff6748] px-7 py-4 text-xs font-bold tracking-widest transition hover:bg-[#e9573b]"
            >
              VIEW PROJECTS
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/Isuru_Bimsara_CV_2026.pdf"
              download="Isuru_B_Suraweera_CV.pdf"
              className="border border-white/20 px-7 py-4 text-xs font-bold tracking-widest transition hover:border-[#ff6748] hover:text-[#ff6748]"
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-9 flex gap-5">
            <a
              href="https://github.com/isuru-bimsara"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition hover:text-[#ff6748]"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/isuru-b-suraweera-79b27627b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-[#ff6748]"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end">

          {/* FRAME WRAPPER */}
          <div className="profile-frame">

            {/* OUTER GLOW */}
            <div className="profile-frame-glow" />

            {/* OUTER BORDER */}
            <div className="profile-frame-border" />

            {/* ORANGE CORNER ACCENTS */}
            <span className="frame-corner frame-top-left" />
            <span className="frame-corner frame-top-right" />
            <span className="frame-corner frame-bottom-left" />
            <span className="frame-corner frame-bottom-right" />

            {/* IMAGE */}
            <div className="profile-image-container">
              <Image
                src="/images/profile.jpg"
                alt="Profile portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 430px"
                className="profile-image"
              />
            </div>

            {/* INNER ORANGE FRAME */}
            <div className="profile-inner-frame" />

            {/* DECORATIVE ELEMENTS */}
            <div className="frame-line frame-line-top" />
            <div className="frame-line frame-line-bottom" />

            <div className="frame-dot frame-dot-top" />
            <div className="frame-dot frame-dot-bottom" />

          </div>
        </div>

      </div>
    </section>
  );
}
