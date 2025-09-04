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
      tech: ["Go", "TypeScript", "Gin", "React"],
      githubUrl: "https://github.com/marcusacosta/fantasy-football-trade-analyzer",
      imageSrc: "/img/macbook.jpg",
      imageAlt: "Fantasy Football Trade Analyzer - Trade Analysis System"
    },
    {
      title: "Job Alert App",
      outcome: "Notification system where users subscribe via a simple web page, pick categories and cities, and receive text messages when new internships are posted from the Simplify Jobs repo.",
      metrics: ["100+ notification handler", "Filter by category & city", "Auto-scheduled checks"],
      tech: ["JavaScript", "Node.js", "Express", "SQLite"],
      githubUrl: "https://github.com/marcusacosta/job-alert-app",
      imageSrc: "/img/job-alert.png",
      imageAlt: "Job Alert App - Job Notification System"
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
