import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const specialButtonTexts = ["Try something?", "Surprise Me!"];

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [randomText, setRandomText] = useState(specialButtonTexts[0]);

  // Rotate random button text
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomText(specialButtonTexts[Math.floor(Math.random() * 2)]);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      {showModal && (
        <Modal>
          <div className={styles.modalTextContainer}>
            <h2 className={`${styles.modalHeading} open-sans-700`}>
              What is this special button, you ask?
            </h2>
            <p className={`${styles.modalText} open-sans-500`}>
              Click on it and try playing the game! :)
            </p>
          </div>

          <div className={styles.modalButtonsContainer}>
            <Button buttonClass="mainButton">
              <Link to="/game">{randomText}</Link>
            </Button>
            <Button
              buttonClass="secondaryButton"
              onClick={closeModal}
              customClass="secondaryButtonSmallWidth"
            >
              Close
            </Button>
          </div>
        </Modal>
      )}

      <div className={styles.cardContainer}>
        {/* Text Container */}
        <div className={styles.headerTextContainer}>
          <h1 className={`${styles.heading} open-sans-700`}>
            Hey there! I am Ayush
          </h1>
          <p className={`${styles.aboutText} open-sans-500`}>
            I am a software developer with experience in React, Angular,
            TypeScript, Node.js, and Express. I have completed my bachelors in
            Engineering from BITS Pilani Goa Campus. I am currently working at
            Zapcom Solutions.
          </p>
        </div>

        {/* Buttons Container */}
        <div className={styles.buttonContainer}>
          <div className={styles.specialButtonContainer}>
            <Button buttonClass="mainButton">
              <Link to="/game">{randomText}</Link>
            </Button>

            <div className={styles.infoContainer}>
              <p onClick={openModal} className={styles.info}>
                i
              </p>
            </div>
          </div>

          <Button buttonClass="secondaryButton">
            <Link to="/about">Checkout my Skills</Link>
          </Button>

          <Button buttonClass="secondaryButton">
            <Link to="/experience">Checkout my Experience</Link>
          </Button>

          <Button buttonClass="secondaryButton">
            <Link to="/projects">Checkout my Projects</Link>
          </Button>

          <Button buttonClass="secondaryButton">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      <img className={styles.image} src="./hero.svg" alt="COMPUTERS!" />
    </header>
  );
}

export default Header;
