import { NavLink, Link } from "react-router-dom";

import styles from "./PageNavigation.module.css";
import Button from "../Button/Button";

function PageNavigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={`${styles.linksContainer} open-sans-700`}>
        <li className={styles.link}>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className={styles.link}>
          <NavLink to="/experience">Experience</NavLink>
        </li>

        <li className={styles.homeButton}>
          <div className={styles.imageContainer}>
            <NavLink to="/">
              <img src="./house-solid.svg" />
            </NavLink>
          </div>
        </li>

        <li className={styles.link}>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li className={styles.link}>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className={styles.gameButtonContainer}>
          <div className={styles.gameButton}>
            <Button buttonClass="mainButton">
              <Link to="/game">Try me!</Link>
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavigation;
