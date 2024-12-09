import PropTypes from "prop-types";

import SkillBox from "../../components/SkillBox/SkillBox";
import styles from "./About.module.css";
import Skill from "../../components/Skill/Skill";
import Button from "../../components/Button/Button";

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

function About({ onClickStart }) {
  const handleNext = function () {
    onClickStart((prev) => prev + 1);
  };

  const handlePrev = function () {
    onClickStart((prev) => prev - 1);
  };

  return (
    <div className={styles.aboutMeTextBox}>
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

      <Button buttonClass="mainButton" onClick={handlePrev}>
        Previous
      </Button>
      <Button buttonClass="mainButton" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

About.propTypes = {
  onClickStart: PropTypes.func,
};

export default About;
