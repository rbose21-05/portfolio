import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
        >
            <span className="font-hand text-sm text-[var(--brown)]">top</span>
            <ArrowUp size={16} className="text-[var(--marker-red)]" />
        </a>
    );
}
