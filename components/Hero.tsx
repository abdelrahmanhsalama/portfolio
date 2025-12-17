import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-4"
      id="hero"
    >
      <div className="space-y-4 flex-3">
        <p className="text-lg sm:text-xl">Software Engineer</p>
        <p>
          With over 2 years of experience in frontend development, and currently
          pivoting to backend developement, I built (and am building) a number
          of websites that serve different purposes.
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
            Node.js
          </span>
          ,{" "}
          <span className="border-b border-dashed hover:border-solid">
            Express
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
          and{" "}
          <span className="border-b border-dashed hover:border-solid">
            Java
          </span>
          .
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
