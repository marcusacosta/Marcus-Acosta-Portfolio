export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <a 
            href="https://github.com/marcusacosta/Route-Optimizer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/img/map.png" alt="Route Optimizer" />
          </a>
          <a 
            href="https://github.com/marcusacosta/News-Authenticator" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/img/news.png" alt="News Authenticator" />
          </a>
        </div>
      </div>
    </section>
  );
}
