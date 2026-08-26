const CHANNELS = [
  {
    key: "Email",
    value: "marcus.alan.acosta@gmail.com",
    href: "mailto:marcus.alan.acosta@gmail.com",
    mark: "→",
  },
  {
    key: "GitHub",
    value: "/marcusacosta",
    href: "https://github.com/marcusacosta",
    mark: "↗",
  },
  {
    key: "LinkedIn",
    value: "in/marcusacostadev",
    href: "https://www.linkedin.com/in/marcusacostadev",
    mark: "↗",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="shell ruled">
        <header className="section-head">
          <span className="section-index">05</span>
          <h2 className="section-title">Contact</h2>
          <span className="section-note">Email is fastest</span>
        </header>

        <div className="contact-grid">
          <p className="contact-statement">
            Open to work on ML systems, inference, and research engineering.
          </p>

          <ul className="contact-list">
            {CHANNELS.map(({ key, value, href, mark }) => (
              <li key={key}>
                <a
                  className="contact-row"
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                >
                  <span className="contact-key">{key}</span>
                  <span className="contact-value">{value}</span>
                  <span className="contact-mark">{mark}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
