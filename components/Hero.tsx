import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-4"
      id="hero"
    >
      <div className="space-y-2 flex-3">
        <p className="text-xl">
          Health Informatics Specialist by day,
          <br />
          Frontend Developer at heart.
        </p>
        <p>
          With a strong foundation in oral and dental medicine and hands-on
          experience in frontend development, I bridge the gap between
          clinicians and developers by transforming healthcare needs into
          digital solutions. Skilled in building dashboards, responsive
          applications, and user-friendly interfaces using JavaScript,
          TypeScript, React, and Next.js, with familiarity in React Native and
          Node.js. Passionate about leveraging technology to improve healthcare
          services and advance digital health.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/abdelrahman.jpg"
          alt="Abdelrahman"
          width="500"
          height="500"
          className="rounded-full w-[75%] mx-auto md:w-full"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
