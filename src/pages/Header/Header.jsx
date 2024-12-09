import PropTypes from "prop-types";

import styles from "./Header.module.css";
import Button from "../../components/Button/Button";

function Header({ setCurrentPageIndex }) {
  const onClickStart = function () {
    setCurrentPageIndex((prev) => prev + 1);
  };

  const goTo = function (pageNumber) {
    setCurrentPageIndex(pageNumber);
  };

  return (
    <header className={styles.header}>
      <div className={styles.cardContainer}>
        <div className={styles.headerTextContainer}>
          <h1 className={`${styles.heading} open-sans-700`}>
            Hey there! I am AYush
          </h1>
          <p className={`${styles.aboutText} open-sans-500`}>
            I am a software Developer with the experience in working in React,
            Angular, typescript, NodeJS and Express. I have done my bachelors in
            Engineering from BITS Pilani Goa Campus. I am currently working in
            Zapcom Solutions.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={onClickStart} buttonClass="mainButton">
            Get Started!
          </Button>

          <Button onClick={() => goTo(1)} buttonClass="secondaryButton">
            Checkout my Skills
          </Button>

          <Button onClick={() => goTo(2)} buttonClass="secondaryButton">
            Checkout my Experience
          </Button>

          <Button onClick={() => goTo(3)} buttonClass="secondaryButton">
            Contact Me
          </Button>
        </div>
      </div>

      <img className={styles.image} src="./hero.svg" alt="COMPUTERS!" />
    </header>
  );
}

Header.propTypes = {
  setCurrentPageIndex: PropTypes.func,
};

export default Header;
