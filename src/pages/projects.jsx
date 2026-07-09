import { ExternalLink, Github } from "lucide-react";
import ProjectCover from "../components/ProjectCover";
import config from "../config";
import ScrapbookHeader from "../components/ScrapbookHeader";

const ProjectCard = ({ project, index }) => (
    <div
        className="max-w-3xl mx-auto"
        data-animate-on-scroll
        style={{
            "--item-rot": `${index % 2 === 0 ? -0.4 : 0.4}deg`,
            "--stagger": `${index * 90}ms`,
        }}
    >
        <div className="torn-paper torn-edge flex flex-col sm:flex-row gap-6 items-start">
            <div className="project-icon-card flex-shrink-0 mx-auto sm:mx-0">
                <ProjectCover
                    icon={project.icon}
                    color={project.color}
                    title={project.title}
                    compact
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <div className="scrap-project-num !text-4xl !mb-0">
                        {project.number}
                    </div>
                    {project.research && (
                        <span className="research-badge">Research · Team</span>
                    )}
                    {project.role && (
                        <span className="role-badge">{project.role}</span>
                    )}
                </div>

                <h3 className="scrap-project-title">{project.title}</h3>

                {project.metric && (
                    <p className="project-metric">{project.metric}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-3 mt-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="scrap-tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-2">
                    {project.text1}
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                    {project.text2}
                </p>

                <div className="flex flex-wrap gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-scrap-outline text-base !py-2 !px-4"
                        >
                            <Github size={16} />
                            View Code
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-scrap text-base !py-2 !px-4 inline-flex items-center gap-2"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => (
    <section className="bg-cream section-pad">
        <div className="max-w-4xl mx-auto">
            <ScrapbookHeader
                title="my projects"
                subtitle="Built & contributed — each links to source on GitHub."
            />
            <div className="flex flex-col gap-10">
                {config.projects.map((project, index) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
