import React, { useState, useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="py-2 px-4 text-gray-800 dark:text-gray-200 rounded-full transition-all ease-in-out hover:scale-110 duration-300"
    >
      {darkMode ? (
        <HiOutlineSun className="h-5 w-5 mr-1" />
      ) : (
        <HiOutlineMoon className="h-5 w-5 mr-1" />
      )}
    </button>
  );
};

export default DarkModeToggle;
