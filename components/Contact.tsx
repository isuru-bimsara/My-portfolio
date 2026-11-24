
import {
  Mail,
  ArrowUpRight,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contacts = [
  {
    name: "Email",
    value: "bimsarai005@gmail.com",
    href: "mailto:bimsarai005@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/isuru-bimsara",
    href: "https://github.com/isuru-bimsara",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    value: "Isuru B Suraweera",
    href: "https://www.linkedin.com/in/isuru-b-suraweera-79b27627b/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#292a2f] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
          GET IN TOUCH
        </p>

        <div className="mt-5 grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s Build
              <br />
              Something
              <br />
              <span className="text-[#ff6748]">
                Great Together.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-400">
              Have a project idea, collaboration opportunity or
              just want to connect? Feel free to reach out.
              I would be happy to hear from you.
            </p>

            <a
              href="mailto:bimsarai005@gmail.com"
              className="mt-9 inline-flex items-center gap-3 bg-[#ff6748] px-7 py-4 text-xs font-bold tracking-widest transition hover:bg-[#e9573b]"
            >
              <Send size={16} />
              SEND ME AN EMAIL
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="space-y-5">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={
                    contact.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.name === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  className="group flex items-center justify-between border border-white/10 p-6 transition hover:border-[#ff6748]"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={26}
                      className="text-[#ff6748]"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {contact.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-400">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 transition group-hover:text-[#ff6748]"
                  />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
