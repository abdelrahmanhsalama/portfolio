"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const frontendProjects = [
  {
    id: 3,
    title: "novelnest",
    technologies:
      "Next.js, TypeScript, TanStack Query, Socket.IO, Tailwind CSS",
    details: [
      "A social platform that allows users to track reading progress, manage bookmarks, and set personalized reading goals.",
      "Includes dedicated book pages, real-time chat, and social networking features.",
    ],
  },
  {
    id: 2,
    title: "next-ecommerce",
    technologies: "Next.js, TypeScript, Zustand, NextAuth.js, Tailwind CSS",
    details: [
      "Built an e-commerce platform with product listings, product pages, shopping cart, wishlist, and a checkout flow.",
      "Optimized API calls for performance and clean state management using Zustand.",
      "Integrated authentication and protected routes with NextAuth.js.",
    ],
  },
  {
    id: 1,
    title: "next-blog",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    details: [
      "A responsive blog viewer that fetches posts from JSONPlaceholder API and displays each in its own page.",
    ],
  },
];

const Projects = () => {
  const [openedItem, setOpenedItem] = useState<null | number>(null);
  const handleOpenItem = (itemId: number) => {
    setOpenedItem(openedItem === itemId ? null : itemId);
  };

  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <h3 className="text-xl">Health Informatics Projects</h3>
      <div className="flex items-center gap-1">
        <Image
          src="/work.gif"
          width="100"
          height="100"
          alt="Work GIF"
          className="rounded"
        ></Image>
        <p>Working hard on that...</p>
      </div>
      <h3 className="text-xl">Frontend Projects</h3>
      {frontendProjects.map((i) => (
        <div
          key={i.id}
          onClick={() => {
            if (i.details.length > 0) handleOpenItem(i.id);
          }}
          className={`border rounded p-2 ${
            i.details.length >= 1 ? "cursor-pointer" : null
          }`}
        >
          <h3 className="text-lg font-medium">{i.title}</h3>
          <p>{i.technologies}</p>
          {i.details.length > 0 && (
            <div className="text-sm mt-2">
              {openedItem === i.id ? (
                <p className="flex gap-1 items-center">
                  <CircleMinus size="14" /> Click for less details!
                </p>
              ) : (
                <p className="flex gap-1 items-center">
                  <CirclePlus size="14" /> Click for more details!
                </p>
              )}
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
