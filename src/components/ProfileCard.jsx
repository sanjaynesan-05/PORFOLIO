import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(145,94,255,0.15) 0%, rgba(145,94,255,0.05) 60%, transparent 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg, rgba(96,73,110,0.3) 0%, rgba(113,196,255,0.2) 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 500,
  INITIAL_DURATION: 1000,
  INITIAL_X_OFFSET: 50,
  INITIAL_Y_OFFSET: 50,
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, p = 3) => parseFloat(v.toFixed(p));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const adjust = (v, a, b, c, d) => round(c + ((d - c) * (v - a)) / (b - a));

const ProfileCard = ({
  avatarUrl,
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Sanjay Nesan J",
  title = "Full Stack Developer",
  handle = "sanjuu",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const updateTransform = useCallback((x, y, card, wrap) => {
    const w = card.clientWidth;
    const h = card.clientHeight;
    const px = clamp((100 / w) * x);
    const py = clamp((100 / h) * y);
    const cx = px - 50;
    const cy = py - 50;

    const vars = {
      "--pointer-x": `${px}%`,
      "--pointer-y": `${py}%`,
      "--background-x": `${adjust(px, 0, 100, 45, 55)}%`,
      "--background-y": `${adjust(py, 0, 100, 45, 55)}%`,
      "--rotate-x": `${round(-(cx / 6))}deg`,
      "--rotate-y": `${round(cy / 6)}deg`,
    };

    Object.entries(vars).forEach(([k, v]) => wrap.style.setProperty(k, v));
  }, []);

  const animateToCenter = useCallback((x, y, card, wrap) => {
    const start = performance.now();
    const endX = wrap.clientWidth / 2;
    const endY = wrap.clientHeight / 2;

    const loop = (now) => {
      const t = clamp((now - start) / ANIMATION_CONFIG.SMOOTH_DURATION);
      const easeT = ease(t);
      const nx = adjust(easeT, 0, 1, x, endX);
      const ny = adjust(easeT, 0, 1, y, endY);
      updateTransform(nx, ny, card, wrap);
      if (t < 1) requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [updateTransform]);

  useEffect(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      updateTransform(e.clientX - rect.left, e.clientY - rect.top, card, wrap);
    };

    const handleEnter = () => wrap.classList.add("active");
    const handleLeave = (e) => {
      animateToCenter(e.offsetX, e.offsetY, card, wrap);
      wrap.classList.remove("active");
    };

    card.addEventListener("pointerenter", handleEnter);
    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);

    const startX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const startY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    updateTransform(startX, startY, card, wrap);
    animateToCenter(startX, startY, card, wrap);

    return () => {
      card.removeEventListener("pointerenter", handleEnter);
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
    };
  }, [enableTilt, updateTransform, animateToCenter]);

  const cardStyle = useMemo(() => ({
    "--icon": iconUrl ? `url(${iconUrl})` : "none",
    "--grain": grainUrl ? `url(${grainUrl})` : "none",
    "--behind-gradient": showBehindGradient ? behindGradient ?? DEFAULT_BEHIND_GRADIENT : "none",
    "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
  }), [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]);

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name} avatar`}
              width="300"
              height="300"
              loading="eager"
              fetchpriority="high"
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name} mini avatar`}
                      width="64"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={() => onContactClick?.()}
                  type="button"
                  aria-label={`Contact ${name}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);
