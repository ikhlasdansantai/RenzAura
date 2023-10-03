import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface SidebarMenuProps {
  icon: any;
  path: string;
  children: string;
  onClick: (newState: boolean) => void;
}

export default function SidebarMenus({ icon, path, children, onClick }: SidebarMenuProps): JSX.Element {
  const location = useLocation();
  const isNavMatching = `${path}` === location.pathname;
  const [darkMode, toggleDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "enabled") {
      toggleDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    } else {
      toggleDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  });

  if (path === "") {
    const handleDarkMode = () => {
      const newDarkMode = !darkMode;
      toggleDarkMode(newDarkMode);
      document.querySelector("html")?.classList.toggle("dark");
      localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");
    };

    return (
      <div className={`flex justify-between p-2 text-gray-900 rounded-lg dark:text-gray-500 cursor-pointer group`}>
        <div className="flex items-center">
          <Icon icon={icon} className="w-5 h-5 icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21" />
          <span className="ml-3">{children}</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="darkModeToggle" className="sr-only peer" checked={darkMode} onChange={handleDarkMode} aria-label="DarkmodeButton" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    );
  }

  const handleStateChange = () => {
    onClick(true);
  };

  return (
    <Link to={`${path}`} onClick={() => handleStateChange()}>
      <div
        className={`${
          isNavMatching ? "bg-gray-100 text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700" : ""
        } flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group`}
      >
        <Icon icon={icon} className={`${path === location.pathname ? "dark:text-white dark:group-hover:text-white" : "icon"} w-5 h-5 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21" />
        <span className={`ml-3`}>{children}</span>
      </div>
    </Link>
  );
}
