const SectionHeader = ({ label, title, subtitle, splitTitle }) => (
    <div
        className="text-center space-y-4 opacity-0 animate-fade-in-top [&.animate]:opacity-100"
        data-animate-on-scroll
    >
        {label && (
            <span className="section-label">{label}</span>
        )}
        {splitTitle ? (
            <div className="flex flex-row items-center justify-center gap-3 md:gap-4 flex-wrap">
                {splitTitle.map((word, i) => (
                    <h2 key={i} className="section-title text-gradient">
                        {word}
                    </h2>
                ))}
            </div>
        ) : (
            title && <h2 className="section-title text-gradient">{title}</h2>
        )}
        {subtitle && (
            <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
        )}
    </div>
);

export default SectionHeader;
