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
        <div className="border size-8 rounded flex justify-center items-center hover:bg-foreground hover:text-background duration-200 cursor-pointer">
          {isDark ? <Sun className="w-4" /> : <Moon className="w-4" />}
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
