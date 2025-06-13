export default function Experience() {
  return (
    <section id="experience">
      <div className="center">
        <h2>Projects</h2>
        <div className="timeline">

          <div className="item">
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Limited Jacket Drop</h3>
              <h4>Python, MySql, React</h4>
              <p>
                Simulated flash sale system that mimics real-world queue mechanics for limited-edition product drops. Users are placed in a first-in, first-out queue where purchases are only allowed when inventory is available and a valid access code is entered. The backend Flask API enforces queue position, rate-limiting, and transactional inventory updates using a MySQL database. The React frontend displays live product status and queue progression. Designed to showcase backend logic, concurrency handling, and real-time state transitions in a high-demand environment.              
              </p>
            </div>
          </div>

          <div className="item">
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Phishing Link Detector</h3>
              <h4>React, TypeScript, CSS</h4>
              <p>
                Frontend web application that identifies suspicious links in pasted messages by analyzing shortened URLs and risky domain extensions. Built with React and TypeScript, it performs real-time text parsing and displays warnings based on phishing heuristics. The app features a responsive UI with dark/light mode, fully typed data flow, and can be extended with backend or ML-based detection APIs for smarter classification.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
