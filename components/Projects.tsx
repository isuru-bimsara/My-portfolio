
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  X,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    title: "HomeFix - Home Service App",
    category: "Full-Stack Mobile Application",

    shortDescription:
      "A home service booking application that connects customers with reliable service providers. Discover professionals, book services and manage appointments through a mobile application.",

    fullDescription:
      "HomeFix is a mobile-based home service booking platform designed to simplify the process of finding and booking reliable service providers. The application connects customers with professionals who offer different home services, making it easier to discover available services and manage bookings in one place.\n\nThe application provides a user-friendly experience where customers can explore service categories, discover recommended providers, view booking information and track their current service requests. It also supports service provider-related workflows and booking management functionalities.\n\nThe project focuses on building a complete mobile application supported by a backend API and database, with an emphasis on usability, reliable data management and efficient communication between the mobile application and backend services.",

    features: [
      "User registration and authentication",
      "Browse home service categories",
      "Discover and view service providers",
      "Recommended service providers",
      "Create and manage service bookings",
      "Track current booking status",
      "View booking history",
      "Customer profile management",
    ],

    images: [
      "/images/projects/homefix.jpg",
      "/images/projects/homefix22.jpg",
      "/images/projects/homefix2.jpg",
      "/images/projects/homefix3.jpg",
      "/images/projects/homefix4.jpg",
      "/images/projects/homefix5.jpg",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
    ],

    github: "https://github.com/isuru-bimsara/HomeFix",
    demo: "",
  },

  {
    number: "02",
    title: "Club Management System",
    category: "Full-Stack Web Application",

    shortDescription:
      "A web-based club management platform for managing events, ticket purchasing, merchandise orders and payment verification.",

    fullDescription:
      "The Club Management System is a web application designed to simplify and centralize the management of university clubs and their activities. It provides a platform for managing club-related operations while supporting different user roles and responsibilities.\n\nThe system includes event management functionality, allowing users to explore events and participate in club activities. It also provides ticket purchasing and merchandise ordering workflows, together with payment receipt submission and verification.\n\nThe application is developed with a role-based approach to support students, club administrators and system administrators. The project focuses on improving the management of club activities through an organized digital platform.",

    features: [
      "Role-based user authentication",
      "Student and club management",
      "Event creation and management",
      "Event calendar and scheduling",
      "Event ticket purchasing",
      "Merchandise management",
      "Order management",
      "Payment receipt submission",
      "Payment verification",
      "Administrative management",
    ],

    images: [
      "/images/projects/club-management.png",
      "/images/projects/club-management-2.png",
      "/images/projects/club-management-3.png",
      "/images/projects/club-management-4.png",
      "/images/projects/club-management-5.png",
      "/images/projects/club-management-6.png",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    github: "https://github.com/isuru-bimsara/SLIIT-Events",
    demo: "",
  },

  {
    number: "03",
    title: "Campus360 - Smart Campus Operations Hub",
    category: "Full-Stack Web Application",

    shortDescription:
      "A smart campus management platform designed to centralize university resource management, facility bookings, maintenance operations and notifications through a role-based system.",

    fullDescription:
      "Campus360, also known as Smart-Uni-System, is a Smart Campus Operations Hub designed to streamline and centralize essential university operational activities. The platform provides a structured digital environment for managing campus resources, handling facility bookings and coordinating operational activities.\n\nThe system includes Resource Management, Booking Management and Notification Management functionalities. Users can interact with available campus resources and submit booking requests, while authorized operational staff can manage resources, process bookings and handle related notifications through dedicated management interfaces.\n\nThe application follows a role-based access control approach to separate responsibilities between users, technicians, administrators and operation managers. The Operation Manager role is responsible for managing resource, booking and notification operations, while the system uses role-based permissions to control access to different functionalities.\n\nThe project focuses on building a maintainable full-stack application with a structured backend architecture, secure authentication and organized management workflows to support more efficient campus operations.",

    features: [
      "Role-based authentication and authorization",
      "Campus resource management",
      "Create, update and manage campus resources",
      "Resource availability management",
      "Facility booking requests",
      "Booking approval and management",
      "Booking conflict prevention",
      "Notification management",
      "Technician-related operational workflows",
      "Operation Manager access control",
      "Secure REST API endpoints",
    ],

    images: [
      "/images/projects/campus360.png",
      "/images/projects/campus360-2.png",
      "/images/projects/campus360-3.png",
      "/images/projects/campus360-4.png",
      "/images/projects/campus360-5.png",
    ],

    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "Maven",
    ],

    github: "https://github.com/isuru-bimsara/Campus360",
    demo: "",
  },
];

