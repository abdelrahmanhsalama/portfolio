import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center">
      <div className="pulsating-circle ms-3"></div>
      <p className="ms-12">
        I am open to work! Contact me via{" "}
        <Link
          href="mailto:abdlrhmnhlmysalama@gmail.com"
          className="border-b border-dashed hover:border-solid active:border-solid cursor-pointer"
        >
          email
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.linkedin.com/in/abdelrahmanhsalama/"
          className="border-b border-dashed hover:border-solid active:border-solid cursor-pointer"
        >
          LinkedIn
        </Link>
        , check my profile on{" "}
        <Link
          href="https://github.com/abdelrahmanhsalama"
          className="border-b border-dashed hover:border-solid active:border-solid cursor-pointer"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
};

export default Contact;
