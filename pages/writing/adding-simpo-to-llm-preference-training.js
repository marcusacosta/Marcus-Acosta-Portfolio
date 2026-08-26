import Link from "next/link";
import WritingLayout from "../../components/WritingLayout";

export default function AddingSimpoPost() {
  return (
    <WritingLayout
      title="Adding SimPO to LLM Preference Training | Marcus Acosta"
      description="A write-up of adding native SimPO support to an open-source PyTorch post-training library, including the loss interface, tests, and what stayed unchanged for DPO and RSO."
    >
      <article className="blog-article">
          <div className="center">
            <Link className="blog-back" href="/#projects">
              ← Back to projects
            </Link>
            <p className="blog-kicker">Open source</p>
            <h1>Adding SimPO to LLM Preference Training</h1>
            <p className="blog-meta">Marcus Acosta</p>

            <h2>Overview</h2>
            <p>
              I added native support for SimPO, or Simple Preference Optimization,
              to an open-source PyTorch post-training library.
            </p>
            <p>
              The contribution adds a new preference loss, a runnable LoRA
              configuration, unit tests, and a GPU integration test. It also adds
              a small interface change so each preference-training method receives
              the response score required by its objective while existing DPO and
              RSO behavior remains unchanged.
            </p>

            <h2>Preference Training</h2>
            <p>
              Preference training improves a language model using examples where
              one answer is preferred over another answer for the same prompt.
            </p>
            <pre>
              <code>{`Prompt:
Explain why the sky appears blue.

Preferred response:
Sunlight scatters in the atmosphere, and shorter blue wavelengths scatter
more strongly than longer wavelengths.

Rejected response:
The sky is blue because the ocean reflects into the air.`}</code>
            </pre>
            <p>
              The model is trained to increase the likelihood of producing
              responses like the preferred answer and decrease the likelihood of
              producing responses like the rejected answer.
            </p>
            <p>
              The existing pipeline supported Direct Preference Optimization, or
              DPO, and RSO. These methods use paired examples containing a prompt,
              a preferred response, and a rejected response.
            </p>
            <p>
              SimPO uses the same paired data format, but it requires a different
              response-scoring method.
            </p>

            <h2>Response Length</h2>
            <p>
              Language models generate output as tokens. Tokens can be words,
              portions of words, punctuation, or other text fragments.
            </p>
            <p>
              The existing DPO pipeline calculated a response score by summing the
              model’s confidence across generated tokens. SimPO requires the
              average confidence per response token.
            </p>
            <p>
              This difference matters when the two responses have different
              lengths.
            </p>
            <p>Imagine two students answering the same essay question.</p>
            <ul>
              <li>Student A writes 500 words.</li>
              <li>Student B writes 250 words.</li>
            </ul>
            <p>
              If a grader assigns a quality score to each sentence and adds every
              score, Student A may receive a higher total simply because the
              answer contains more sentences.
            </p>
            <p>
              Average sentence quality gives a different measure. It answers
              whether each sentence was strong on average rather than how much
              quality accumulated across the full essay.
            </p>
            <p>
              SimPO applies that same idea to generated model output. It compares
              average model confidence across response tokens so response length
              does not determine the result.
            </p>

            <h2>Implementation</h2>
            <p>
              I traced the preference-training path from dataset record to
              gradient update:
            </p>
            <pre>
              <code>{`Chosen/rejected dataset
→ Tokenization and prompt masking
→ Padded batch collation
→ Model forward pass
→ Per-token log probabilities
→ Response-level aggregation
→ Preference loss
→ Backpropagation`}</code>
            </pre>
            <p>
              The codebase already supported both total and average response
              scores. The DPO recipes, however, always passed the summed score
              into preference losses.
            </p>
            <p>
              That behavior is correct for DPO and RSO. It is not correct for
              SimPO.
            </p>
            <p>
              I added a native <code>SimPOLoss</code> and a new property on the
              preference-loss interface:
            </p>
            <pre>
              <code>return_average_logprobs</code>
            </pre>
            <p>
              Each loss now communicates the aggregation it requires:
            </p>
            <pre>
              <code>{`DPO and RSO: summed response log probabilities
SimPO: average response-token log probabilities`}</code>
            </pre>
            <p>
              DPO and RSO retain the default <code>False</code> value. SimPO sets
              the property to <code>True</code>. The recipe then provides average
              masked log probabilities to SimPO without changing existing DPO or
              RSO calculations.
            </p>

            <h2>Reference-Free Training</h2>
            <p>
              SimPO is reference-free during loss computation.
            </p>
            <p>
              DPO typically compares the trainable model against a frozen
              reference model during each training step. SimPO computes its
              objective directly from the trainable model’s scores for the
              preferred and rejected answers.
            </p>
            <p>
              The existing recipe already included a reference-free path. SimPO
              uses that path and skips the additional reference-model forward
              pass.
            </p>
            <p>
              This does not prove that all SimPO runs use less memory.
              Full-training configurations may still create a reference model
              during setup even when SimPO does not use it during the loss
              calculation.
            </p>

            <h2>Validation</h2>
            <p>The contribution includes:</p>
            <ul>
              <li>
                A native PyTorch <code>SimPOLoss</code>.
              </li>
              <li>
                A loss-level switch between summed and average response log
                probabilities.
              </li>
              <li>
                Recipe wiring for single-device LoRA, distributed LoRA, and full
                distributed preference training.
              </li>
              <li>
                A runnable <code>llama3_1/8B_lora_simpo_single_device</code>{" "}
                configuration.
              </li>
              <li>Unit tests for the SimPO objective and reward outputs.</li>
              <li>
                Tests that confirm reference-free losses accept empty reference
                inputs.
              </li>
              <li>Gradient and finite-value checks.</li>
              <li>
                A regression test showing why summed and average scores differ
                for outputs with different lengths.
              </li>
              <li>
                A one-step GPU integration test that uses the SimPO
                configuration.
              </li>
            </ul>

            <h2>Scope</h2>
            <p>
              The contribution preserves existing DPO and RSO behavior.
            </p>
            <pre>
              <code>{`DPO and RSO use summed response scores.
SimPO uses average response-token scores.`}</code>
            </pre>
            <p>
              It does not add optional SimPO features such as a supervised
              fine-tuning term, hinge loss, or label smoothing. It also does not
              modify reference-model setup in full DPO training.
            </p>

            <h2>Next Steps</h2>
            <p>
              I opened the work as a draft for maintainer feedback on two
              questions:
            </p>
            <ol>
              <li>
                Should preference losses specify whether they require summed or
                average response scores?
              </li>
              <li>
                Should SimPO be included in the stable public API or begin as an
                experimental feature?
              </li>
            </ol>
            <p>
              If accepted, users can run SimPO through the existing command-line
              workflow:
            </p>
            <pre>
              <code>{`tune run lora_dpo_single_device \\
  --config llama3_1/8B_lora_simpo_single_device`}</code>
            </pre>
            <p>
              The next technical step is GPU-backed integration validation
              followed by controlled SimPO and DPO comparisons using fixed
              models, datasets, hyperparameters, hardware, and evaluation
              criteria.
            </p>
            <p>
              For background, see the{" "}
              <a
                href="https://arxiv.org/abs/2405.14734"
                target="_blank"
                rel="noopener noreferrer"
              >
                SimPO paper
              </a>{" "}
              and the authors’{" "}
              <a
                href="https://github.com/princeton-nlp/SimPO"
                target="_blank"
                rel="noopener noreferrer"
              >
                reference implementation
              </a>
              .
            </p>
          </div>
        </article>
    </WritingLayout>
  );
}
