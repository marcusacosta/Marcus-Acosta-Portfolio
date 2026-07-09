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
                <span className="experience-job-role">Co-Founder & Engineer</span>
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
              Bettorca is a bankroll manager for sports bettors, built on a data
              aggregation layer that unifies books into one place. Multi-book sync
              lets users track every slip live across their books, with high-signal
              analytics on their performance, recommended props from our in-house
              machine learning models, and a monitor that suggests betting more
              conservatively or aggressively based on how they&apos;re doing.
            </p>
            <p className="experience-job-detail">
              As co-founder and engineer, I own the product end to end across the
              stack, from architecture and deployments to new features, product
              improvements, and system plus AI observability. I also collaborate
              with outside engineers on debugging and technical decisions, and work
              directly with the CEO on tradeoffs and product choices that circle
              back to the business.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
