import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useWindowScroll } from "react-use";
import config from "../config";

const navLinks = [
    { href: "#home", label: "home" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
    { href: "#contact", label: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("#home");
    const [showNav, setShowNav] = useState(true);
    const { y } = useWindowScroll();
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (y > lastScrollY.current && y > 80) setShowNav(false);
        else setShowNav(true);
        lastScrollY.current = y;
    }, [y]);

    useEffect(() => {
        const sections = navLinks.map((l) => document.querySelector(l.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActive(`#${entry.target.id}`);
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
        );
        sections.forEach((s) => s && observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleClick = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-72 bg-cream z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-6 flex flex-col gap-1">
                    <button
                        className="self-end text-[var(--brown)] mb-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleClick}
                            className={`scrap-nav-link text-2xl py-2 ${active === link.href ? "active" : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <nav
                className={`scrap-nav fixed w-full z-40 px-5 py-3 transition-transform duration-300 ${
                    showNav ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <a href="#home" className="font-marker text-xl text-[var(--marker-red)]">
                        {config.social.abbreviatedName}
                    </a>

                    <div className="hidden md:flex gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleClick}
                                className={`scrap-nav-link ${active === link.href ? "active" : ""}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-[var(--brown)]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            <div className="h-14" />
        </>
    );
}
