import { useEffect, useState } from "react";
import FloatingClouds from "./FloatingClouds";

export default function Hero() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="hero" className={classes}>
      <FloatingClouds />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            <span className="hero-name">Marcus Acosta</span>
            <span className="hero-role">Computer Science Post-Bacc @ Oregon State University · Open to Software Engineering Internships</span>
          </h1>
          
          <div className="hero-ctas">
            <a href="/marcus-acosta-resume.pdf" className="cta-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/img/marcus.png" alt="Marcus Acosta" />
        </div>
      </div>
    </section>
  );
}
