import React from "react";

const items = [
  {
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
  {
    title: "BDS in Oral and Dental Medicine",
    startTime: "Sep 2018",
    endTime: "Jul 2023",
    place: "Horus University in Egypt",
    location: "New Damietta, Egypt",
    details: ["GPA: 3.6"],
  },
];

const ExperienceEducation = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience & Education</h2>
      {items.map((i) => (
        <div key={i.place} className="space-y-2">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{i.title}</h3>
              <p>
                {i.startTime} - {i.endTime}
              </p>
            </div>
            <p>
              {i.place} • {i.location}
            </p>
          </div>
          <div>
            {i.details.length == 1 ? (
              <p className="ms-4">{i.details}</p>
            ) : (
              <ol>
                {i.details.map((itemDetails, index) => (
                  <li key={index} className="list-disc ms-8">
                    {itemDetails}
                  </li>
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
