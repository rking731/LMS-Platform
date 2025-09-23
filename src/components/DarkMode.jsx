// src/components/DarkMode.jsx
import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 14px",
        fontSize: "20px",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
      }}
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkMode;