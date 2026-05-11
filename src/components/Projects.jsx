import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects } from "../data/portfolioData";

/* ── Icons ── */
const ExternalIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const ImagesIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const ChevronUpIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
const ZoomIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const CloseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── Lightbox ────────────────────────────────────────────────── */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [animDir, setAnimDir] = useState(null);

  // ── Lock body scroll while lightbox is open ──────────────
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const go = (dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + images.length) % images.length);
      setAnimDir(null);
    }, 180);
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKey = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  const img = images[current];

  return createPortal(
    <>
      <style>{`
        @keyframes lb-in {
          from { opacity:0; transform:scale(0.93) translateY(12px); }
          to   { opacity:1; transform:scale(1)    translateY(0);    }
        }
        @keyframes lb-slide-left  { from { opacity:1; transform:translateX(0);    } to { opacity:0; transform:translateX(-40px); } }
        @keyframes lb-slide-right { from { opacity:1; transform:translateX(0);    } to { opacity:0; transform:translateX(40px);  } }
        @keyframes lb-enter-right { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0);     } }
        @keyframes lb-enter-left  { from { opacity:0; transform:translateX(-40px);} to { opacity:1; transform:translateX(0);     } }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleBackdrop}
        onKeyDown={handleKey}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(8,7,5,0.92)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-4)",
          animation: "lb-in 0.25s var(--ease-out-expo) both",
        }}
        autoFocus
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          style={{
            position: "absolute",
            top: "var(--space-5)",
            right: "var(--space-5)",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "var(--radius-full)",
            color: "#fff",
            cursor: "pointer",
            transition: "background var(--transition-fast)",
            zIndex: 10,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
          }
        >
          <CloseIcon />
        </button>

        {/* Prev arrow */}
        {images.length > 1 && (
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "var(--space-5)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "2.75rem",
              height: "2.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--radius-full)",
              color: "#fff",
              cursor: "pointer",
              transition: "background var(--transition-fast)",
              zIndex: 10,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
            }
          >
            <ArrowLeftIcon />
          </button>
        )}

        {/* Image */}
        <div
          style={{
            maxWidth: "min(90vw, 1100px)",
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-4)",
          }}
        >
          <img
            key={current}
            src={img.path}
            alt={img.description || `Screenshot ${current + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              objectFit: "contain",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
              animation:
                animDir === -1
                  ? "lb-slide-left 0.18s ease both, lb-enter-right 0.22s 0.18s ease both"
                  : animDir === 1
                    ? "lb-slide-right 0.18s ease both, lb-enter-left 0.22s 0.18s ease both"
                    : "lb-in 0.28s var(--ease-out-expo) both",
            }}
          />

          {/* Caption + counter */}
          <div style={{ textAlign: "center" }}>
            {img.description && (
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "var(--text-sm)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {img.description}
              </p>
            )}
            {images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--space-2)",
                }}
              >
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    style={{
                      width: idx === current ? "1.5rem" : "0.5rem",
                      height: "0.5rem",
                      borderRadius: "var(--radius-full)",
                      background:
                        idx === current
                          ? "var(--color-primary)"
                          : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.25s var(--ease-out-expo)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Next arrow */}
        {images.length > 1 && (
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "var(--space-5)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "2.75rem",
              height: "2.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--radius-full)",
              color: "#fff",
              cursor: "pointer",
              transition: "background var(--transition-fast)",
              zIndex: 10,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
            }
          >
            <ArrowRightIcon />
          </button>
        )}
      </div>
    </>,
    document.body, // 👈 this is the portal target
  );
}

/* ── Screenshot Thumbnail ────────────────────────────────────── */
function ScreenshotThumb({ shot, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`screenshot-card${shot.type === "mobile" ? " screenshot-card-mobile" : ""}`}
      style={{ position: "relative", cursor: "zoom-in", overflow: "hidden" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${shot.description || "screenshot"} fullscreen`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {shot.path ? (
        <img
          src={shot.path}
          alt={shot.description || "Screenshot"}
          loading="lazy"
          style={{
            transition: "transform 0.4s var(--ease-out-expo)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            display: "block",
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "450px",
            objectFit: "contain",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.querySelector(
              ".placeholder-text",
            ).style.display = "block";
          }}
        />
      ) : null}

      {/* Placeholder */}
      <div
        className="placeholder-text"
        style={{ display: shot.path ? "none" : "block" }}
      >
        <p>{shot.description || "Screenshot"}</p>
        {shot.path && <small>{shot.path}</small>}
      </div>

      {/* Zoom overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14,13,11,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s var(--ease-out-expo)",
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "3rem",
            height: "3rem",
            background: "rgba(201,168,76,0.15)",
            border: "1.5px solid rgba(201,168,76,0.6)",
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-primary)",
            transform: hovered ? "scale(1)" : "scale(0.7)",
            transition: "transform 0.3s var(--ease-out-expo)",
            backdropFilter: "blur(4px)",
          }}
        >
          <ZoomIcon />
        </div>
      </div>
    </div>
  );
}

/* ── Projects ────────────────────────────────────────────────── */
function Projects() {
  const [openScreenshots, setOpenScreenshots] = useState({});
  const [lightbox, setLightbox] = useState(null); // { screenshots, index }

  const toggle = (id) =>
    setOpenScreenshots((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">Work</span>
          <h2 id="projects-heading">Projects</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-5)",
            maxWidth: "var(--content-default)",
          }}
        >
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="project-card reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="project-card-accent" aria-hidden="true" />
              <div className="project-card-body">
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "var(--space-4)",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-3)",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          fontSize: "var(--text-lg)",
                          color: "var(--color-text)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span className="badge">{project.year}</span>
                    </div>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.7,
                        maxWidth: "60ch",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                      flex: "0 1 auto",
                      alignSelf: "flex-start",
                      maxWidth: "260px",
                    }}
                  >
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="tech-badge-indigo">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--space-2)",
                    marginTop: "var(--space-4)",
                  }}
                >
                  {project.screenshots?.length > 0 && (
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => toggle(project.id)}
                      aria-expanded={!!openScreenshots[project.id]}
                    >
                      {openScreenshots[project.id] ? (
                        <ChevronUpIcon />
                      ) : (
                        <ImagesIcon />
                      )}
                      {openScreenshots[project.id]
                        ? "Hide Screenshots"
                        : "Screenshots"}
                    </button>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      <GithubIcon /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>

                {/* Screenshots grid */}
                {openScreenshots[project.id] &&
                  project.screenshots?.length > 0 && (
                    <div
                      style={{
                        marginTop: "var(--space-5)",
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                        gap: "var(--space-4)",
                      }}
                    >
                      {project.screenshots.map((shot, k) => (
                        <ScreenshotThumb
                          key={k}
                          shot={shot}
                          onClick={() =>
                            setLightbox({
                              screenshots: project.screenshots,
                              index: k,
                            })
                          }
                        />
                      ))}
                    </div>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.screenshots}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

export default Projects;
