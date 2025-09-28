import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center">
      <div className="pulsating-circle ms-3"></div>
      <p className="ms-12">
        I am open to work! Contact me via{" "}
        <Link
          href="mailto:abdlrhmn.salama"
          className="underline underline-offset-2 font-semibold hover:text-foreground/60 transition duration-100"
        >
          email
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.linkedin.com/in/abdelrahmanhsalama/"
          className="underline underline-offset-2 font-semibold hover:text-foreground/60 transition duration-100"
        >
          LinkedIn
        </Link>
        , check my profile on{" "}
        <Link
          href="https://github.com/abdlrhmnhsalama"
          className="underline underline-offset-2 font-semibold hover:text-foreground/60 transition duration-100"
        >
          GitHub
        </Link>{" "}
        or view/download my{" "}
        <Link
          href="/abdelrahman-salama.pdf"
          className="underline underline-offset-2 font-semibold hover:text-foreground/60 transition duration-100"
        >
          CV
        </Link>
        .
      </p>
    </div>
  );
};

export default Contact;
