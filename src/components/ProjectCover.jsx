import {
    Hand,
    BookOpen,
    Bell,
    Leaf,
    LayoutGrid,
    Brain,
    Bot,
    Activity,
} from "lucide-react";

const ICONS = {
    hand: Hand,
    book: BookOpen,
    bell: Bell,
    leaf: Leaf,
    layout: LayoutGrid,
    brain: Brain,
    robot: Bot,
    pulse: Activity,
};

const ProjectCover = ({ icon, color, title, compact = false }) => {
    const Icon = ICONS[icon] || LayoutGrid;

    return (
        <div
            className={`project-cover ${compact ? "project-cover-compact" : ""}`}
            style={{ background: color }}
            aria-label={title}
        >
            <div className="project-cover-pattern" />
            <Icon
                className="project-cover-icon"
                size={compact ? 32 : 52}
                strokeWidth={1.5}
            />
            {!compact && (
                <span className="project-cover-label">{title}</span>
            )}
        </div>
    );
};

export default ProjectCover;
