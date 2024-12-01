import { useState } from "react";

import styles from "./App.module.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <div className={styles.mainContainer}>
      {currentPageIndex === 0 && <Header onClickStart={setCurrentPageIndex} />}
      {currentPageIndex === 1 && <About onClickStart={setCurrentPageIndex} />}
    </div>
  );
}

export default App;
