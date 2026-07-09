const ScrapbookHeader = ({ label, title, subtitle, marker = true }) => (
    <div className="scrapbook-header" data-animate-on-scroll>
        {label && <span className="scrapbook-label">{label}</span>}
        <h2 className={marker ? "marker-title" : "hand-title"}>{title}</h2>
        {marker && <div className="header-squiggle" aria-hidden="true" />}
        {subtitle && <p className="scrapbook-subtitle">{subtitle}</p>}
    </div>
);

export default ScrapbookHeader;
