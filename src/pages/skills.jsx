import { useEffect, useState } from "react";
import config from "../config";
import ScrapbookHeader from "../components/ScrapbookHeader";

const CATEGORY_STYLE = [
    "skill-cat-mustard",
    "skill-cat-sage",
    "skill-cat-lavender",
    "skill-cat-blue",
    "skill-cat-pink",
];

const SkillsStatus = () => {
    const lines = config.techStackPage.statusLines ?? [];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (lines.length < 2) return undefined;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % lines.length);
        }, 3200);
        return () => clearInterval(id);
    }, [lines.length]);

    if (!lines.length) return null;

    return (
        <div
            className="skills-status sticky-note sticky-note-pink mb-10 mx-auto max-w-md"
            data-animate-on-scroll
            style={{ "--rot": "-2deg" }}
        >
            <p className="font-marker text-xs text-[var(--marker-red)] mb-1">
                dev log
            </p>
            <p className="font-hand text-xl text-[var(--brown)] leading-snug min-h-[1.75rem]">
                → {lines[index]}
            </p>
        </div>
    );
};

function Skills() {
    return (
        <section className="bg-newspaper section-pad relative">
            <div className="max-w-5xl mx-auto">
                <ScrapbookHeader
                    title="skills"
                    subtitle={config.techStackPage.subtitle}
                />

                <SkillsStatus />

                <div className="grid md:grid-cols-2 gap-6">
                    {config.techStackPage.categories.map((cat, ci) => (
                        <div
                            key={cat.label}
                            className={`skill-category ${CATEGORY_STYLE[ci % CATEGORY_STYLE.length]}`}
                            data-animate-on-scroll
                            style={{
                                "--cat-rot": `${ci % 2 === 0 ? -0.6 : 0.6}deg`,
                                "--stagger": `${ci * 100}ms`,
                            }}
                        >
                            <div className="tape tape-top-left" />
                            <h3 className="font-hand text-2xl font-bold text-[var(--brown)] mb-3">
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((tech, ti) => (
                                    <span
                                        key={tech}
                                        className="skill-tag"
                                        style={{
                                            "--tag-rot": `${((ci + ti) % 5) - 2}deg`,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
