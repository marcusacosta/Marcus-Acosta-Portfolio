const si = (slug) => `https://cdn.simpleicons.org/${slug}`;

const REACT_ICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";

const SQL_ICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg";

const categories = [
  {
    title: "Languages",
    items: [
      { label: "Go", src: si("go") },
      { label: "Python", src: si("python") },
      { label: "TypeScript", src: si("typescript") },
      { label: "JavaScript", src: si("javascript") },
      { label: "SQL", src: SQL_ICON },
      { label: "Rust", src: si("rust") },
      { label: "Ruby", src: si("ruby") },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "FastAPI", src: si("fastapi") },
      { label: "React/React Native", src: REACT_ICON },
      { label: "Axum", src: si("tokio") },
      { label: "Rails", src: si("rubyonrails") },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { label: "ONNX", src: si("onnx") },
      { label: "LangSmith", src: si("langchain") },
      { label: "LangGraph", src: si("langgraph") },
      { label: "Qdrant", src: si("qdrant") },
      { label: "Claude Code", src: si("claude") },
      { label: "Cursor", src: si("cursor") },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "PostgreSQL", src: si("postgresql") },
      { label: "Docker", src: si("docker") },
      { label: "Railway", src: si("railway") },
      { label: "Git", src: si("git") },
      { label: "GitHub Actions", src: si("githubactions") },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="center skills-center">
        <h2>Skills</h2>
        <div className="skills-container">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className="skills-category-block"
              style={{ transitionDelay: `${catIndex * 0.08}s` }}
            >
              <h3 className="skills-category-heading">{category.title}</h3>
              <div className="skills-inline-list">
                {category.items.map(({ label, src }) => (
                  <button
                    key={`${category.title}-${label}`}
                    type="button"
                    className="skill-item"
                    aria-label={label}
                  >
                    <img
                      className="skill-icon"
                      src={src}
                      alt=""
                      width={28}
                      height={28}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="skill-tooltip" role="tooltip">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
