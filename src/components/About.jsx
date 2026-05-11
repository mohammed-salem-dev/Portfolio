import { personalInfo, aboutText } from "../data/portfolioData";

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "3", label: "Research Papers" },
  { number: "4+", label: "Projects Shipped" },
  { number: "1", label: "Internship" },
];

function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">Background</span>
          <h2 id="about-heading">About Me</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(340px,100%),1fr))",
            gap: "var(--space-12)",
            alignItems: "start",
          }}
        >
          <div className="reveal">
            {personalInfo.profileImage && (
              <div style={{ marginBottom: "var(--space-8)" }}>
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} profile`}
                  className="profile-image"
                  width="220"
                  height="220"
                  loading="lazy"
                />
              </div>
            )}
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                maxWidth: "65ch",
              }}
            >
              {aboutText}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-4)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="about-stat reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="about-stat-number">{s.number}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
