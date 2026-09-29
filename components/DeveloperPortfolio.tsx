import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "LitGPT",
    title: "Multi-turn fine-tuning that stays focused",
    description:
      "Improved multi-turn fine-tuning by focusing training on assistant replies across complete conversations while preserving existing training behavior. Controlled experiments evaluated effects on response quality, context retention, and general capabilities.",
    href: "https://github.com/Lightning-AI/litgpt/pulls?q=author%3Amarcusacosta",
  },
  {
    name: "torchtitan",
    title: "More consistent loss across model depth",
    description:
      "Added per-depth loss normalization for Mixture-of-Depths training in DeepSeek models to improve consistency during distributed optimization. Analysis covered gradient scaling, padding, and variable-length sequences to identify when normalization helps.",
    href: "https://github.com/pytorch/torchtitan/pulls?q=is%3Apr+state%3Aopen+author%3Amarcusacosta",
  },
];
const tools = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "CUDA", icon: "nvidia" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "Bash", icon: "gnubash" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "XGBoost", icon: "xgboost" },
      {
        name: "Hugging Face",
        icon: "huggingface",
        detail: "Transformers, Tokenizers",
      },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    category: "Distributed Training",
    items: [
      {
        name: "PyTorch Distributed",
        icon: "pytorch",
        detail: "DTensor, DeviceMesh",
      },
      { name: "Lightning Fabric", icon: "lightning" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "ONNX", icon: "onnx" },
      { name: "MLflow", icon: "mlflow" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Railway", icon: "railway" },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Qdrant", icon: "qdrant" },
      { name: "Redis", icon: "redis" },
      { name: "pandas", icon: "pandas" },
      { name: "PyArrow", icon: "apachearrow" },
    ],
  },
];
const section = "border-t border-neutral-800 px-6 py-12 sm:px-10 sm:py-14";
const heading = "mb-7 text-3xl font-medium tracking-[-0.04em] text-white";
const link =
  "inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors duration-200 hover:text-white";

