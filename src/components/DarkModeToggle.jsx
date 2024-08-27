function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
