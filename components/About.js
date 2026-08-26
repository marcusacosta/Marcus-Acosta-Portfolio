export default function About() {
  return (
    <section id="about" className="section profile">
      <div className="shell ruled">
        <header className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">Profile</h2>
          <span className="section-note">Short version</span>
        </header>

        <div className="profile-grid">
          <aside className="profile-side">
            <p className="label">Education</p>
            <p className="profile-side-note">
              Post-baccalaureate coursework, Computer Science — Oregon State
              University
              <br />
              <span className="profile-side-dim">
                Data structures · discrete math · databases · software
                engineering · web development
              </span>
            </p>
            <p className="profile-side-note">
              B.A., Sociology — UC Santa Cruz
            </p>
          </aside>

          <div className="profile-body">
            <p className="profile-lead">
              I&apos;m an engineer with experience across the stack, from
              product-facing systems and APIs to infrastructure and data
              pipelines. I&apos;ve been deeply embedded in machine learning and
              research engineering, building and deploying models alongside the
              evaluation, inference, and reliability systems that support them.
            </p>
            <p>
              Outside of engineering, I recently picked up golf, and you&apos;ll
              usually find me in the gym, watching sports, or hunting for vintage
              pieces and following fashion. I&apos;m also always looking for the
              next place to travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
