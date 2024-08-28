import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import AnimatedText from "./components/AnimatedText";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <header>
        <div className="logo">
          <Logo />
        </div>
        <h1>Pavel Moulis</h1>
        <h2>↳ Fullstack Developer </h2>
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
    </div>
  );
}

export default App;
