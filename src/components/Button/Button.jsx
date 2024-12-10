import PropTypes from "prop-types";
import { useMemo } from "react";

import styles from "./Button.module.css";

const secondaryButtonBGColors = [
  "bgColorGreen",
  "bgColorPurple",
  "bgColorBlue",
];

function Button({ children, onClick, buttonClass, customClass = "" }) {
  // Use `useMemo` to compute the random color only once for the render lifecycle
  const chosenColor = useMemo(() => {
    if (buttonClass === "secondaryButton") {
      const num = Math.floor(Math.random() * secondaryButtonBGColors.length);
      return secondaryButtonBGColors[num];
    }
    return null; // No random color for other button types
  }, [buttonClass]);

  return (
    <button
      onClick={onClick}
      className={`${styles[buttonClass]} 
      ${chosenColor ? styles[chosenColor] : ""} 
      ${styles[customClass]}
      open-sans-700`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is passed
  onClick: PropTypes.func, // Click handler function
  buttonClass: PropTypes.string, // Class name for styling
  customClass: PropTypes.string,
};

export default Button;
