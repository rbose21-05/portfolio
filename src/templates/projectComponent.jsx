import { useEffect, useCallback } from "react";
import { ExternalLink, Github } from "lucide-react";
import "@fontsource/montserrat";
import "./animation.css";

const ProjectComponent = ({
    Image,
    Number,
    Title,
    GithubLink,
    LiveLink,
    Tags = [],
    Text1,
    Text2,
    reverse = false,
}) => {
    useEffect(() => {
        const scrollElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        scrollElements.forEach((el) => observer.observe(el));
        return () => scrollElements.forEach((el) => observer.unobserve(el));
    }, []);

    const openLink = useCallback((url) => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    return (
        <div
            className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-start gap-10 w-full max-w-5xl mx-auto`}
        >
            <div
                className="relative group cursor-pointer flex-shrink-0"
                onClick={() => openLink(GithubLink || LiveLink)}
                data-animate-on-scroll
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                    className="relative h-72 md:h-80 w-full md:w-[420px] object-cover rounded-2xl shadow-card dark:shadow-card-dark border border-slate-200/60 dark:border-slate-700/60 transition-transform duration-500 group-hover:scale-[1.02]"
                    src={Image}
                    alt={Title}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-medium flex items-center gap-2">
                        <ExternalLink size={16} /> View Project
                    </span>
                </div>
            </div>

            <div
                className="flex-1 flex flex-col items-start justify-center min-w-[280px] max-w-full"
                data-animate-on-scroll
            >
                <div className="flex flex-col items-start gap-5">
                    <span className="text-5xl font-extrabold text-brand-600/30 dark:text-brand-400/40 font-mono">
                        {Number}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                        {Title}
                    </h3>

                    {Tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {Tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="text-base leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
                        <p>{Text1}</p>
                        <p>{Text2}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {GithubLink && (
                            <button
                                onClick={() => openLink(GithubLink)}
                                className="btn-primary flex items-center gap-2 text-sm"
                            >
                                <Github size={18} />
                                View Code
                            </button>
                        )}
                        {LiveLink && (
                            <button
                                onClick={() => openLink(LiveLink)}
                                className="btn-outline flex items-center gap-2 text-sm"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
