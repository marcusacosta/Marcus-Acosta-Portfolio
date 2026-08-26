import Link from "next/link";
import WritingLayout from "../../components/WritingLayout";

export default function IntentAwarePagedAttentionPost() {
  return (
    <WritingLayout
      title="Building Intent-Aware Configuration for LLM Serving | Marcus Acosta"
      description="A write-up of carrying PagedAttention intent through mistral.rs so explicit configuration is enforced instead of silently falling back."
    >
      <article className="blog-article">
        <div className="center">
          <Link className="blog-back" href="/#projects">
            ← Back to projects
          </Link>
          <p className="blog-kicker">Open source</p>
          <h1>Building Intent-Aware Configuration for LLM Serving</h1>
          <p className="blog-meta">Marcus Acosta</p>

          <p>
            I extended mistral.rs so PagedAttention configuration represents an
            operator&apos;s deployment policy, not just a best-effort runtime
            toggle.
          </p>
          <p>
            The contribution carries PagedAttention intent from the CLI and Rust
            SDK through device validation, model loading, cache initialization,
            and scheduler selection. Automatic configuration can still fall back
            safely when unsupported. Explicit configuration is enforced: the
            engine either realizes PagedAttention or returns a specific startup
            error.
          </p>

          <h2>The design problem</h2>
          <p>
            PagedAttention manages an LLM&apos;s KV cache, the short-term memory
            used during token generation. It affects how cache memory is
            allocated, the scheduler used to serve requests, and the number of
            concurrent sequences a deployment can support.
          </p>
          <p>mistral.rs supports three PagedAttention modes:</p>
          <pre>
            <code>{`auto: Enable PagedAttention when the runtime supports it.
on: Require PagedAttention for this deployment.
off: Do not use PagedAttention.`}</code>
          </pre>
          <p>
            At first, this looks like a simple on-or-off setting. It is not.
          </p>
          <p>These modes express three different policies:</p>
          <pre>
            <code>{`auto: Try it if possible.
on: It must work.
off: Do not attempt it.`}</code>
          </pre>
          <p>
            A Boolean cannot fully represent those policies once configuration
            moves beyond the CLI boundary.
          </p>
          <p>
            For example, on CUDA, both <code>auto</code> and <code>on</code> can
            initially become “enable PagedAttention.” If later code discovers
            that the model, device map, or pipeline cannot support it, a plain{" "}
            <code>enabled = true</code> value does not say whether fallback is
            acceptable.
          </p>
          <p>That was the architectural gap I addressed.</p>

          <h2>Preserving intent</h2>
          <p>The CLI already represented the three modes:</p>
          <pre>
            <code>{`auto → None
on   → Some(true)
off  → Some(false)`}</code>
          </pre>
          <p>
            But later parts of the system mostly saw only whether a
            PagedAttention configuration existed. Once <code>auto</code> and{" "}
            <code>on</code> both created a configuration, loaders and scheduler
            code could not distinguish an optional optimization from a required
            serving policy.
          </p>
          <p>I extended the existing configuration object with one field:</p>
          <pre>
            <code>{`PagedAttentionConfig {
    required: bool,
}`}</code>
          </pre>
          <p>
            The field defaults to <code>false</code>.
          </p>
          <pre>
            <code>{`auto that enables PagedAttention
→ Some(PagedAttentionConfig { required: false })

on
→ Some(PagedAttentionConfig { required: true })

off
→ None`}</code>
          </pre>
          <p>
            This is intentionally a small change. It does not introduce a new
            configuration hierarchy or require every loader to adopt a new
            interface. It preserves the missing policy signal in the object that
            already travels through the inference stack.
          </p>

          <h2>An NFL analogy</h2>
          <p>Think of PagedAttention as a goal-line package.</p>
          <pre>
            <code>{`auto: Use the goal-line package if the needed players are available.
on: The goal-line package is required. Do not run the play without it.
off: Use the standard offense.`}</code>
          </pre>
          <p>
            If the line between <code>auto</code> and <code>on</code> disappears
            after the coach makes the call, the staff cannot know whether it is
            allowed to substitute the normal offense.
          </p>
          <p>
            The system needs the play call to retain its meaning until the snap.
          </p>
          <p>
            That is what <code>required: bool</code> does for PagedAttention. It
            keeps the operator&apos;s original policy attached to the runtime
            configuration until the server is ready to accept requests.
          </p>

          <h2>Centralizing fallback decisions</h2>
          <p>
            Before this work, different model-loading paths could disable
            PagedAttention independently.
          </p>
          <p>
            Some paths issued a warning. Others silently removed the
            PagedAttention configuration. These paths included unsupported
            models, mixed CPU and accelerator device maps, adapter
            configurations, GGML models, speech pipelines, embeddings, diffusion
            models, and other specialized loaders.
          </p>
          <p>I introduced one shared policy boundary:</p>
          <pre>
            <code>{`disable_paged_attention(
    &mut Option<PagedAttentionConfig>,
    reason,
) -> Result<()>`}</code>
          </pre>
          <p>
            The loader supplies the compatibility reason. The shared helper
            applies the operator&apos;s policy.
          </p>
          <table>
            <thead>
              <tr>
                <th>Configuration state</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No PagedAttention config</td>
                <td>Do nothing</td>
              </tr>
              <tr>
                <td>Automatic PagedAttention</td>
                <td>Log the reason, remove the config, continue</td>
              </tr>
              <tr>
                <td>Required PagedAttention</td>
                <td>Return an error and stop initialization</td>
              </tr>
            </tbody>
          </table>
          <p>That separates responsibilities cleanly:</p>
          <pre>
            <code>{`Loaders know whether a model or device arrangement is compatible.
Configuration knows whether fallback is allowed.
The shared helper combines the two.`}</code>
          </pre>
          <p>
            A loader no longer decides independently whether a PagedAttention
            failure should be tolerated.
          </p>

          <h2>Example: mixed CPU and GPU placement</h2>
          <p>
            A deployment may place part of a model on the GPU and part on the
            CPU to fit limited VRAM. In this configuration, the relevant
            PagedAttention path cannot be used because it does not provide a CPU
            KV-cache path.
          </p>
          <p>
            With <code>auto</code>, the correct behavior is:
          </p>
          <pre>
            <code>{`PagedAttention disabled: device mapping includes CPU and PagedAttention
has no CPU KV cache.`}</code>
          </pre>
          <p>
            The server can continue using eager KV caching because the operator
            allowed a fallback.
          </p>
          <p>
            With <code>on</code>, the correct behavior is different:
          </p>
          <pre>
            <code>{`PagedAttention was explicitly requested (--paged-attn on),
but device mapping includes CPU and PagedAttention has no CPU KV cache.`}</code>
          </pre>
          <p>The server does not start.</p>
          <p>
            The difference is not whether the model can run. The difference is
            whether the runtime can meet the deployment policy the operator
            requested.
          </p>

          <h2>Enforcing policy at the device boundary</h2>
          <p>
            The first place the system can determine whether PagedAttention is
            possible is the device and build check.
          </p>
          <p>I updated this path to return a decision that includes:</p>
          <pre>
            <code>{`enabled
required
reason`}</code>
          </pre>
          <p>That produces predictable behavior:</p>
          <table>
            <thead>
              <tr>
                <th>Request</th>
                <th>CPU result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>auto</code>
                </td>
                <td>
                  Disable PagedAttention, emit an informational reason, continue
                </td>
              </tr>
              <tr>
                <td>
                  <code>on</code>
                </td>
                <td>
                  Return an error naming CPU support and{" "}
                  <code>--paged-attn on</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>off</code>
                </td>
                <td>Disable PagedAttention quietly</td>
              </tr>
            </tbody>
          </table>
          <p>Existing defaults remain unchanged:</p>
          <pre>
            <code>{`CUDA auto: Attempts to enable PagedAttention.
Metal auto: Keeps PagedAttention disabled by default.
CPU auto: Keeps PagedAttention disabled.`}</code>
          </pre>
          <p>
            The change does not add new CUDA kernels, change Metal defaults, or
            introduce NCCL PagedAttention support. It makes the existing
            configuration behavior explicit and enforceable.
          </p>

          <h2>Verifying realized state</h2>
          <p>
            A user request is not the same as a realized system state.
          </p>
          <p>
            The user may request PagedAttention, but model loading can still
            fail to create the required cache configuration. The scheduler must
            therefore validate the final pipeline metadata before serving
            requests.
          </p>
          <p>
            I added a shared scheduler decision function that compares:
          </p>
          <pre>
            <code>{`Requested configuration:
Did the operator request PagedAttention?

Realized configuration:
Did the loaded pipeline create a PagedAttention cache?`}</code>
          </pre>
          <p>The resulting policy is:</p>
          <table>
            <thead>
              <tr>
                <th>Requested config</th>
                <th>Required</th>
                <th>Realized cache</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No</td>
                <td>N/A</td>
                <td>No</td>
                <td>
                  Use <code>DefaultScheduler</code>
                </td>
              </tr>
              <tr>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>
                  Log a warning and use <code>DefaultScheduler</code>
                </td>
              </tr>
              <tr>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>Return an error</td>
              </tr>
              <tr>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>
                  Use <code>PagedAttentionMeta</code>
                </td>
              </tr>
              <tr>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>
                  Use <code>PagedAttentionMeta</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>This is the final backstop.</p>
          <p>
            Even if a future loader accidentally loses a PagedAttention cache
            configuration, the scheduler will not quietly accept a required
            request and start with <code>DefaultScheduler</code>.
          </p>

          <h2>Why the scheduler matters</h2>
          <p>
            PagedAttention is connected to how the engine allocates KV-cache
            memory and schedules concurrent requests. It is commonly used with
            block-based cache allocation, prefix caching, and continuous
            batching in high-throughput LLM serving systems.{" "}
            <a
              href="https://github.com/EricLBuehler/mistral.rs/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              mistral.rs README
            </a>
          </p>
          <p>
            If the engine silently selects a non-paged scheduler after an
            explicit PagedAttention request, the deployment may still start and
            generate output. But its memory profile, concurrency behavior, and
            benchmark results no longer represent the intended serving
            configuration.
          </p>
          <p>
            The scheduler guard makes that mismatch visible before the server
            begins accepting traffic.
          </p>

          <h2>Extending the Rust SDK contract</h2>
          <p>The Rust SDK had the same policy issue.</p>
          <p>
            Its <code>with_paged_attn</code> method could silently ignore an
            explicit request when the current build did not support
            PagedAttention. I changed it to preserve the request as required
            configuration.
          </p>
          <p>The result is an intentional behavior change:</p>
          <pre>
            <code>{`Before:
Explicit SDK request on an unsupported environment
→ Request may be ignored.

After:
Explicit SDK request on an unsupported environment
→ Loading returns an actionable error.`}</code>
          </pre>
          <p>
            This is stricter, but it is more honest. An explicit API request
            should not disappear without the caller&apos;s knowledge.
          </p>

          <h2>Testing the policy without GPUs</h2>
          <p>
            PagedAttention is tied to accelerator-backed inference, but the core
            behavior in this contribution is configuration policy and scheduler
            selection.
          </p>
          <p>
            I extracted those decisions into testable helpers and added CPU-only
            regression coverage for:
          </p>
          <ul>
            <li>
              CLI mapping of <code>auto</code>, <code>on</code>, and{" "}
              <code>off</code>
            </li>
            <li>Default and required configuration construction</li>
            <li>
              Automatic fallback versus required failure in{" "}
              <code>disable_paged_attention</code>
            </li>
            <li>CPU behavior for all three modes</li>
            <li>Unsupported-build behavior</li>
            <li>
              Scheduler rejection when a required request has no realized cache
            </li>
            <li>
              Automatic fallback to <code>DefaultScheduler</code>
            </li>
            <li>
              Successful selection of <code>PagedAttentionMeta</code> when cache
              metadata exists
            </li>
          </ul>
          <p>
            This made it possible to validate the critical contract without
            downloading models or requiring CUDA or Metal hardware.
          </p>

          <h2>Scope</h2>
          <p>
            This contribution improves configuration semantics and serving
            reliability. It does not attempt to solve every PagedAttention
            limitation.
          </p>
          <p>It does not:</p>
          <ul>
            <li>Add NCCL PagedAttention support.</li>
            <li>Change CUDA or Metal defaults.</li>
            <li>
              Update the Python <code>paged_attn</code> and{" "}
              <code>no_paged_attn</code> API.
            </li>
            <li>Add Windows CUDA PagedAttention support.</li>
            <li>Modify external KV-cache connectors.</li>
            <li>Add live GPU integration coverage.</li>
            <li>
              Remove the engine-level <code>no_kv_cache</code> path that can
              still remap a PagedAttention scheduler to{" "}
              <code>DefaultScheduler</code>.
            </li>
          </ul>
          <p>
            Those are separate follow-up areas. Keeping them out of this change
            made the design reviewable and the tests focused on one contract.
          </p>

          <h2>What I learned</h2>
          <p>
            Configuration values should preserve intent, not just state.
          </p>
          <p>
            A setting can look like a Boolean while carrying a policy:
          </p>
          <pre>
            <code>{`Try this when possible.
Require this to be true.
Never do this.`}</code>
          </pre>
          <p>
            If that policy is reduced too early to “enabled” or “disabled,”
            later components cannot make the correct decision.
          </p>
          <p>
            This contribution adds a small field, a shared disable helper, and a
            scheduler-level guard. Together, they turn PagedAttention into an
            intent-aware serving policy rather than a best-effort toggle.
          </p>
          <p>The final operator contract is straightforward:</p>
          <pre>
            <code>{`--paged-attn on means PagedAttention is active, or mistral.rs does not start.`}</code>
          </pre>
        </div>
      </article>
    </WritingLayout>
  );
}
