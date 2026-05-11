import { skillCategories } from "../data/portfolioData";

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">Expertise</span>
          <h2 id="skills-heading">Skills</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(min(280px,100%),1fr))",
            gap: "var(--space-5)",
          }}
        >
          {skillCategories.map((cat, i) => (
            <article
              key={i}
              className="card reveal"
              style={{
                padding: "var(--space-6)",
                animationDelay: `${i * 50}ms`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {cat.icon && (
                  <span
                    style={{ fontSize: "1.4rem", lineHeight: 1 }}
                    role="img"
                    aria-hidden="true"
                  >
                    {cat.icon}
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    color: "var(--color-text)",
                  }}
                >
                  {cat.name}
                </h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
