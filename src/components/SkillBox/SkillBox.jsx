import PropTypes from "prop-types";
import styles from "./SkillBox.module.css";

const headingStyles = {
  Advance: { styleClass: "coolAboutMeSkillBoxAdv", color: "#16e0bd" },
  Intermediate: { styleClass: "coolAboutMeSkillBoxInt", color: "#b953ff" },
  Novice: { styleClass: "coolAboutMeSkillBoxNovice", color: "#4452fb" },
};

function SkillBox({ children, heading }) {
  const { styleClass, color } = headingStyles[heading] || {};

  return (
    <div className={`${styles.coolAboutMeSkillBox} ${styles[styleClass]}`}>
      <h3 style={{ color }} className={`${styles.heading} open-sans-700`}>
        {heading}
      </h3>
      <div className={`${styles.coolAboutMeSkillsContainer}`}>{children}</div>
    </div>
  );
}

SkillBox.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.oneOf(["Advance", "Intermediate", "Novice"]).isRequired, // Restricting the heading prop values
};

export default SkillBox;
