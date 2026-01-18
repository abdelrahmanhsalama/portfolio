import React from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const Header = ({ variant }: { variant: string }) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl font-medium">Abdelrahman Salama</h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Link
            href="mailto:AbdelrahmanSalama150@gmail.com"
            className="border px-2 py-1 rounded flex justify-center items-center hover:bg-foreground hover:text-background duration-200 cursor-pointer"
          >
            <Mail className="w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdelrahmanhsalama/"
            className="border px-2 py-1 rounded flex justify-center items-center hover:bg-foreground hover:text-background duration-200 cursor-pointer"
          >
            <Linkedin className="w-4" />
          </Link>
        </div>
        <Link
          href={variant === "home" ? "/blog" : "/"}
          className="border px-2 py-1 rounded flex justify-center items-center hover:bg-foreground hover:text-background duration-200 cursor-pointer"
        >
          {variant === "home" ? "Blog" : "Home"}
        </Link>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
