const INK = "1a1a17";

const si = (slug) => `https://cdn.simpleicons.org/${slug}/${INK}`;

const REACT_ICON = si("react");

const SQL_ICON = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a1a17" stroke-width="1.7"><ellipse cx="12" cy="5.4" rx="7.4" ry="2.9"/><path d="M4.6 5.4v6.2c0 1.6 3.31 2.9 7.4 2.9s7.4-1.3 7.4-2.9V5.4"/><path d="M4.6 11.6v6.2c0 1.6 3.31 2.9 7.4 2.9s7.4-1.3 7.4-2.9v-6.2"/></svg>'
)}`;

const CATEGORIES = [
  {
    title: "Languages",
    items: [
      { label: "Python", src: si("python") },
      { label: "Go", src: si("go") },
      { label: "Rust", src: si("rust") },
      { label: "SQL", src: SQL_ICON },
      { label: "TypeScript", src: si("typescript") },
      { label: "JavaScript", src: si("javascript") },
    ],
  },
  {
    title: "ML / AI",
    items: [
      { label: "PyTorch", src: si("pytorch") },
      { label: "XGBoost", src: "/img/skills/xgboost.svg" },
      { label: "scikit-learn", src: si("scikitlearn") },
      { label: "FLAML", src: "/img/skills/flaml.svg" },
      { label: "MLflow", src: si("mlflow") },
      { label: "ONNX", src: si("onnx") },
      { label: "Qdrant", src: si("qdrant") },
      { label: "LangGraph", src: si("langgraph") },
      { label: "LangSmith", src: si("langchain") },
    ],
  },
  {
    title: "Data systems",
    items: [
      { label: "PostgreSQL", src: si("postgresql") },
      { label: "DuckDB", src: si("duckdb") },
      { label: "Parquet", src: si("apacheparquet") },
      { label: "PyArrow", src: si("apachearrow") },
      { label: "pandas", src: si("pandas") },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "FastAPI", src: si("fastapi") },
      { label: "React", src: REACT_ICON },
      { label: "React Native", src: REACT_ICON },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "Kubernetes", src: si("kubernetes") },
      { label: "Docker", src: si("docker") },
      { label: "GitHub Actions", src: si("githubactions") },
      { label: "Git", src: si("git") },
      { label: "Railway", src: si("railway") },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section stack">
      <div className="shell ruled">
        <header className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Stack</h2>
          <span className="section-note">What I reach for</span>
        </header>

        <dl className="stack-list">
          {CATEGORIES.map(({ title, items }) => (
            <div className="stack-row" key={title}>
              <dt className="label">{title}</dt>
              <dd className="stack-items">
                {items.map(({ label, src }) => (
                  <span className="stack-item" key={`${title}-${label}`}>
                    <img
                      className="stack-icon"
                      src={src}
                      alt=""
                      width={15}
                      height={15}
                      loading="lazy"
                      decoding="async"
                    />
                    {label}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
