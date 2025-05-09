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
              <h3>Route Optimizer API</h3>
              <h4>Python, Flask</h4>
              <p>Python-based Flask API that simulates how autonomous delivery vehicles determine efficient routes through a set of destinations. By factoring in traffic conditions and time-of-day, it returns an optimized path and estimated travel time. The API is fully tested with pytest, supports JSON requests, and includes performance logging and LRU caching to improve repeated query efficiency. Ideal for simulating fleet coordination in urban environments.</p>
            </div>
          </div>
          <div className="item">
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>News Outlet Authenticator</h3>
              <h4>Python, Flask, HTML, CSS, Javascript</h4>
              <p>Flask application that uses a machine learning model to classify news statements as real or fake, enhanced by a reputation score for the source domain. Users can interact through a clean web interface where they paste text and receive an immediate prediction, including confidence scores. The app features a fully testable REST API, vectorized inference using scikit-learn, caching for performance, and a lightweight frontend built with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}