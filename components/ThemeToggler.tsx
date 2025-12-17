"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="flex items-center gap-1 group"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && (
        <div className="border p-2 rounded sm:border-none sm:p-0">
          {isDark ? (
            <Sun className="w-4 sm:group-hover:-translate-y-0.5 sm:duration-250" />
          ) : (
            <Moon className="w-4 sm:group-hover:-translate-y-0.5 sm:duration-250" />
          )}
        </div>
      )}
      {mounted && (
        <span className="hidden sm:inline border-b border-dashed group-hover:border-solid cursor-pointer w-max">
          {isDark ? "Lights on!" : "Lights off!"}
        </span>
      )}
    </div>
  );
};

export default ThemeToggler;
