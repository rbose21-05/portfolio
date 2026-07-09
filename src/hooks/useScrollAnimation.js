import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        const scrollElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        scrollElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
