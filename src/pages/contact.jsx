import {
    FaEnvelope,
    FaPhoneAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import config from "../config";
import ScrapbookHeader from "../components/ScrapbookHeader";

function Contact() {
    const cards = [
        {
            href: `mailto:${config.contact.email}`,
            icon: FaEnvelope,
            label: "Email",
            value: config.contact.email,
            rot: -3,
        },
        {
            href: `tel:${config.contact.phone.replace(/\D/g, "")}`,
            icon: FaPhoneAlt,
            label: "Phone",
            value: config.contact.phone,
            rot: 2,
        },
        {
            href: config.contact.linkedin,
            icon: FaLinkedin,
            label: "LinkedIn",
            value: config.contact.name,
            rot: -2,
            external: true,
        },
        {
            href: config.contact.github,
            icon: FaGithub,
            label: "GitHub",
            value: "@rbose21-05",
            rot: 4,
            external: true,
        },
    ];

    return (
        <section className="bg-cream section-pad">
            <div className="max-w-4xl mx-auto">
                <ScrapbookHeader
                    title="let's connect"
                    subtitle={config.contact.description}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <a
                            key={card.label}
                            href={card.href}
                            target={card.external ? "_blank" : undefined}
                            rel={
                                card.external
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="contact-scrap"
                            data-animate-on-scroll
                            style={{
                                "--item-rot": `${card.rot}deg`,
                                "--stagger": `${i * 70}ms`,
                            }}
                        >
                            <div className="tape tape-top" />
                            <card.icon className="text-3xl text-[var(--marker-red)] mx-auto mb-3" />
                            <h3 className="font-hand text-xl font-bold text-[var(--brown)] mb-1">
                                {card.label}
                            </h3>
                            <p className="text-sm text-[var(--ink-muted)] break-all">
                                {card.value}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
