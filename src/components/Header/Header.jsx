import PropTypes from "prop-types";

import styles from "./Header.module.css";
import ButtonMain from "../ButtonMain/ButtonMain";

function Header({ onClickStart }) {
  return (
    <header className={styles.header}>
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
      <ButtonMain onClick={onClickStart}>Get Started!</ButtonMain>
      <img className={styles.image} src="./hero.svg" alt="COMPUTERS!" />
    </header>
  );
}

Header.propTypes = {
  onClickStart: PropTypes.func,
};

export default Header;
