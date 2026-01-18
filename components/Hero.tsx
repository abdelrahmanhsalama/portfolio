import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-4"
      id="hero"
    >
      <div className="space-y-2 flex-3">
        <p className="text-lg sm:text-xl">Software Engineer</p>
        <p>
          I always wanted to study Computer Science, that's why I started
          studying web development during the last year of{" "}
          <strong>dental school</strong>, after graduating I attended both a
          scholarship and an internship in frontend web development.
        </p>
        <p>
          Although frontend development was a much better fit for me than
          dentistry but I always had it in the back of my head that I studied
          dentistry for a reason.
        </p>
        <p>
          I made my research and I found about health informatics (and
          bioinformatics which I thought was related to it at one point) and I
          fell in love with it! Finally, a field were I am embraced for being
          both a dentist and a software engineer!
        </p>
        <p>
          I have experience with{" "}
          <span className="border-b border-dashed hover:border-solid">
            HTML
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">CSS</span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">
            JavaScript
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">
            TypeScript
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">
            React
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">
            Next.js
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">SQL</span>{" "}
          and I am currently learning{" "}
          <span className="border-b border-dashed hover:border-solid">C#</span>{" "}
          and{" "}
          <span className="border-b border-dashed hover:border-solid">
            ASP.NET
          </span>
          .
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/work.gif"
          alt="Abdelrahman"
          width="500"
          height="500"
          className="rounded mx-auto w-full grayscale hover:grayscale-0 active:grayscale-0 transition duration-200"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
