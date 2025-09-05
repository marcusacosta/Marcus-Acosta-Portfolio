import Image from 'next/image';
import { useState } from 'react';
import CalendarUI from './CalendarUI';
import TicketmasterUI from './TicketmasterUI';
import PhishingDetectorUI from './PhishingDetectorUI';
import FantasyFootballUI from './FantasyFootballUI';
import JobAlertToolUI from './JobAlertToolUI';
import { GitHubIcon } from './SkillIcons';

export default function ProjectCard({ 
  title, 
  outcome, 
  metrics, 
  tech, 
  githubUrl, 
  imageSrc, 
  imageAlt,
  liveUrl = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleRepoClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        {title === "Collaborative Expense Calendar" ? (
          <div className="calendar-container">
            <CalendarUI />
          </div>
        ) : title === "Fantasy Football Trade Analyzer" ? (
          <div className="fantasy-football-container">
            <FantasyFootballUI />
          </div>
        ) : title === "Phishing Link Detector" ? (
          <div className="phishing-container">
            <PhishingDetectorUI />
          </div>
        ) : title === "Job Listing Notifier" ? (
          <div className="job-alert-tool-container">
            <JobAlertToolUI />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={250}
            className="project-screenshot"
          />
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
        
        <div className="project-buttons">
          <button 
            className="btn-repo" 
            onClick={handleRepoClick}
            aria-label={`View ${title} repository on GitHub`}
          >
            <GitHubIcon />
            View Repo →
          </button>
          {liveUrl && (
            <button 
              className="btn-live" 
              onClick={handleLiveClick}
              aria-label={`View live demo of ${title}`}
            >
              Live Demo →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