type Project = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);

  // OPEN PROJECT GALLERY
  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  // CLOSE PROJECT GALLERY
  const closeGallery = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  // NEXT IMAGE
  const nextImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex(
      (current) =>
        (current + 1) % selectedProject.images.length
    );
  };

  // PREVIOUS IMAGE
  const previousImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex(
      (current) =>
        (current - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <section
      id="projects"
      className="bg-[#242529] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <p className="text-xs font-bold tracking-[0.35em] text-[#ff6748]">
          SELECTED WORKS
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-4xl font-bold">
            My Projects.
          </h2>

          <a
            href="https://github.com/isuru-bimsara"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 transition hover:text-[#ff6748]"
          >
            View GitHub
            <ExternalLink className="ml-2 inline" size={15} />
          </a>
        </div>

        {/* PROJECT CARDS - HORIZONTAL GRID */}
        <div className="mt-14 grid items-stretch gap-9 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex h-full flex-col"
            >

              {/* PROJECT IMAGE */}
              <button
                type="button"
                onClick={() => openGallery(project)}
                aria-label={`View ${project.title} details`}
                className="relative flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-[#1c1d21] p-3 text-left"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-4 top-4 z-10 bg-[#242529]/90 px-3 py-2 text-xs text-[#ff6748]">
                  {project.number}
                </span>

                {/* HOVER OVERLAY */}
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/60">
                  <span className="flex translate-y-3 items-center gap-2 border border-white/30 bg-[#242529]/90 px-5 py-3 text-xs font-bold tracking-widest text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Images size={16} />
                    VIEW PROJECT
                  </span>
                </span>
              </button>

              {/* PROJECT DETAILS */}
              <div className="flex flex-1 flex-col">

                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#ff6748]">
                  {project.category}
                </p>

                <h3 className="mt-3 min-h-[3.5rem] text-xl font-bold leading-snug text-white transition group-hover:text-[#ff6748]">
                  {project.title}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p className="mt-3 min-h-[8rem] text-sm leading-7 text-gray-400">
                  {project.shortDescription}
                </p>

                {/* TECHNOLOGY HIGHLIGHTS */}
                <div className="mt-5 min-h-[6rem]">
                  <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-gray-500">
                    TECHNOLOGIES USED
                  </p>

                  <div className="flex flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#ff6748]/20 bg-[#ff6748]/10 px-3 py-2 text-xs font-semibold text-[#ff9a83] transition duration-300 hover:border-[#ff6748] hover:bg-[#ff6748] hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PROJECT LINKS - ALIGNED AT BOTTOM */}
                <div className="mt-auto flex min-h-[4rem] flex-wrap items-center gap-5 border-t border-white/10 pt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 transition hover:text-[#ff6748]"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 transition hover:text-[#ff6748]"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      {/* PROJECT GALLERY MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeGallery}
        >

          {/* ONE SCROLLABLE MODAL CONTAINER */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto overscroll-contain border border-white/10 bg-[#090b10] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* STICKY HEADER */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#090b10]/95 px-5 py-4 backdrop-blur-md sm:px-7">

              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#ff6748]">
                  PROJECT GALLERY
                </p>

                <h2
                  id="project-modal-title"
                  className="mt-1 text-lg font-bold text-white sm:text-xl"
                >
                  {selectedProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-[#ff6748] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* MAIN IMAGE */}
            <div className="relative flex h-[45vh] min-h-[260px] max-h-[550px] items-center justify-center overflow-hidden bg-[#050609] sm:h-[55vh]">

              <div className="relative h-full w-full">
                <Image
                  key={selectedProject.images[selectedImageIndex]}
                  src={selectedProject.images[selectedImageIndex]}
                  alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain"
                />
              </div>

              {/* PREVIOUS IMAGE */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#ff6748] sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={26} />
              </button>

              {/* NEXT IMAGE */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#ff6748] sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight size={26} />
              </button>

              {/* IMAGE COUNTER */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-5 py-2 text-xs font-semibold text-white">
                {selectedImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* HORIZONTAL THUMBNAIL GALLERY */}
            <div className="border-t border-white/10 bg-[#11141b] px-4 py-4 sm:px-7">

              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-300">
                  All Screenshots
                </p>

                <p className="text-[10px] text-gray-500">
                  Select an image to preview
                </p>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-3">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={selectedImageIndex === index}
                    className={`relative h-[76px] w-[125px] shrink-0 overflow-hidden rounded-xl border-2 bg-[#050609] transition sm:h-[90px] sm:w-[155px] ${
                      selectedImageIndex === index
                        ? "border-[#ff6748] opacity-100"
                        : "border-white/10 opacity-60 hover:border-white/50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Screenshot thumbnail ${index + 1}`}
                      fill
                      sizes="155px"
                      className="object-contain p-1"
                    />

                    <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FULL PROJECT DESCRIPTION */}
            <div className="border-t border-white/10 bg-[#11141b] px-5 py-7 sm:px-8 sm:py-9">

              <p className="text-[10px] font-bold tracking-[0.3em] text-[#ff6748]">
                ABOUT THE PROJECT
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                {selectedProject.title}
              </h3>

              {/* LONG DESCRIPTION */}
              <div className="mt-4 space-y-4">
                {selectedProject.fullDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-8 text-gray-400"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* KEY FEATURES */}
              <div className="mt-8">
                <h3 className="text-base font-semibold text-white">
                  Key Features
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {selectedProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-1 text-[#ff6748]">
                        ↗
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-9">
                <h3 className="text-base font-semibold text-white">
                  Technologies Used
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#ff6748]/20 bg-[#ff6748]/10 px-4 py-2 text-xs font-semibold text-[#ff9a83] transition hover:border-[#ff6748] hover:bg-[#ff6748] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECT LINKS */}
              <div className="mt-9 flex flex-wrap gap-4 border-t border-white/10 pt-7">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#111b22] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff6748] hover:text-[#ff6748]"
                >
                  Source Code
                  <FaGithub size={19} />
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#ff6748] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e9573b]"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
