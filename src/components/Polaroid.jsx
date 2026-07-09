const Polaroid = ({
    src,
    alt,
    caption,
    rotation = 0,
    className = "",
    tape = true,
    tapePosition = "top",
    children,
}) => (
    <div
        className={`polaroid ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
    >
        {tape && <div className={`tape tape-${tapePosition}`} />}
        <div className="polaroid-img-wrap">
            {children ? (
                children
            ) : (
                <img src={src} alt={alt} className="polaroid-img" />
            )}
        </div>
        {caption && <p className="polaroid-caption">{caption}</p>}
    </div>
);

export default Polaroid;
