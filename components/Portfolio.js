import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Expense Calendar Cloud",
      outcome: "Cloud-based expense tracking system with calendar integration for personal and business financial management.",
      metrics: ["100+ users", "Real-time sync", "Multi-device access"],
      tech: ["Python", "FastAPI", "PostgreSQL", "AWS", "React"],
      githubUrl: "https://github.com/marcusacosta/expense-calendar-cloud",
      imageSrc: "/img/macbook2.jpg",
      imageAlt: "Expense Calendar Cloud - Financial Management System"
    },
    {
      title: "Ticket Price Alert",
      outcome: "Smart notification system that tracks ticket prices and alerts users when prices drop to their target range.",
      metrics: ["-20% avg savings", "500+ alerts sent", "24/7 monitoring"],
      tech: ["Python", "Flask", "SQLite", "Selenium"],
      githubUrl: "https://github.com/marcusacosta/ticket-price-alert",
      imageSrc: "/img/macbook.jpg",
      imageAlt: "Ticket Price Alert - Price Monitoring System"
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
