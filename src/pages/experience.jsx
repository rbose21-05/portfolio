import { useState } from "react";
import config from "../config";
import ScrapbookHeader from "../components/ScrapbookHeader";

const VISIBLE_BULLETS = 2;

const ExperienceCard = ({ experience, index }) => {
    const [expanded, setExpanded] = useState(false);
    const hasMore = experience.points.length > VISIBLE_BULLETS;
    const visiblePoints = expanded
        ? experience.points
        : experience.points.slice(0, VISIBLE_BULLETS);

    return (
        <div
            className={`exp-card ${index % 2 === 0 ? "exp-card-shift-right" : "exp-card-shift-left"}`}
            data-animate-on-scroll
            style={{
                "--item-rot": `${index % 2 === 0 ? -0.8 : 0.8}deg`,
                "--stagger": `${index * 80}ms`,
            }}
        >
            <div className="exp-date">{experience.date}</div>
            <h3 className="exp-title">{experience.title}</h3>
            <p className="exp-company">{experience.company_name}</p>
            <ul className="space-y-1.5 list-disc list-inside text-sm text-[var(--ink-muted)] leading-relaxed">
                {visiblePoints.map((point, j) => (
                    <li key={j}>{point}</li>
                ))}
            </ul>
            {hasMore && (
                <button
                    type="button"
                    className="exp-toggle font-hand text-base text-[var(--marker-red)] mt-2 hover:underline"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "show less ↑" : `+ ${experience.points.length - VISIBLE_BULLETS} more`}
                </button>
            )}
        </div>
    );
};

function Experience() {
    return (
        <section className="bg-sage section-pad">
            <div className="max-w-3xl mx-auto">
                <ScrapbookHeader
                    title="work experience"
                    subtitle={`${config.education.degree} · ${config.education.gpa}`}
                />
                <div className="space-y-0">
                    {config.experiences.map((exp, i) => (
                        <ExperienceCard key={i} experience={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
