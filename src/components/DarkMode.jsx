import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import config from "../config";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.setAttribute("content", config.theme.backgroundDark);
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta)
                meta.setAttribute("content", config.theme.backgroundLight);
        }
    }, [isDark]);

    return (
    <button
        className="text-black dark:text-white"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle Dark Mode"
    >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
);
}

export default DarkMode;
