
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#242529] text-[#f5f5f5]">
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Footer />
    </main>
  );
}
