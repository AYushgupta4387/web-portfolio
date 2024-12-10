import { useState } from "react";
import styles from "./Experience.module.css";

const companys = ["Zapcom Solutions", "KNOLSKAPE Solutions", "CuriousJr"];

const experiencePoints = [
  [
    "Completed and deployed a multi-tenancy loyalty platform for 10+ diverse clients using Angular and TypeScript.",
    "Took ownership of the project development life-cycle, including reviewing the code written by teammates and meeting all delivery timelines.",
    "Received a certificate for exceptional teamwork and outstanding performance.",
    "Developed UI and integrated APIs for essential modules of the loyalty platform, specializing in authentication, profile management, reward systems, scan flows, Google Analytics, product traceability, and transaction histories.",
    "Resolved 100+ critical and functional bugs across multiple project deliveries, ensuring their deadlines are met.",
    "Led design discussions, proof-of-concepts, and developed guided tours and product traceability modules.",
    "Collaborated with UX researchers to conceptualize and design the company website, implemented it using React.",
    "Optimized the company’s website to improve Lighthouse performance scores by 20%, enhancing user experience.",
  ],
  [
    "Redesigned and developed a responsive UI for generating post-course completion reports, utilizing React and SASS.",
    "Integrated the company’s API into the UI to gather comprehensive user data for performance evaluation.",
  ],
  [
    "Developed several small-scale projects utilizing HTML, CSS, JavaScript, and jQuery, integrating them with the company's framework.",
    "One of these projects garnered over 5,000 active users within their app.",
  ],
];

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.experienceContainer}>
      <h1 className={`${styles.mainHeading} open-sans-700`}>Experience</h1>
      <div className={styles.expTabsContainer}>
        {companys.map((elem, index) => {
          return (
            <div
              key={index}
              className={`${styles.expTab} open-sans-700 ${
                selectedIndex === index ? styles.selectedExpTab : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {elem}
            </div>
          );
        })}
      </div>

      <div className={styles.expTextContainer}>
        {experiencePoints[selectedIndex].map((elem, index) => {
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
