import config from "../config";
import Typewriter from "typewriter-effect";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
    { href: "#projects", label: "see my projects →" },
    { href: "#experience", label: "work experience →" },
];

const Home = () => (
    <section className="hero-landing bg-cream min-h-screen relative overflow-hidden">
        <div className="hero-scrap hero-scrap-1" aria-hidden="true" />
        <div className="hero-scrap hero-scrap-2" aria-hidden="true" />

        <div className="section-pad pb-16 max-w-3xl mx-auto w-full relative z-10 text-center">
            <div data-animate-on-scroll>
                <span className="hero-status">
                    <span className="hero-status-dot" />
                    open to opportunities
                </span>
            </div>

            <div data-animate-on-scroll className="mt-6">
                <p className="hero-name">
                    <span className="hero-name-line">
                        {config.home.firstName}
                    </span>
                    <span className="hero-name-line hero-name-accent">
                        {config.home.lastName}
                    </span>
                </p>
                <h1 className="marker-title hero-title">portfolio</h1>
                <div className="hero-underline mx-auto" aria-hidden="true" />
            </div>

            <div
                className="hero-school-tag mt-6 inline-block"
                data-animate-on-scroll
            >
                <span className="tape tape-top" style={{ width: 56 }} />
                {config.home.school}
            </div>

            <p
                className="hero-tagline mt-5"
                data-animate-on-scroll
            >
                {config.home.tagline}
            </p>

            <div
                className="hero-currently sticky-note sticky-note-pink mt-6 mx-auto max-w-sm text-left"
                data-animate-on-scroll
                style={{ "--rot": "-2deg" }}
            >
                <p className="font-marker text-sm text-[var(--marker-red)] mb-2">
                    currently
                </p>
                <ul className="space-y-1">
                    {config.home.currently.map((item) => (
                        <li
                            key={item}
                            className="font-hand text-lg text-[var(--brown)] leading-snug"
                        >
                            → {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="typewriter-scrap mt-6 min-h-[2.5rem]"
                data-animate-on-scroll
            >
                <Typewriter
                    options={{
                        strings: config.home.typewriter,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div
                className="flex flex-wrap justify-center gap-4 mt-10"
                data-animate-on-scroll
            >
                {[
                    { val: "4.0", label: "Major GPA", cls: "" },
                    { val: "2028", label: "Graduation", cls: "sticky-note-green" },
                    { val: "6+", label: "Projects", cls: "sticky-note-pink" },
                ].map((s, i) => (
                    <div
                        key={s.label}
                        className={`sticky-note ${s.cls} text-center min-w-[110px] hero-stat`}
                        style={{
                            "--rot": `${i === 0 ? -3 : i === 2 ? 4 : 2}deg`,
                        }}
                    >
                        <div className="font-marker text-3xl text-[var(--marker-red)]">
                            {s.val}
                        </div>
                        <div className="font-hand text-lg text-[var(--brown)]">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
                data-animate-on-scroll
            >
                <button
                    onClick={() => (window.location.href = "/#contact")}
                    className="btn-scrap w-full sm:w-auto"
                >
                    {config.home.buttonLabel}
                </button>
                <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="Rupsa_Bose_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-scrap-outline w-full sm:w-auto justify-center"
                >
                    <Download size={18} />
                    Resume
                </a>
            </div>

            <div
                className="flex flex-col items-center gap-5 mt-8"
                data-animate-on-scroll
            >
                <div className="flex gap-3">
                    {[
                        { href: config.social.github, icon: Github, label: "GitHub" },
                        { href: config.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                        { href: config.social.email, icon: Mail, label: "Email" },
                    ].map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={label}
                            className="hero-social-btn"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {quickLinks.map((link) => (
                        <a key={link.href} href={link.href} className="hero-quick-link">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-14 max-w-2xl mx-auto" data-animate-on-scroll>
                <div
                    className="bg-lined torn-edge p-8 md:p-10 shadow-lg relative text-left"
                    style={{ transform: "rotate(-0.5deg)" }}
                >
                    <div className="tape tape-top-left" />
                    <div className="tape tape-top-right" />
                    <h2 className="hand-title mb-4">{config.home.whoIAm.title ?? "who i am"}</h2>
                    {config.home.whoIAm.paragraphs.map((para, i) => (
                        <p
                            key={i}
                            className={`text-lg leading-relaxed text-[var(--ink)] ${
                                i < config.home.whoIAm.paragraphs.length - 1
                                    ? "mb-4"
                                    : ""
                            }`}
                        >
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            <a
                href="#experience"
                className="hero-scroll-cue"
                aria-label="Scroll to experience"
            >
                <span className="font-hand text-lg text-[var(--brown-light)]">
                    scroll down
                </span>
                <ArrowDown size={20} className="text-[var(--marker-red)]" />
            </a>
        </div>
    </section>
);

export default Home;
