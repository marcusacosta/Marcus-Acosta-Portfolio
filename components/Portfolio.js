import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Collaborative Expense Calendar",
      outcome: "Cloud-hosted web app that lets users (roommates, couples, or teams) track shared expenses on a calendar, split costs by percentage, and receive real-time alerts when new or modified expenses affect their balance.",
      metrics: ["100+ users", "Real-time sync", "Multi-device access"],
      tech: ["Python", "JavaScript", "Flask", "React", "PostgreSQL"],
      githubUrl: "https://github.com/marcusacosta/collaborative-expense-calendar",
      imageSrc: "/img/macbook2.jpg",
      imageAlt: "Collaborative Expense Calendar - Financial Management System"
    },
    {
      title: "Fantasy Football Trade Analyzer",
      outcome: "A fullstack prototype web app that analyzes fantasy football trades by combining Yahoo Fantasy team data with Tank01 NFL player projections.",
      metrics: ["Trade fairness scoring", "Team-need insights", "Prototype integration"],
      tech: ["Go", "React", "REST APIs", "Yahoo + Tank01"],
      githubUrl: "https://github.com/marcusacosta/fantasy-football-trade-analyzer",
      imageSrc: "/img/macbook.jpg",
      imageAlt: "Fantasy Football Trade Analyzer - Trade Analysis System"
    },
    {
      title: "Phishing Link Detector",
      outcome: "Front-end only application that uses advanced URL parsing and analysis to detect potentially malicious or fake links, helping users identify phishing attempts and stay safe online.",
      metrics: ["Real-time detection", "URL analysis", "Security focused"],
      tech: ["TypeScript", "React", "URL parsing", "Security"],
      githubUrl: "https://github.com/marcusacosta/phishing-link-detector",
      imageSrc: "/img/phishing.png",
      imageAlt: "Phishing Link Detector - Security Tool"
    }
  ];

  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              outcome={project.outcome}
              metrics={project.metrics}
              tech={project.tech}
              githubUrl={project.githubUrl}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
