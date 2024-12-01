import PropTypes from "prop-types";

import styles from "./ButtonMain.module.css";

function ButtonMain({ children, onClick }) {
  return (
    <button
      onClick={() => onClick((prev) => prev + 1)}
      className={`${styles.button} open-sans-700`}
    >
      {children}
    </button>
  );
}

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired, // Validate that `children` is required and of any renderable type
  onClick: PropTypes.func,
};

export default ButtonMain;
