import React, { useEffect } from "react";
import assets from "../assets/assets";

const ToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const preferDarkMode = window.matchMedia(
        `(prefres-color-scheme:dark)`
      ).matches;
      // setTheme(theme || preferDarkMode ? "dark" : "light");
            setTheme(preferDarkMode ? "dark" : "light");
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
           document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("light");
            document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button className="cursor-pointer">
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            onClick={() => setTheme("light")}
          />
        ) : (
          <img
            src={assets.moon_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
};

export default ToggleBtn;
