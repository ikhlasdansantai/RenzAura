import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface SidebarMenuProps {
  icon: any;
  path: string;
  children: string;
  isActive: boolean;
}

export default function SidebarMenus({ icon, path, children, isActive }: SidebarMenuProps): JSX.Element {
  if (path === "") {
    const [darkMode, toggleDarkMode] = useState(false);

    const handleDarkMode = () => {
      toggleDarkMode(!darkMode);
      document.querySelector("html")?.classList.toggle("dark");
    };

    return (
      <div className={`${isActive ? "" : ""} flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
        <div className="flex items-center">
          <Icon
            icon={icon}
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          />
          <span className="ml-3">{children}</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="darkModeToggle" className="sr-only peer" checked={darkMode} onChange={handleDarkMode} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    );
  }

  return (
    <Link to={`${path}`}>
      <div className={`${isActive ? "" : ""} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
        <Icon
          icon={icon}
          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        />
        <span className="ml-3">{children}</span>
      </div>
    </Link>
  );
}
