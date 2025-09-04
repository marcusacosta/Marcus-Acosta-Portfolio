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
      outcome: "Job Alert App that lets users sign up for job alerts by phone, built with JavaScript, Express, and SQLite; it demonstrates filter-based sign-ups, real-time notifications (simulated), and scalable alert management.",
      metrics: ["Filter-based sign-ups", "Real-time notifications", "Scalable alert management"],
      tech: ["JavaScript", "Express", "SQLite"],
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
