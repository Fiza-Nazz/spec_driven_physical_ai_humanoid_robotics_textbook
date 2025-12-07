---
id: 0027
title: Update Footer Instagram Link
stage: red
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: 001-robotics-docs
branch: 001-robotics-docs
user: (unknown)
command: https://www.instagram.com/zii_tech_63?igsh=eDg5ZnA4ZmUyb3B6 instagarm m y link add krdoo
labels: ["implementation","ui/ux","docusaurus","footer","social-links"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- book-docs/docusaurus.config.js
tests:
null
---

## Prompt

```text
https://www.instagram.com/zii_tech_63?igsh=eDg5ZnA4ZmUyb3B6 instagarm m y link add krdoo
```

## Response snapshot

```text
I have updated the Instagram link in your `book-docs/docusaurus.config.js` file to the URL you provided.

**Summary of Changes**:
*   The `href` for the "Instagram" link within the "Social Profiles" section of your footer has been updated to `https://www.instagram.com/zii_tech_63?igsh=eDg5ZnA4ZmUyb3B6`.

To ensure you see this change reflected on your site, please perform the following steps:
1.  **Stop** any running Docusaurus development server (if it's still running, or stuck in a loop).
2.  Navigate to the `book-docs/` directory: `cd book-docs`
3.  **Clear Docusaurus cache and build artifacts**: `npm run clear`
4.  **Restart the development server**: `npm start`

After these steps, the Instagram link in your footer should be active with the correct URL.
```

## Outcome

- ✅ Impact: Successfully updated the Instagram link in the footer configuration.
- 🧪 Tests: Manual verification by user requested.
- 📁 Files: Modified docusaurus.config.js.
- 🔁 Next prompts: User to follow instructions and verify.
- 🧠 Reflection: Successfully handled a specific social media link update within the footer, reiterating the necessary verification steps for the user.

## Evaluation notes (flywheel)

- Failure modes observed: (empty)
- Graders run and results (PASS/FAIL): (empty)
- Prompt variant (if applicable): (empty)
- Next experiment (smallest change to try): (empty)
