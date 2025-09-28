import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-8">
      <Header />
      <div id="container" className="space-y-8">
        <Hero />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
