Model Playbook for OpenCode/OpenChamber

Goal
- Provide pragmatic guidelines for selecting among available AI models (GPT-5 Nano, Minimax M2.5 Free, Big Pickle, Gemini 3 Flash Preview, Claude) within OpenCode/OpenChamber, to maximize development velocity while maintaining code quality and reliability.

1. Core principles
- There is no single “best” model for every task. Choose based on task type, reliability, latency, cost, and data privacy.
- Prioritize a single working model path for day-to-day work to maintain consistency; use secondary models for cross-checks or edge cases.
- Always validate outputs with tests and code reviews; treat model output as a starting point, not truth.
- Track results and learn which prompts and models work best for your stack to improve over time.

2. Model-specific considerations (current options)
- GPT-5 Nano: strongest general-purpose generation and code scaffolding; good for nested reasoning and long prompts.
- Minimax M2.5 Free: cost-effective, fast for quick edits and boilerplate; useful for non-critical tasks.
- Big Pickle: creative or outside-the-box tasks; use when you need divergent ideas or unusual approaches.
- Gemini 3 Flash Preview: reputedly reliable session refresh and stability; strong baseline for long-running tasks and iterative work.
- Claude (optional): strong instruction-following and reasoning; consider for specialized tasks or cross-checks if available.

3. Suggested usage patterns
- Default workhorse: pick one model (e.g., GPT-5 Nano or Gemini 3) as your primary tool for coding tasks; stay consistent to build muscle memory and repository conventions.
- Cross-check: for critical code paths, generate with two models and compare; manually reconcile differences.
- Quick iterations: use Minimax M2.5 Free for rapid scaffolding or minor edits.
- Deep architecture work: use a model with strong reasoning and code understanding; switch between primary and Gemini/Claude as needed.
- Reliability/refresh needs: if stable context/session refresh is vital, lean on Gemini 3 Flash Preview or choose the model that your environment confirms is most reliable for your use case.
- Privacy/compliance: prefer models with explicit privacy controls and on-premises options if your code or data is sensitive.

4. Practical workflow
- Define a task as a concrete outcome (e.g., “generate a React component that renders X and includes unit tests”).
- Run with the default model; skim output for correctness and style.
- If output is insufficient, re-run with a different model and compare.
- Write tests or review code; iterate until confidence is high.
- Document lessons learned (prompts, model, settings) for future tasks.

5. Anxiety mitigation
- Build a reliable muscle by focusing on repeatable patterns, not chasing the “perfect model.”
- Treat model outputs as assistive, not authoritative; maintain ownership of code quality with reviews and tests.
- Create a personal "playbook" of prompts and templates that yield consistent results.

6. Decision guidance
- If you need refresh reliability and stable iteration: Gemini 3 Flash Preview (baseline).
- For code scaffolding and complex reasoning: GPT-5 Nano or Claude (if available) as primary.
- For rapid iterations: Minimax M2.5 Free.
- For unconventional or creative approaches: Big Pickle.
- Use dual-model cross-check selectively for high-risk changes.

7. Next steps
- If you want, I can add a lightweight evaluation harness in the repo to benchmark these models on representative tasks and capture results over time.
