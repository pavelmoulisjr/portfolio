import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import AnimatedText from "./components/AnimatedText";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <header>
        <div className="logo">
          <Logo />
        </div>
        <h1>Pavel Moulis</h1>
        <h2>↳ Fullstack Developer </h2>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      <main>{/* Add your main content here */}</main>

      <footer>
        <ul>
          <li>
            <AnimatedText href="mailto:hello@pavel.dk" className="mail" as="h3">
              M
            </AnimatedText>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
