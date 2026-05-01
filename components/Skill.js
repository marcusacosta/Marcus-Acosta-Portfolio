const si = (slug) => `https://cdn.simpleicons.org/${slug}`;

const REACT_ICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";

const categories = [
  {
    title: "Languages",
    items: [
      { label: "Go", src: si("go") },
      { label: "Python", src: si("python") },
      { label: "TypeScript", src: si("typescript") },
      { label: "JavaScript", src: si("javascript") },
      { label: "SQL", src: si("sqlite") },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "React/React Native", src: REACT_ICON },
      { label: "Expo", src: si("expo") },
      { label: "Flask", src: si("flask") },
      { label: "Node.js", src: si("nodedotjs") },
      { label: "ONNX", src: si("onnx") },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "PostgreSQL", src: si("postgresql") },
      { label: "Railway", src: si("railway") },
      { label: "EAS", src: si("expo") },
      { label: "Git", src: si("git") },
      { label: "CI/CD Pipelines", src: si("githubactions") },
      { label: "Docker", src: si("docker") },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="center">
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
                  <span
                    key={`${category.title}-${label}`}
                    className="skill-item"
                  >
                    <img
                      className="skill-icon"
                      src={src}
                      alt=""
                      width={22}
                      height={22}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="skill-label">{label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
