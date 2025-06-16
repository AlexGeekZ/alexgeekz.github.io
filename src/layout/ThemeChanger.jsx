import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "light");
      document.body.classList.add("light-mode");
    } else {
      localStorage.setItem("Theme", "dark");
      document.body.classList.remove("light-mode");
    }
  };
  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") return document.body.classList.add("dark-mode");
  });

  return (
    <div>
      <button onClick={handleChange} className={themeState ? "navbar--themeDark" : "navbar--themeLight"}>
        {themeState ? (
          <FontAwesomeIcon icon={faSun} className="navbar--sun" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="navbar--moon" />
        )}
      </button>
    </div>
  );
};
