import React, { useRef } from "react";
import "./TiltCard.css";

const TiltCard = ({ children }) => {
  const tiltRef = useRef(null);
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = tiltRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    innerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      ref={tiltRef}
      className="tilt-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ perspective: "1000px", pointerEvents: "auto" }}
    >
      <div
        ref={innerRef}
        className="tilt-card-inner transition-transform duration-300 ease-in-out will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          pointerEvents: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
