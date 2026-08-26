import { useRef, useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "mistralrs",
    repo: "EricLBuehler/mistral.rs",
    title: "Intent-aware PagedAttention configuration",
    status: "PR #2402 · open",
    points: [
      "Carried PagedAttention intent (auto / on / off) through device checks, loaders, cache init, and scheduler selection instead of collapsing it to a Boolean.",
      "Explicit --paged-attn on now either realizes PagedAttention or fails startup; auto still falls back with a logged reason.",
      "CPU-only regression tests across device, loader, scheduler, and SDK paths, so required configurations cannot silently degrade.",
    ],
    footnote:
      "Also open: pluggable external KV-cache connectors on live PagedAttention scheduling, with an in-memory reference implementation and a runnable chat example (#2364).",
    artifact: {
      path: "mistralrs-core/src/paged_attn",
      note: "rust",
      comment: "//",
      lines: [
        "PagedAttentionConfig { required: bool }  // false = auto, true = on",
        "",
        "disable_paged_attention(&mut config, reason)?;",
        "// auto  → log reason, drop config, continue",
        "// on    → return error, stop initialization",
        "",
        "// --paged-attn on: PagedAttention is active, or the server does not start",
      ],
    },
    links: [
      {
        label: "Pull request",
        href: "https://github.com/EricLBuehler/mistral.rs/pull/2402",
        external: true,
      },
      {
        label: "Write-up",
        href: "/writing/building-intent-aware-configuration-for-llm-serving",
      },
    ],
  },
  {
    id: "torchtune",
    repo: "meta-pytorch/torchtune",
    title: "Native SimPO preference optimization",
    status: "PR #2986 · draft",
    points: [
      "Added SimPO with length-normalized scoring, averaging response-token log probabilities instead of summing them, so response length stops deciding the winner.",
      "Preserved existing DPO and RSO behavior across LoRA and distributed training by making each loss declare the aggregation it needs.",
      "Shipped a runnable training config plus regression coverage for loss correctness, gradients, reference-free execution, and GPU integration.",
    ],
    footnote:
      "Also open: fail-fast LoRA target-module validation that raises instead of silently disabling adapter training, with CPU regression tests (#2985).",
    artifact: {
      path: "torchtune/rlhf/loss",
      note: "python",
      comment: "#",
      lines: [
        "class PreferenceLoss(nn.Module):",
        "    return_average_logprobs = False   # DPO, RSO: summed sequence logprobs",
        "",
        "class SimPOLoss(PreferenceLoss):",
        "    return_average_logprobs = True    # SimPO: mean over response tokens",
        "",
        "    def forward(self, chosen, rejected):",
        "        # reference-free: no frozen model forward pass",
        "        logits = self.beta * (chosen - rejected)",
        "        return -F.logsigmoid(logits - self.gamma_beta_ratio)",
      ],
    },
    links: [
      {
        label: "Pull request",
        href: "https://github.com/meta-pytorch/torchtune/pulls?q=is%3Apr+is%3Aopen+involves%3Amarcusacosta",
        external: true,
      },
      {
        label: "Write-up",
        href: "/writing/adding-simpo-to-llm-preference-training",
      },
    ],
  },
  {
    id: "petaffect",
    repo: "petaffect",
    title: "Uncertainty-aware animal-audio research",
    status: "Proposal · v1 scoped",
    points: [
      "Audio-first research program asking whether calibrated models can surface observable cat vocalization patterns for human review.",
      "Flags within-animal deviation from an individual acoustic baseline rather than guessing at emotion, pain, or intent.",
      "Evaluation is the deliverable: identity-separated splits, calibration error, risk-coverage curves, and abstention on unusable clips.",
    ],
    artifact: {
      path: "evaluation contract, cats v1",
      note: "yaml",
      comment: "#",
      lines: [
        "splits:  [animal_id, household, session, device]  # no leakage on any axis",
        "report:  [macro_f1, per_class_recall, ece, risk_coverage]",
        "abstain: low_snr | overlapping_speech | off_distribution",
        "emit:    observable acoustic patterns + calibrated uncertainty",
        "never:   translation | diagnosis | autonomous decisions",
      ],
    },
    links: [
      { label: "Write-up", href: "/writing/petaffect" },
      {
        label: "Proposal, PDF",
        href: "/PetAffect_Research_Proposal_Marcus_Acosta_Final.pdf",
        external: true,
      },
    ],
  },
];

