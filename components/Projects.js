import { GitHubIcon } from "./SkillIcons";

const projects = [
  {
    company: "LITELLM",
    role: "Open Source",
    linkHref: "https://github.com/BerriAI/litellm/pull/30597",
    detail:
      "Helped LiteLLM's proxy get smarter about which MCP tool servers it trusts. Added trust scoring so third-party servers get filtered and ranked before model calls go out, with caching per URL, fail-open defaults, and a solid test suite covering both HTTP and stdio servers.",
  },
  {
    company: "LAGO",
    role: "Open Source",
    linkHref: "https://github.com/getlago/lago-api/pull/5729",
    detail:
      "Fixed a quiet billing bug where Flutterwave payments would verify successfully but never update the matching invoice. Added a fallback so the webhook handler can still resolve the right payment reference when the webhook and verified refs don't line up.",
  },
  {
    company: "LLM PROXY CACHE",
    role: "Personal Project",
    linkHref: "https://github.com/marcusacosta/Catch-Source-Code",
    detail:
      "Built a semantic caching layer that cut LLM response times from a few seconds down to under 100ms on hits, and dropped token spend to zero when the cache already had the answer. OpenAI-compatible proxy with prompt normalization, deterministic keys, and simple hit/miss cost tracking.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="center projects-center">
        <h2 className="experience-heading">Projects</h2>
        <ul className="experience-jobs-list projects-grid">
          {projects.map((project) => (
            <li key={project.company} className="experience-job-card">
              <div className="experience-job-title-row">
                <div className="experience-job-title-left">
                  <span className="experience-job-company">{project.company}</span>
                  <span className="experience-job-role">{project.role}</span>
                </div>
                <a
                  href={project.linkHref}
                  className="experience-job-link experience-job-link--icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.company} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>
              <p className="experience-job-detail">{project.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
