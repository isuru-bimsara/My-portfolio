
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#242529] px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        <a href="#home" className="text-2xl font-black">
          ISURU<span className="text-[#ff6748]">.</span>
        </a>

        <p className="text-center text-xs text-gray-500">
          © 2026 Isuru B Suraweera.
          All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/isuru-bimsara"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:text-[#ff6748]"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/isuru-b-suraweera-79b27627b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:text-[#ff6748]"
          >
            <FaLinkedin size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center border border-white/10 transition hover:border-[#ff6748] hover:text-[#ff6748]"
          >
            <ArrowUp size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
}
