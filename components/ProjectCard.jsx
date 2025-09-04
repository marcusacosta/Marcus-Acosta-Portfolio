import Image from 'next/image';
import { useState } from 'react';
import CalendarUI from './CalendarUI';
import TicketmasterUI from './TicketmasterUI';
import PhishingDetectorUI from './PhishingDetectorUI';

export default function ProjectCard({ 
  title, 
  outcome, 
  metrics, 
  tech, 
  githubUrl, 
  imageSrc, 
  imageAlt 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project on GitHub`}
    >
      <div className="project-image">
        {title === "Collaborative Expense Calendar" ? (
          <div className="calendar-container">
            <CalendarUI />
            <div className="project-overlay">
              <span className="view-project">View on GitHub →</span>
            </div>
          </div>
        ) : title === "Fantasy Football Trade Analyzer" ? (
          <div className="ticketmaster-container">
            <TicketmasterUI />
            <div className="project-overlay">
              <span className="view-project">View on GitHub →</span>
            </div>
          </div>
        ) : title === "Phishing Link Detector" ? (
          <div className="phishing-container">
            <PhishingDetectorUI />
            <div className="project-overlay">
              <span className="view-project">View on GitHub →</span>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={250}
              className="project-screenshot"
            />
            <div className="project-overlay">
              <span className="view-project">View on GitHub →</span>
            </div>
          </>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-outcome">{outcome}</p>
        
        <div className="project-metrics">
          {metrics.map((metric, index) => (
            <span key={index} className="metric-chip">
              {metric}
            </span>
          ))}
        </div>
        
        <div className="project-tech">
          {tech.map((techItem, index) => (
            <span key={index} className="tech-badge">
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
