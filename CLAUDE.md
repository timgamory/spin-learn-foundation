# Spin & Learn Foundation Website

React + Express website for the Spin & Learn Foundation, a Bronx-based table tennis nonprofit. Built with TypeScript, Vite, Tailwind CSS, and tRPC.

## Project Structure

- `client/src/pages/` — Page components (Home, About, Programs, Contact, etc.)
- `client/src/components/` — Reusable UI components
- `server/` — Express API backend
- `shared/` — Types shared between client and server

## Claude's Workflow Instructions

**At session start**: Immediately call `preview_start` with `name="dev"` before responding. This starts the live preview so the editor can see the site.

**After making changes**: Proactively offer to save. Use commit format: `Checkpoint: [plain-English description of what changed]`

**Phrases to listen for**:
- "save my changes" / "commit" → `git add -A && git commit -m "Checkpoint: [description]"`
- "push my changes" / "send to GitHub" → commit (if needed), push to `main`, open a PR
- "get updates" / "pull" / "sync" → `git pull origin main`
- "undo my last change" → `git revert HEAD --no-edit`
- "what changed?" → `git log --oneline -10`

**Always explain in plain English**: No jargon, no terminal commands in responses unless explaining how to run them. Describe changes in terms of what the visitor will see on the website.

**Never without explicit confirmation**: force-push, hard reset, delete branches, drop database tables, or run any destructive command. These are also blocked by guardrails.

---

## Editor's Guide

> This section is for the human editor. Claude can read it aloud or answer questions about any step.

### First-time setup (do once)

1. Install Node.js via Homebrew — open Terminal and run: `brew install node`
2. Install pnpm: `npm install -g pnpm`
3. Install [Claude Code](https://claude.ai/code) on your computer
4. Clone the project: `git clone [repo-url] && cd spin-learn-foundation && pnpm install`
   *(Tim will send you the exact repo URL)*
5. Open the `spin-learn-foundation` folder in Claude Code

> If the preview doesn't start automatically, tell Claude: "start the preview server"

---

### Your daily workflow

**Starting a session**
1. Open Claude Code in the `spin-learn-foundation` folder
2. The live preview starts automatically — click the link Claude shows you to see the site
3. Describe what you want to change in plain English

Examples of things you can say:
- "Change the headline on the home page to say..."
- "Remove the photo on the About page"
- "Update the contact email to..."
- "Make the Programs page mention our new Tuesday sessions"

**Saving your work**

Say: **"save my changes"**

Claude will create a checkpoint with a description of what changed.

**Sharing changes to GitHub (for deployment or collaboration)**

Say: **"push my changes"**

Claude will save your work and open a pull request on GitHub. You (or Tim) can then review and merge it.

**Getting the latest updates** (after someone else made changes)

Say: **"get the latest updates"**

Claude will pull the newest version from GitHub.

**Undoing a change**

Say: **"undo my last change"**

Claude will reverse the most recent save. If you need to go back further, say "undo the last 2 changes" etc.

---

### What NOT to do

- Don't ask Claude to "force push" or "reset" — these are blocked for safety
- Don't ask Claude to delete branches
- If something looks seriously wrong, say **"nothing looks right, let's start over"** and Claude will help you recover

---

### Getting help

If you're ever unsure what to do, just describe the problem out loud to Claude. For example:
- "The site looks broken, what happened?"
- "I don't understand what you just did"
- "Show me what the page looks like now"
