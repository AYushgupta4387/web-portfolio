import styles from "./About.module.css";
import SkillBox from "../../components/SkillBox/SkillBox";
import Skill from "../../components/Skill/Skill";

const skills = {
  advance: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Angular"],
  intermediate: [
    "TypeScript",
    "JQuery",
    "Angular Material UI",
    "GIT",
    "Tailwind CSS",
    "BootStrap",
    "Figma",
    "Bit Bucket",
  ],
  novice: ["PHP", "Laravel", "SQL", "MySQL", "NodeJS", "Express"],
};

function About() {
  return (
    <div className={styles.aboutMeTextBox}>
      <h1 className={`${styles.primaryHeading} open-sans-700`}>About Me</h1>

      <div className={styles.textContainer}>
        <div className={styles.circle}></div>
        <h2 className={`${styles.secondaryHeading} open-sans-700`}>
          Education
        </h2>
        <p className="open-sans-500">
          <span>School</span> - The Sanskaar Valley School, Bhopal
        </p>
        <p className="open-sans-500">
          <span>College</span> - BITS Pilani Goa Campus
        </p>
      </div>

      <div className={styles.skillsContainer}>
        <h2 className={`${styles.secondaryHeading} open-sans-700`}>
          Tech-Stack
        </h2>

        <div className={`${styles.circle} ${styles.circleTwo}`}></div>

        {/* Using the skills object as an array of arrays. */}
        {Object.keys(skills).map((level) => (
          <SkillBox
            key={level}
            heading={level.charAt(0).toUpperCase() + level.slice(1)}
          >
            {skills[level].map((skill, index) => (
              <Skill key={index} type={level} text={skill} />
            ))}
          </SkillBox>
        ))}
      </div>
    </div>
  );
}

export default About;
