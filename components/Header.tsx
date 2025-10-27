import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl font-medium">Abdelrahman Salama</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
