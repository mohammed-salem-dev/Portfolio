import { useState } from "react";
import { research } from "../data/portfolioData";

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
const CertIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

function Research() {
  const [activeCert, setActiveCert] = useState(null);
  return (
    <section
      id="research"
      className="section-padding"
      aria-labelledby="research-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">Publications</span>
          <h2 id="research-heading">Research</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
            maxWidth: "var(--content-default)",
          }}
        >
          {research.map((paper, i) => (
            <article key={i} className="research-card reveal">
              <span className="research-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <span
                  className={`badge ${paper.status === "Published" ? "badge-published" : "badge-pending"}`}
                >
                  {paper.status}
                </span>
                <span className="badge">{paper.year}</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "var(--text-base)",
                  letterSpacing: "-0.01em",
                  color: "var(--color-text)",
                  marginBottom: "var(--space-2)",
                  lineHeight: 1.45,
                  maxWidth: "88%",
                }}
              >
                {paper.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  marginBottom: "var(--space-4)",
                }}
              >
                {paper.conference}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                }}
              >
                {paper.certificateImage && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setActiveCert(activeCert === i ? null : i)}
                    aria-expanded={activeCert === i}
                  >
                    <CertIcon />
                    {activeCert === i ? "Hide Certificate" : "View Certificate"}
                  </button>
                )}
                {paper.publicationLink && (
                  <a
                    href={paper.publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalIcon /> View Publication
                  </a>
                )}
              </div>
              {activeCert === i && paper.certificateImage && (
                <div
                  style={{ marginTop: "var(--space-5)" }}
                  className="certificate-container"
                >
                  <img
                    src={paper.certificateImage}
                    alt={`Certificate: ${paper.title}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div class="placeholder-text"><p>Certificate: ${paper.certificateImage}</p></div>`;
                    }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Research;
