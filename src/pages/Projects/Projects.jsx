import { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  "GitHub Profiler",
  "usePopcorn",
  "WorldWise",
  "Virtual Event Management System",
  "News Aggregator System",
];

const projectExperiencePoints = [
  [
    "Developed a responsive movie review app using React, featuring search functionality powered by the OMDB API.",
    "Implemented an interactive star rating component, allowing users to provide feedback through a customizable rating system.",
    "Implemented Debouncing to reduce the number of API calls and used custom-hooks to encapsulate logic.",
  ],
  [
    "Built a React application with the Leaflet library and the Geolocation API for an interactive map, allowing users to interact with map features to add locations, storing city and country data.",
    "Developed a UI utilizing React and CSS modules to display visited cities and countries, allowing users to add notes.",
    "Utilized react-router for navigation and protected routes to fake auth, and used json-server to store data locally.",
    "Employed performance optimization methods like useMemo and useCallback to minimize wasted renders.",
    "Utilized Context API and useReducer for Global State Management and created custom hooks to encapsulate and reuse logic throughout the application.",
  ],
  [
    "Architected and developed a backend for an Event Management System using Node.js, Express.js, and MongoDB, featuring secure bcrypt password hashing, JWT-based session management, and role-based access control.",
    "Developed comprehensive RESTful APIs for user authentication, event management, and participant registrations, utilizing async/await and Twilio SendGrid’s Email API for automated email notifications for successful registrations.",
    "Designed scalable database schemas for users and events, supporting CRUD operations with authorization, while ensuring data integrity, security, and seamless migration from in-memory structures to MongoDB for persistence.",
  ],
];

const projectsImageSrcs = [
  "./projects/github-profiler.png",
  "./projects/use-popcorn.png",
];

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.projectsContainer}>
      <h1 className={`${styles.mainHeading} open-sans-700`}>Projects</h1>

      <div className={styles.projectTabsContainer}>
        {projects.map((elem, index) => {
          return (
            <div
              key={index}
              className={`${styles.projectTab} open-sans-700 ${
                selectedIndex === index ? styles.selectedProjectTab : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {elem}
            </div>
          );
        })}
      </div>

      <div className={styles.projectContainer}>
        <img src={projectsImageSrcs[selectedIndex]} />
        <h2 className="open-sans-500">{projects[selectedIndex]}</h2>
        {projectExperiencePoints[selectedIndex].map((elem, index) => {
          return (
            <p key={index} className="open-sans-300">
              ➡️ {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
