export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <a 
            href="https://github.com/marcusacosta/limited-item-drop" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/img/map.png" alt="Route Optimizer" />
          </a>

          <a 
            href="https://github.com/marcusacosta/Phishing-Link-Detector" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/img/phishing.png" alt="Phishing Detector" />
          </a>
        </div>
      </div>
    </section>
  );
}
