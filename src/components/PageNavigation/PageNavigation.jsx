import { NavLink } from "react-router-dom";
import styles from "./PageNavigation.module.css";

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
      </ul>
    </nav>
  );
}

export default PageNavigation;
