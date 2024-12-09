import PropTypes from "prop-types";
import styles from "./SkillBox.module.css";

const headingStyles = {
  Advance: { styleClass: "aboutMeSkillBoxAdv", color: "#16e0bd" },
  Intermediate: { styleClass: "aboutMeSkillBoxInt", color: "#b953ff" },
  Novice: { styleClass: "aboutMeSkillBoxNovice", color: "#4452fb" },
};

function SkillBox({ children, heading }) {
  const { styleClass, color } = headingStyles[heading] || {};

  return (
    <div className={`${styles.aboutMeSkillBox} ${styles[styleClass]}`}>
      <h3 style={{ color }} className={`${styles.heading} open-sans-700`}>
        {heading}
      </h3>
      <div className={`${styles.aboutMeSkillsContainer}`}>{children}</div>
    </div>
  );
}

SkillBox.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.oneOf(["Advance", "Intermediate", "Novice"]).isRequired, // Restricting the heading prop values
};

export default SkillBox;
