import PropTypes from "prop-types";

import SkillBox from "../skillBox/SkillBox";
import styles from "./About.module.css";
import Skill from "../Skill/Skill";
import ButtonMain from "../ButtonMain/ButtonMain";

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
    <div className={styles.coolAboutMeTextBox}>
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

      <ButtonMain onClick={handlePrev}>Previous</ButtonMain>
      <ButtonMain onClick={handleNext}>Next</ButtonMain>
    </div>
  );
}

About.propTypes = {
  onClickStart: PropTypes.func,
};

export default About;
