import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-6 space-y-6">
      <Header variant="home" />
      <Hero />
      <ExperienceEducation />
      <Projects />
      <Footer />
    </div>
  );
}
