import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">Career</span>
          <h2 id="experience-heading">Experience</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>
        <div
          className="timeline"
          style={{ maxWidth: "var(--content-default)" }}
        >
          {experiences.map((exp, i) => (
            <article key={i} className="timeline-item reveal">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-3)",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "var(--text-lg)",
                      color: "var(--color-text)",
                      letterSpacing: "-0.01em",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "var(--space-1)",
                  }}
                >
                  <span className="badge">{exp.period}</span>
                  {exp.location && (
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-faint)",
                      }}
                    >
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>
              {exp.description && (
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {exp.description}
                </p>
              )}
              {exp.responsibilities?.length > 0 && (
                <ul
                  style={{
                    marginTop: "var(--space-3)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-2)",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {exp.responsibilities.map((r, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-muted)",
                        paddingLeft: "var(--space-5)",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--color-primary)",
                          fontWeight: 700,
                        }}
                      >
                        ›
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              )}
              {exp.technologies?.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--space-2)",
                    marginTop: "var(--space-4)",
                  }}
                >
                  {exp.technologies.map((tech, k) => (
                    <span key={k} className="tech-badge-indigo">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