export default function DeveloperPortfolio() {
  return (
    <>
      <a
        href="#about"
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-white p-3 text-black focus:translate-y-0"
      >
        Skip to content
      </a>
      <main className="mx-auto max-w-6xl border-x border-neutral-800">
        <header id="header">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-neutral-800 px-6 py-5 sm:px-10">
            <a
              href="#header"
              aria-label="Marcus Acosta, home"
              className="flex items-center gap-3 text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-neutral-700 font-mono text-xs">
                ma.
              </span>
              <span className="text-sm font-medium">Marcus Acosta</span>
            </a>
            <nav
              aria-label="Main navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 text-xs"
            >
              {["About", "Projects", "Tools", "Contact"].map((item) => (
                <a
                  key={item}
                  href={"#" + item.toLowerCase()}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col-reverse items-start gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-20">
            <div className="w-[min(100%,360px)] max-w-full border border-neutral-800 bg-neutral-950/40 font-mono sm:w-[420px]">
              <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="h-2 w-2 rounded-full bg-neutral-700" />
                  <span className="h-2 w-2 rounded-full bg-neutral-800" />
                </span>
                <span className="text-[10px] text-neutral-500">
                  marcus@portfolio: ~
                </span>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <p
                  aria-hidden="true"
                  className="terminal-type terminal-command mb-3 text-xs text-neutral-500"
                >
                  $ cat profile.txt
                </p>
                <h1 className="terminal-type terminal-name text-2xl font-medium tracking-tight text-white lg:text-4xl">
                  Marcus Acosta
                </h1>
                <p className="terminal-type terminal-specialty mt-2 text-[11px] leading-6 sm:text-sm">
                  Machine Learning | AI Research
                </p>
                <p className="terminal-type terminal-location mt-2 text-[11px] text-neutral-500">
                  Bay Area, California
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-5">
                  <a
                    href="/Marcus_Acosta_Resume_2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-white underline decoration-neutral-700 underline-offset-4 transition-colors duration-200 hover:decoration-white"
                  >
                    Résumé <ArrowUpRight size={14} />
                  </a>
                </div>
                <p
                  aria-hidden="true"
                  className="mt-4 flex items-center gap-2 text-xs text-neutral-500"
                >
                  ${" "}
                  <span className="terminal-cursor inline-block h-3.5 w-1.5 bg-neutral-400" />
                </p>
              </div>
            </div>
            <div className="portrait-blend relative mr-4 h-52 w-44 shrink-0 sm:mr-8 sm:h-72 sm:w-60">
              <Image
                src="/img/marcus.png"
                alt="Marcus Acosta"
                fill
                priority
                sizes="(max-width: 639px) 176px, 240px"
                className="scale-110 object-cover object-center grayscale contrast-125 brightness-90"
              />
            </div>
          </div>
        </header>
        <section
          id="about"
          className={`${section} grid gap-x-12 md:grid-cols-[1fr_2fr]`}
        >
          <h2 className={heading}>About</h2>
          <div className="space-y-4 text-sm leading-7">
            <p>
              I’m the technical co-founder of{" "}
              <a
                href="https://bettorca.com"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-white"
              >
                BETTORCA
              </a>
              , where I’ve served as the primary engineer behind the company’s
              product. I started as a full-stack developer, but as the product
              evolved and we learned more from the market, I became
              increasingly interested in AI/ML research, particularly how to
              train models to make predictions that create real value for
              users.
            </p>
            <p>
              Outside of engineering, I’m usually in the gym, watching sports,
              looking for vintage pieces, planning a trip, or working on my
              golf game.
            </p>
          </div>
        </section>
        <section id="projects" className="border-t border-neutral-800">
          <div className="grid gap-6 px-6 py-12 sm:px-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-white">
              Projects
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-neutral-400">
              Active contributor to open-source tools for model training,
              exploring different approaches through controlled experiments.
            </p>
          </div>
          <div className="grid grid-cols-1 border-t border-neutral-800 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex min-w-0 flex-col border-neutral-800 p-6 transition-colors duration-200 hover:bg-neutral-900/50 focus-within:bg-neutral-900/50 max-md:border-b max-md:last:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="mb-2 font-mono text-xs text-neutral-500">
                  {project.name}
                </p>
                <h3 className="text-xl font-medium leading-7 tracking-tight text-white">
                  <Link
                    href={project.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap justify-between gap-3 border-t border-neutral-800 pt-4">
                  {project.href.startsWith("/") ? (
                    <Link href={project.href} className={link}>
                      Write-up <ArrowUpRight size={13} />
                    </Link>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={link}
                    >
                      GitHub <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="tools" className={section}>
          <h2 className={heading}>Tools</h2>
          <dl className="divide-y divide-neutral-800 border-y border-neutral-800">
            {tools.map(({ category, items }) => (
              <div
                key={category}
                className="grid gap-2 py-5 sm:grid-cols-[190px_1fr] sm:gap-5"
              >
                <dt className="text-sm text-neutral-500">{category}</dt>
                <dd className="flex flex-wrap gap-x-6 gap-y-5">
                  {items.map(({ name, icon, detail }) => (
                    <span
                      key={name}
                      className="group inline-flex max-w-full items-center gap-3 font-mono text-xs leading-5"
                    >
                      <Image
                        src={
                          icon === "xgboost"
                            ? "/img/skills/xgboost.svg"
                            : `/img/tools/${icon}.svg`
                        }
                        alt=""
                        width={24}
                        height={24}
                        className={`h-6 w-6 shrink-0 object-contain transition-all duration-200 group-hover:brightness-150 ${icon === "xgboost" ? "brightness-0 invert opacity-70" : ""}`}
                      />
                      <span>
                        {name}
                        {detail && (
                          <span className="block text-[10px] text-neutral-500">
                            {detail}
                          </span>
                        )}
                      </span>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="contact" className={section}>
          <h2 className={heading}>Contact</h2>
          <a
            href="mailto:marcus.alan.acosta@gmail.com"
            className="mt-5 inline-block break-all text-sm text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-white"
          >
            marcus.alan.acosta@gmail.com
          </a>
          <div className="mt-5 flex gap-6">
            <a
              href="https://github.com/marcusacosta"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcusacostadev"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
