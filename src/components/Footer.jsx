import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import config from "../config";

function Footer() {
    return (
        <footer className="scrap-footer py-8 px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
                <p className="font-hand text-2xl text-[var(--cream)]">
                    {config.meta.author}
                </p>
                <div className="flex gap-5">
                    {config.social.github && (
                        <a
                            href={config.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-2xl text-[var(--cream)] hover:text-[var(--mustard)] transition-colors"
                        >
                            <FaGithub />
                        </a>
                    )}
                    {config.social.linkedin && (
                        <a
                            href={config.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-2xl text-[var(--cream)] hover:text-[var(--mustard)] transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                    )}
                    {config.social.email && (
                        <a
                            href={config.social.email}
                            aria-label="Email"
                            className="text-2xl text-[var(--cream)] hover:text-[var(--mustard)] transition-colors"
                        >
                            <FaEnvelope />
                        </a>
                    )}
                </div>
                <p className="text-sm text-[var(--cream-dark)] text-center opacity-80">
                    &copy; {new Date().getFullYear()} · {config.tagline}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
