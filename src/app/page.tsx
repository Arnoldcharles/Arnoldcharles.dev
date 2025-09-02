import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
    </main>
  );
}
