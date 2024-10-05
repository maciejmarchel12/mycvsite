'use client';

import Link from "next/link";
import {useState, useEffect} from "react";

export const Header:React.FC = () => {
    const [theme, setTheme] = useState("retro");

    // Function to toggle between themes
    const toggleTheme = () => {
        const newTheme = theme === "retro" ? "coffee" : "retro";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    // Sync theme with local storage (optional)
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "retro";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className="navbar bg-base-300">
          <div className="navbar-start px-3">
            <Link href="/" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all">
              Home
            </Link>
          </div>
    
          <div className="navbar-end">
            <div className="px-3">
              <Link href="/projects" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all">
                Projects
              </Link>
            </div>
            <div className="px-3">
              <Link href="/contact" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all">
                Contact
              </Link>
            </div>
    
            {/* Theme Toggle Button */}
            <div className="px-3">
              <button className="btn btn-primary" onClick={toggleTheme}>
                Switch to {theme === "retro" ? "Coffee" : "Retro"} Theme
              </button>
            </div>
          </div>
        </header>
      );
    };
