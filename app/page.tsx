import ExperienceEducation from "@/components/ExperienceEducation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[90%] md:w-[75%] xl:w-[50%] mx-auto my-8">
      <Header />
      <div id="container" className="space-y-8">
        <Hero />
        <ExperienceEducation />
      </div>
    </main>
  );
}
