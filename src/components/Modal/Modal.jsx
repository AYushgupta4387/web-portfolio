import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContentContainer}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
