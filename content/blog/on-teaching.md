When I designed the experiment for my M1 thesis, the central question was deceptively simple: *can a teacher transmit a policy to a learner through description alone?*

The task was a deterministic contextual bandit. A teacher, having learned which stimulus-action mapping maximizes reward, writes a short description. A naive learner reads it, then plays the same task. The question: does the learner do better than chance? Does the teacher's description encode the rule — the *policy* — faithfully enough to transfer it?

The answer, unsurprisingly, is: sometimes. And the interesting question is when, and why.

---

## What makes teaching hard

Transmission of knowledge is not just a compression problem. A teacher who has learned to act in a world knows something, but the form of that knowledge — whether it is explicit, rule-based, or tacit and procedural — shapes what can be expressed and what the learner can reconstruct.

In reinforcement learning terms: a model-based agent who maintains a cognitive map can narrate their strategy. A model-free agent who has learned via experience may struggle to articulate what they know at all. Teaching is not simply exporting a Q-table.

This asymmetry between what is *known* and what is *sayable* is what makes behavioral experiments on teaching worth running. Computational modeling gives us a language for the difference.

---

*This is a draft. More to come.*
