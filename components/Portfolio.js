import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Collaborative Expense Calendar",
      outcome: "Cloud-hosted web app that lets users (roommates, couples, or teams) track shared expenses on a calendar, split costs by percentage, and receive real-time alerts when new or modified expenses affect their balance.",
      metrics: ["100+ users", "Real-time sync", "Multi-device access"],
      tech: ["Python", "JavaScript", "Flask", "React", "PostgreSQL"],
      githubUrl: "https://github.com/marcusacosta/expense-calendar-cloud",
      imageSrc: "/img/macbook2.jpg",
      imageAlt: "Collaborative Expense Calendar - Financial Management System"
    },
    {
      title: "Ticket Price Alert",
      outcome: "Full-stack app that monitors Ticketmaster's API for price changes across hundreds of events and delivers real-time SMS alerts when tickets hit a target price.",
      metrics: ["-20% avg savings", "500+ alerts sent", "24/7 monitoring"],
      tech: ["Javascript", "Node.js", "React", "PostgreSQL"],
      githubUrl: "https://github.com/marcusacosta/tix_compare",
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
