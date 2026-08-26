import WritingLayout from "../../components/WritingLayout";

export default function PetAffectPost() {
  return (
    <WritingLayout
      title="PetAffect: Uncertainty-aware audio modeling of companion-animal welfare signals | Marcus Acosta"
      description="A research-engineering proposal for uncertainty-aware, cat-focused audio models that surface observable vocalization patterns and within-animal change for human review."
    >
      <article className="blog-article">
          <div className="center">
            <a className="blog-back" href="/#projects">
              ← Back to projects
            </a>
            <p className="blog-kicker">Research proposal</p>
            <h1>PetAffect</h1>
            <p className="blog-subtitle">
              Uncertainty-aware audio modeling of companion-animal welfare
              signals
            </p>
            <p className="blog-meta">Marcus Acosta</p>

            <h2>Research Focus</h2>
            <p>
              A long-term, audio-first research program investigating whether
              carefully evaluated machine learning can surface structured acoustic
              observations and potential within-animal change for human review,
              without claims of translation, diagnosis, or autonomous
              decision-making.
            </p>
            <p className="blog-scope">
              Initial scope: cat-focused audio research · consent-based data
              design · calibrated uncertainty · human oversight
            </p>

            <h2>The Problem</h2>
            <p>
              Companion animals cannot directly report discomfort, environmental
              distress, fear, or meaningful behavioral change. Caregivers,
              veterinary teams, shelter staff, boarding providers, groomers, and
              animal-welfare researchers must often make judgments from
              incomplete observations: a changed vocalization pattern, a new
              growl or whine, prolonged meowing, altered purring behavior, or a
              departure from an individual animal’s typical acoustic baseline.
            </p>
            <p>
              Those observations can be valuable, but they are inherently
              context-dependent. A vocalization may reflect many possible
              conditions, and recording quality, proximity to the microphone,
              background noise, and individual variation can substantially affect
              interpretation. In practical settings, staff may not have time to
              review every recording or compare an animal’s behavior across days.
            </p>
            <p>
              PetAffect will investigate whether audio models can surface
              structured acoustic observations and possible changes for human
              review. It will not attempt to infer hidden thoughts, translate
              animal language into English, or make autonomous welfare decisions.
            </p>

            <h2>Research Hypothesis</h2>
            <p>The initial research question is:</p>
            <blockquote>
              Can an uncertainty-aware audio model estimate coarse, observable
              vocalization and behavioral-context indicators for cats, and
              identify deviations from an individual animal’s historical acoustic
              baseline, while generalizing to animals, households, sessions, and
              recording conditions not seen during training?
            </blockquote>
            <p>
              The project will begin with cats only. This narrower scope will
              make it possible to focus on annotation quality, recording
              variation, acoustic representation learning, and the practical
              reliability of uncertainty-aware outputs before expanding into
              multimodal work.
            </p>
            <p>
              PetAffect will investigate cautiously framed outputs such as
              vocalization type or acoustic characteristics, low versus high
              acoustic arousal indicators, possible alert or defensive vocal
              patterns, social or interaction context indicators, insufficient
              evidence, and within-animal change from baseline. These will remain
              research estimates of observable patterns, not determinations of
              emotional state, pain, disease, aggression, or intent.
            </p>

            <h2>System Design</h2>
            <p>
              The initial system will center on PetAudio, an audio-learning
              component for analyzing short recordings. It will examine
              vocalizations and acoustic features such as meows, purrs, growls,
              whines, pitch, duration, rhythm, spectral characteristics, temporal
              structure, and changes relative to an individual animal’s historical
              acoustic baseline.
            </p>
            <p>
              PetAudio will pair acoustic preprocessing and learned
              representations with recording-quality estimation and an
              uncertainty-aware output layer. The system will produce coarse
              acoustic-context estimates, a possible within-animal
              baseline-deviation signal where sufficient history exists, and an
              insufficient-evidence or human-review cue when reliable estimation
              is not supported.
            </p>
            <p>
              The architecture will include quality checks and missing-context
              awareness rather than assuming every clip is usable. Low
              signal-to-noise ratio, overlapping human speech, multiple animals,
              clipping, uncertain source attribution, or recordings unlike the
              training distribution may trigger low-confidence outputs or
              abstention.
            </p>
            <p>
              Where a sufficient historical record exists, a longitudinal
              component will compare current acoustic embeddings and engineered
              features with an individual animal’s own reference distribution.
              This may help identify an atypical vocalization pattern relative to
              that animal’s history, even when the pattern is not unusual across
              the wider population.
            </p>

            <h2>Research Methodology</h2>
            <p>
              The initial dataset will be consent-based and privacy-conscious,
              composed of short cat audio sessions with optional structured
              context. Data records may include anonymous animal IDs, session
              IDs, setting labels, recording-device and quality metadata,
              time-related metadata, and carefully minimized contextual
              information.
            </p>
            <p>
              The project will use multiple independent annotations for
              cautiously defined labels. Potential categories will include:
            </p>
            <ul>
              <li>Rest or neutral acoustic context</li>
              <li>Low versus high acoustic arousal indicators</li>
              <li>Alert, avoidant, or defensive vocalization indicators</li>
              <li>Social or play context indicators</li>
              <li>Vocalization class or acoustic event type</li>
              <li>Insufficient evidence or abstain</li>
              <li>Within-animal deviation from historical baseline</li>
            </ul>
            <p>
              Label design will prioritize observable descriptions over presumed
              internal states. Annotators may label what can be heard, such as
              repeated vocalization, growl-like acoustic pattern, vocalization
              duration, quietness, or context cues available in the recording,
              while uncertainty and disagreement are retained as information
              rather than discarded.
            </p>
            <p>
              Data splitting will protect against leakage. Training, validation,
              and testing will be separated by animal identity, household,
              recording session, environment, and, where possible, device type.
              This will reduce the risk that a model succeeds by memorizing a
              particular cat, home acoustics, caregiver voice, or microphone
              profile rather than learning transferable acoustic relationships.
            </p>
            <p>
              The model-development plan will compare interpretable
              feature-based baselines with pretrained audio encoders and
              fine-tuned sequence models. Candidate approaches may include
              mel-spectrogram models, self-supervised audio representations,
              temporal pooling architectures, and models that combine learned
              embeddings with quality and structured metadata. The work will
              evaluate whether audio representations improve over transparent
              handcrafted baselines without sacrificing interpretability or
              reliability.
            </p>

            <h2>Evaluation and Safety</h2>
            <p>
              PetAffect will prioritize evidence quality over a single accuracy
              number. Planned evaluation will include macro F1, per-class recall,
              precision-recall behavior, calibration metrics, expected
              calibration error, risk-coverage curves, abstention performance,
              cross-animal generalization, and robustness to background noise,
              device variation, compression, overlap, and truncated recordings.
            </p>
            <p>
              Calibration will be a core research objective. A model that
              supplies a confidence score is not necessarily well calibrated: a
              prediction reported at high confidence should be correct at
              approximately that rate over comparable examples. PetAffect will
              investigate calibration methods, selective prediction,
              out-of-distribution detection, and conservative abstention policies
              so that uncertain clips are routed for review rather than presented
              with false precision.
            </p>
            <p>
              Longitudinal anomaly detection will be evaluated separately from
              population-level classification. The research question will be
              whether an audio model can identify a meaningful shift from an
              individual animal’s normal acoustic baseline, not whether it can
              identify a cause. Any output will be framed as a possible
              behavioral change requiring human review.
            </p>
            <p>
              What this is not: PetAffect will not be an animal-language
              translator, a system that reads animals’ thoughts, or a tool that
              converts cat vocalizations into English. It will not diagnose pain,
              disease, aggression, or emotional states, and it will not replace a
              qualified veterinarian, animal behavior professional, or
              caregiver’s judgment. Its proposed role is limited to research
              estimates of observable acoustic patterns, calibrated uncertainty,
              and structured review cues.
            </p>

            <h2>Research Roadmap</h2>
            <h3>Phase 1: Cat-focused audio baselines</h3>
            <p>
              The first phase will define a consent and data-governance process,
              annotation protocols, identity-separated evaluation splits,
              recording-quality checks, and interpretable audio baselines. It
              will establish a disciplined foundation for evaluating acoustic
              features and pretrained audio representations on narrowly scoped,
              observable labels.
            </p>
            <h3>
              Phase 2: Multimodal fusion and uncertainty-aware evaluation
            </h3>
            <p>
              Although the initial research scope will remain audio-only,
              multimodal fusion is a highly desired future direction. This phase
              would investigate how PetAudio could be combined with visual
              observations, such as posture, movement, facial action cues, ear or
              tail position, and environmental context, while preserving
              calibrated confidence, missing-modality handling, and abstention
              behavior. Video could offer complementary evidence when audio
              alone is ambiguous, but it would require its own careful
              collection, privacy controls, annotation framework, and
              identity-separated validation.
            </p>
            <h3>
              Phase 3: Longitudinal personalization and behavioral-change
              detection
            </h3>
            <p>
              Longitudinal modeling is also a major future research interest.
              This phase would investigate personalized acoustic baselines and,
              potentially, multimodal temporal histories to identify sustained
              deviations from an individual animal’s normal observable behavior.
              The goal would remain conservative: flagging a possible change for
              review, not assigning a diagnosis or asserting an underlying cause.
            </p>

            <h2>Open Science and Reproducibility</h2>
            <p>
              I am approaching PetAffect as both a machine-learning research
              question and a production ML systems challenge. My background in AI
              infrastructure, model evaluation, low-latency inference, reliable
              deployment, and open-source LLM inference and post-training
              tooling will shape the project’s technical direction.
            </p>
            <p>
              When ethical and legal constraints permit, I plan to publish
              dataset documentation, annotation guidance, model cards, experiment
              configurations, training code, benchmark definitions, and
              evaluation tooling. Documentation will identify intended uses,
              non-intended uses, known limitations, uncertainty behavior, data
              gaps, and deployment risks.
            </p>
            <p>
              The project will treat data provenance, versioning, model
              reproducibility, observability, and failure analysis as first-class
              engineering concerns. Any future serving system will be designed
              around privacy-aware data handling, auditability, clear abstention
              behavior, and explicit human oversight rather than autonomous
              decision-making.
            </p>

            <h2>What Success Would Mean</h2>
            <p>
              Success would not mean asserting that a model understands what a
              cat is thinking or feeling. It would mean producing rigorous
              evidence about a more constrained question: whether audio-based ML
              can estimate carefully defined observable vocalization patterns,
              communicate uncertainty honestly, and identify possible
              individual-level acoustic changes that merit human attention.
            </p>
            <p>
              A useful outcome would be a reproducible, carefully scoped research
              foundation: transparent baselines, robust identity-separated
              evaluation, conservative abstention policies, and documentation
              that makes failures as visible as successes. It could establish a
              credible path toward future multimodal and longitudinal research
              without assuming that audio alone can resolve ambiguous welfare
              questions.
            </p>
            <p>
              PetAffect is a long-term research-engineering program that I plan
              to develop alongside graduate computer-science coursework. I
              welcome collaboration from animal-welfare researchers, veterinary
              professionals, shelters, rescues, and ML practitioners interested
              in responsible data collection, animal-behavior measurement, audio
              ML, multimodal research, and uncertainty-aware AI systems.
            </p>
          </div>
        </article>
    </WritingLayout>
  );
}
