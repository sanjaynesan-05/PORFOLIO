import { useEffect, useRef, useState } from "react";
import "./GridMotion.css";

const GridMotion = ({
  items = [],
  gradientColor = "black",
  title = "Design Showcase",
  subtitle = "Posters • Logos • Thumbnails",
}) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = isMobile ? 15 : 28;
  const columns = isMobile ? 5 : 7;
  const rows = Math.ceil(totalItems / columns);

  const displayItems = [
    ...items,
    ...Array(Math.max(0, totalItems - items.length)).fill(null),
  ].slice(0, totalItems);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        {/* Header */}
        <div className="gridMotion-header">
          <h1 className="gridMotion-title">{title}</h1>
          <p className="gridMotion-subtitle">{subtitle}</p>
        </div>

        {/* Desktop Animated Grid */}
        {!isMobile ? (
          <div className="gridMotion-container">
            {[...Array(rows)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className={`row ${
                  rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
                }`}
                ref={(el) => (rowRefs.current[rowIndex] = el)}
                style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
              >
                {[...Array(columns)].map((_, colIndex) => {
                  const index = rowIndex * columns + colIndex;
                  const content = displayItems[index];

                  return (
                    <div key={colIndex} className="row__item">
                      <div className="tile-inner">
                        {typeof content === "string" &&
                        (content.startsWith("http") ||
                          content.includes("/assets/")) ? (
                          <div
                            className="tile-img"
                            style={{ backgroundImage: `url(${content})` }}
                          />
                        ) : (
                          <div className="tile-content">
                            {content ?? "•"}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          // Mobile Static Grid
          <div className="mobile-static-grid">
            {displayItems.map((content, i) => (
              <div className="mobile-tile" key={i}>
                <div className="tile-inner">
                  {typeof content === "string" &&
                  (content.startsWith("http") || content.includes("/assets/")) ? (
                    <div
                      className="tile-img"
                      style={{ backgroundImage: `url(${content})` }}
                    />
                  ) : (
                    <div className="tile-content">{content ?? "•"}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="fullview" />
      </section>
    </div>
  );
};

export default GridMotion;