const ELSEWHERE = [
  {
    repo: "BerriAI/litellm",
    id: "#30597",
    what: "MCP tool-server trust scoring",
    href: "https://github.com/BerriAI/litellm/pull/30597",
  },
  {
    repo: "getlago/lago-api",
    id: "#5729",
    what: "Flutterwave invoice reconciliation",
    href: "https://github.com/getlago/lago-api/pull/5729",
  },
  {
    repo: "sqlc-dev/sqlc",
    id: "#4486",
    what: "timestamptz override matching",
    href: "https://github.com/sqlc-dev/sqlc/pull/4486",
  },
  {
    repo: "kserve/kserve",
    id: "#6000",
    what: "optional KEDA CEL fields",
    href: "https://github.com/kserve/kserve/pull/6000",
  },
];

function CodeBody({ lines, comment }) {
  return (
    <code>
      {lines.map((line, i) => {
        const at = line.indexOf(comment);
        const key = `${i}-${line}`;

        if (at === -1) {
          return <span key={key}>{`${line}\n`}</span>;
        }

        return (
          <span key={key}>
            {line.slice(0, at)}
            <span className="c-dim">{line.slice(at)}</span>
            {"\n"}
          </span>
        );
      })}
    </code>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  const onKeyDown = (event) => {
    const step =
      event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!step) return;

    event.preventDefault();
    const next = (active + step + PROJECTS.length) % PROJECTS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const project = PROJECTS[active];

  return (
    <section id="projects" className="section index">
      <div className="shell ruled">
        <header className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">Index</h2>
          <span className="section-note">Open source &amp; research</span>
        </header>

        <div className="index-grid">
          <div className="index-col">
            <div
              className="index-list"
              role="tablist"
              aria-label="Projects"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
            >
              {PROJECTS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={i === active}
                  aria-controls="artifact-panel"
                  tabIndex={i === active ? 0 : -1}
                  ref={(node) => {
                    tabs.current[i] = node;
                  }}
                  className={`index-row${i === active ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="index-num">{`0${i + 1}`}</span>
                  <span className="index-text">
                    <span className="index-repo">{item.repo}</span>
                    <span className="index-title">{item.title}</span>
                  </span>
                  <span className="index-status">{item.status}</span>
                </button>
              ))}
            </div>

            <div className="elsewhere">
              <p className="label">Patched elsewhere</p>
              <ul className="elsewhere-list">
                {ELSEWHERE.map(({ repo, id, what, href }) => (
                  <li key={href}>
                    <a
                      className="elsewhere-row"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="elsewhere-repo">{repo}</span>
                      <span className="elsewhere-id">{id}</span>
                      <span className="elsewhere-what">{what}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="artifact"
            id="artifact-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`tab-${project.id}`}
            key={project.id}
          >
            <ul className="artifact-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <figure className="code">
              <figcaption className="code-path">
                <span>{project.artifact.path}</span>
                <span>{project.artifact.note}</span>
              </figcaption>
              <pre>
                <CodeBody
                  lines={project.artifact.lines}
                  comment={project.artifact.comment}
                />
              </pre>
            </figure>

            <div className="artifact-links">
              {project.links.map(({ label, href, external }) =>
                external ? (
                  <a
                    key={label}
                    className="arrow-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label} <span className="arrow-link-mark">↗</span>
                  </a>
                ) : (
                  <Link key={label} className="arrow-link" href={href}>
                    {label} <span className="arrow-link-mark">→</span>
                  </Link>
                )
              )}
            </div>

            {project.footnote && (
              <p className="artifact-footnote">{project.footnote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
