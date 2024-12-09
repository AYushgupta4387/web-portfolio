import PropTypes from "prop-types";
import styles from "./Skill.module.css";

const typeStyles = {
  advance: "aboutMeSkillAdv",
  intermediate: "aboutMeSkillInt",
  novice: "aboutMeSkillNovice",
};

function Skill({ text, type }) {
  return (
    <span
      className={`${styles.aboutMeSkill} ${
        styles[typeStyles[type]]
      } open-sans-700`}
    >
      {text}
    </span>
  );
}

Skill.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["advance", "intermediate", "novice"]).isRequired,
};

export default Skill;
