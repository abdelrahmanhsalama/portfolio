import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-4"
      id="hero"
    >
      <div className="space-y-4 flex-3">
        <p className="text-lg sm:text-xl">
          Health Informatics Specialist by day,
          <br />
          Frontend Developer at heart.
        </p>
        <p>
          With over 2 years of experience in frontend development, I built a
          number of websites that serve different purposes.
        </p>
        <p>
          I have experience with{" "}
          <span className="border-b border-dashed">HTML</span>,{" "}
          <span className="border-b border-dashed">CSS</span>,{" "}
          <span className="border-b border-dashed">JavaScript</span>,{" "}
          <span className="border-b border-dashed">TypeScript</span>,{" "}
          <span className="border-b border-dashed">React</span>,{" "}
          <span className="border-b border-dashed">Next.js</span> and{" "}
          <span className="border-b border-dashed">SQL</span>.
        </p>
        <p>
          Also since I studied both{" "}
          <span className="border-b border-dashed hover:border-solid">
            oral and dental medicine
          </span>
          <span> and </span>
          <span className="border-b border-dashed hover:border-solid">
            health informatics
          </span>
          , I have the knowledge to bridge the gap between clinicians and
          developers by transforming healthcare needs into digital solutions.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/abdelrahman.jpg"
          alt="Abdelrahman"
          width="500"
          height="500"
          className="rounded-full w-[75%] mx-auto md:w-full grayscale hover:grayscale-0 active:grayscale-0 transition duration-250"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
