export default function Portfolio() {
  return (
    <section id="experience">
      <div className="center">
        <h2 className="experience-heading">Experience</h2>
        <ul className="experience-jobs-list">
          <li className="experience-job-card">
            <div className="experience-job-title-row">
              <div className="experience-job-title-left">
                <span className="experience-job-company">BETTORCA</span>
                <span className="experience-job-role">Founding Engineer</span>
              </div>
              <a
                href="https://bettorca.com"
                className="experience-job-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bettorca.com
              </a>
            </div>
            <p className="experience-job-detail">
              An agentic platform
              that unifies traditional sportsbooks behind one fast interface for
              bettors. I ship high-frequency agents and probability models that power
              market intelligence, plus multi-book sync, live tracking, analytics,
              and real-time prop scanning for confident signals throughout live
              games.
            </p>
          </li>
          <li className="experience-job-card">
            <div className="experience-job-title-row">
              <div className="experience-job-title-left">
                <span className="experience-job-company">Catch</span>
                <span className="experience-job-role">Founder & Systems Architect</span>
              </div>
              <a
                href="https://getcatchai.com"
                className="experience-job-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                getcatchai.com
              </a>
            </div>
            <p className="experience-job-detail">
              A drop-in layer that learns workflows, keywords, and API
              patterns so repetitive LLM calls can hit sub-100ms class latency. It
              stays model-agnostic across major providers, trims token spend by
              caching proven patterns, and keeps learned logic in
              customer-controlled storage for institutional memory without
              surrendering data.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
