"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import React, { useState } from "react";

const items = [
  {
    id: 100,
    title: "Bachelor of Oral and Dental Medicine and Surgery (BDS)",
    startTime: "Sep 2018",
    endTime: "Jul 2023",
    place: "Horus University in Egypt",
    location: "New Damietta, Egypt",
    details: [],
  },
  {
    id: 3,
    title: "Health Informatics Internship",
    startTime: "Sep 2025",
    endTime: "Present",
    place: "Health-Insights",
    location: "Cairo, Egypt",
    details: [
      "Gained hands-on experience with Electronic Health Records (EHR) systems, including data entry, navigation, and understanding clinical workflows to support healthcare delivery.",
    ],
  },
  {
    id: 2,
    title: "Frontend Web Development Internship",
    startTime: "Jul 2025",
    endTime: "Sep 2025",
    place: "Buguard",
    location: "Cairo, Egypt",
    details: [
      "Worked on a secure operations dashboard used for managing company workflows.",
      "Built task management and real-time dashboards for data visualization.",
      "Designed user-centered UIs ensuring usability for diverse users.",
    ],
  },
  {
    id: 1,
    title: "Frontend and Cross Platform Development Scholarship",
    startTime: "Nov 2024",
    endTime: "May 2025",
    place: "Mansoura, Egypt",
    location: "Information Technology Institute (ITI)",
    details: [
      "Trained on building cross-platform apps with responsive and accessible UIs using HTML, CSS, JavaScript, TypeScript, React, Next.js and React Native.",
      "Gained experience in authentication, data handling, and API integration",
    ],
  },
];

const ExperienceEducation = () => {
  const [openedItem, setOpenedItem] = useState<null | number>(null);
  const handleOpenItem = (itemId: number) => {
    setOpenedItem(openedItem === itemId ? null : itemId);
  };

  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">Experience & Education</h2>
      {items.map((i) => (
        <div
          key={i.id}
          onClick={() => {
            if (i.details.length > 0) handleOpenItem(i.id);
          }}
          className={`border rounded p-2 ${
            i.details.length >= 1 ? "cursor-pointer" : null
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{i.title}</h3>
            <p className="hidden lg:block">
              {i.startTime} - {i.endTime}
            </p>
          </div>
          <p className="lg:hidden">
            {i.startTime} - {i.endTime}
          </p>
          <p>
            {i.place} • {i.location}
          </p>
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

export default ExperienceEducation;
