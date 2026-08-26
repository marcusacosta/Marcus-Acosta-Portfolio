import Image from "next/image";

const SPEC = [
  { key: "Current", value: "Bettorca — co-founder & engineer" },
  { key: "Focus", value: "Training · eval · inference · reliability" },
  { key: "Open source", value: "mistral.rs · torchtune" },
  { key: "Daily", value: "Python · Go · Rust · PyTorch · Postgres" },
  { key: "Base", value: "Bay Area, California" },
];

export default function Hero() {
  return (
    <section id="hero" className="lede">
      <div className="shell lede-grid ruled">
        <div className="lede-main">
          <p className="lede-eyebrow label">
            Machine learning systems · Research engineering
          </p>
          <h1 className="lede-title">
            I own the model
            <br />
            end to end.
          </h1>
          <p className="lede-deck">
            I build and train the models, then own evaluation, inference, and
            reliability so they actually hold up in production.
          </p>

          <dl className="spec">
            {SPEC.map(({ key, value }) => (
              <div className="spec-row" key={key}>
                <dt className="label">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <a
            className="arrow-link lede-resume"
            href="/Marcus_Acosta_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume, PDF <span className="arrow-link-mark">↗</span>
          </a>
        </div>

        <figure className="lede-portrait">
          <div className="lede-portrait-frame">
            <Image
              src="/img/marcus.png"
              alt="Marcus Acosta"
              fill
              priority
              sizes="(max-width: 900px) 70vw, 30vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <figcaption>Marcus Acosta / 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}
