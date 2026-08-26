const SYSTEMS = [
  {
    key: "Experimentation",
    value:
      "MLflow tracks training runs and gates candidate ONNX bundles, with human-approved promotion, one-step rollback, and sandboxed counterfactual research.",
  },
  {
    key: "Pipelines",
    value:
      "Built staged data pipelines that transform odds into Parquet features and train PyTorch/XGBoost models, deploying checksum-verified ONNX bundles after parity tests.",
  },
  {
    key: "Efficiency",
    value:
      "Controlled Odds API spend across Python and Go using cost budgets, circuit breakers, request ledgers, 20-second caching, and singleflight request coalescing.",
  },
  {
    key: "Serving",
    value:
      "Built a Go inference service that loads versioned ONNX models and ranks picks using hierarchical calibration, trust, out-of-distribution checks, and edge scoring.",
  },
  {
    key: "Reliability",
    value:
      "Added bounded retries, quota circuit breakers, reserved capacity for essential live requests, typed ingestion outcomes, coverage tracking, and fail-closed deployment gates.",
  },
  {
    key: "Monitoring",
    value:
      "Instrumented candidate and production monitoring for model quality, PSI drift, calibration, trust, OOD signals, funnel metrics, rescore SLOs, readiness, and API spend.",
  },
];

export default function Portfolio() {
  return (
    <section id="experience" className="section work">
      <div className="shell ruled">
        <header className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">Work</h2>
          <span className="section-note">Current role</span>
        </header>

        <article className="work-entry">
          <div className="work-side">
            <h3 className="work-org">Bettorca</h3>
            <p className="work-role">Co-founder &amp; Engineer</p>
            <p className="work-dates">Sep 2025 — Present · Remote</p>
            <a
              className="arrow-link"
              href="https://bettorca.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bettorca.com <span className="arrow-link-mark">↗</span>
            </a>
          </div>

          <div className="work-body">
            <p>
              Bettorca is an AI research lab for sports betting. We build tools
              that help bettors use data and market signals instead of
              guesswork. Users can sync multiple sportsbooks into one dashboard
              to track live bets, balances, prop progress, and outcomes. The
              platform also includes performance analytics, odds comparison,
              personalized risk guidance, and ML-powered picks designed to
              identify value in the market.
            </p>
            <p>
              As co-founder and engineer, I own the model stack end to end:
              ingestion and training pipelines, prediction market scoring and
              calibration, versioned ONNX deployment, real-time inference APIs,
              and the safeguards and telemetry that decide what actually reaches
              a user. I work with the CEO and external engineers on technical
              and product decisions.
            </p>

            <dl className="work-systems">
              {SYSTEMS.map(({ key, value }) => (
                <div className="work-systems-row" key={key}>
                  <dt className="label">{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
