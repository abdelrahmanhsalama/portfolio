"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    id: 3,
    title: "blog-app",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    details: [
      "Full-stack blogging platform.",
      "Backend REST API built with Node.js/Express handles CRUD operations and input validation.",
      "Designed normalized PostgreSQL database schema.",
      "Implemented JWT-based authentication and authorization middleware using Passport.js.",
      "React/Next.js frontend for API demonstration.",
    ],
    github: "https://github.com/abdelrahmanhsalama/node-blog-app",
  },
  {
    id: 2,
    title: "novelnest",
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Socket.IO",
      "Tailwind CSS",
    ],
    details: [
      "A social platform that allows users to track reading progress, manage bookmarks, and set personalized reading goals.",
      "Includes dedicated book pages, real-time chat, and social networking features.",
    ],
    github: "https://github.com/novelNestRepo/novelnestFrontend",
  },
  {
    id: 1,
    title: "next-ecommerce",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    details: [
      "E-commerce platform with 50+ product listings, cart persistence, and complete checkout flow.",
      "Optimized API calls and implemented clean state management using Zustand.",
      "Integrated NextAuth.js for secure authentication and protected routes.",
    ],
    live: "https://abdelrahman-next-ecommerce.vercel.app/",
    github: "https://github.com/abdelrahmanhsalama/next-ecommerce",
  },
];

const Projects = () => {
  const [openedItem, setOpenedItem] = useState<null | number>(null);
  const handleOpenItem = (itemId: number) => {
    setOpenedItem(openedItem === itemId ? null : itemId);
  };

  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semimedium">Projects</h2>
      {projects.map((i) => (
        <div key={i.id} className="border rounded p-2 space-y-1 sm:space-y-0">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-lg font-medium">{i.title}</h3>
            <div>
              {i.live && (
                <Link
                  href={i.live}
                  className="border-b border-dashed hover:border-solid active:border-solid cursor-pointer"
                >
                  Live Version
                </Link>
              )}
              {i.live && i.github && " • "}
              {i.github && (
                <Link
                  href={i.github}
                  className="border-b border-dashed hover:border-solid active:border-solid cursor-pointer"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </div>
          <p>{i.technologies.join(", ")}</p>
          {i.details.length > 0 && (
            <div className="text-sm mt-2">
              <p
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => {
                  if (i.details.length > 0) handleOpenItem(i.id);
                }}
              >
                {openedItem === i.id ? (
                  <>
                    <CircleMinus size="14" /> Click for less details!
                  </>
                ) : (
                  <>
                    <CirclePlus size="14" /> Click for more details!
                  </>
                )}
              </p>
            </div>
          )}
          <div
            className={`overflow-hidden transition-all duration-250 ease-in-out ${
              openedItem === i.id ? "max-h-100" : "max-h-0"
            }`}
          >
            {i.details.length == 0 ? null : i.details.length == 1 ? (
              <p className="mt-2">{i.details[0]}</p>
            ) : (
              <ol className="mt-2 list-disc ms-6">
                {i.details.map((itemDetails, index) => (
                  <li key={index}>{itemDetails}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
