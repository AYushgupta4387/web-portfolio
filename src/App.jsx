import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import styles from "./App.module.css";

import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import ContactMe from "./pages/ContactMe/ContactMe";
import Projects from "./pages/Projects/Projects";
import Game from "./pages/Game/Game";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import PageNavigation from "./components/PageNavigation/PageNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ConditionalNavigation /> {/* Conditionally renders the navigation */}
      </div>
    </BrowserRouter>
  );
}

// Component to conditionally render navigation
function ConditionalNavigation() {
  const location = useLocation(); // Get the current location

  // Render PageNavigation only if the path is not "/"
  if (location.pathname === "/") {
    return null;
  }

  return <PageNavigation />;
}

export default App;
