---
title: "Automate the Tedious: Building Your First Skill"
description: "That repetitive task you do every week? You can teach Claude Code to handle it. Here's how to turn tedious processes into reusable skills."
pubDate: 2026-02-03
author: "Keanan Koppenhaver"
kitTagId: "14154457"
tags: ["skills", "automation", "tutorial"]
categories: ["Workflows"]
draft: false
howTo:
  name: "Build Your First Claude Code Skill"
  description: "Step-by-step guide to creating a skill that automates repetitive tasks"
  totalTime: "PT20M"
  steps:
    - name: "Identify Your Tedious Task"
      text: "Pick a repetitive task you do weekly — something with clear steps that feels mechanical."
    - name: "Create the SKILL.md File"
      text: "Write a Markdown file describing what the skill does, when to use it, and the step-by-step process."
    - name: "Define the Trigger in Frontmatter"
      text: "Add YAML frontmatter with name and description fields that tell Claude when this skill applies."
    - name: "Write Clear Instructions"
      text: "Document the process in plain English, like you're explaining it to a colleague."
    - name: "Add Scripts (Optional)"
      text: "For reliable, repeatable operations, add Python or Bash scripts that handle the mechanical work."
    - name: "Test and Iterate"
      text: "Use the skill on a real task, notice what works and what doesn't, refine the instructions."
---

## The Weekly Ritual You'd Rather Forget

Every Tuesday morning, you pull up the same spreadsheet. You copy data from three different tools. You format it into the same report template. You email it to the same four people.

It takes twenty minutes. It's not hard. It's just... tedious.

You tell yourself you'll automate it someday. Write a script. Build a workflow. But someday never comes because the task isn't *broken* — it's just boring.

## What If Your Assistant Just Knew How?

Here's the thing: that tedious process? You already know exactly how to do it. The steps are in your head. The problem is getting them out — and making them repeatable without your involvement.

**Skills** are how you teach Claude Code to handle these processes for you. Think of it as documenting a procedure once, then having an assistant who remembers it perfectly and never gets tired of running it.

The best part: you don't need to "learn to code." You just need to describe what you do in plain English. If you can explain it to a colleague, you can turn it into a skill.

## What a Skill Actually Is

A skill is simpler than you might expect. At minimum, it's just:

1. **SKILL.md** — A Markdown file describing what the skill does and when to use it
2. **Optional extras** — Scripts, templates, or reference files for more complex tasks

That's it. No special syntax to learn. No framework to install. Just a folder with a Markdown file and whatever helpers you need.

Here's what a minimal skill looks like:

```
weekly-metrics/
├── SKILL.md          # The instructions
└── scripts/
    └── fetch_data.py # (Optional) Code that does the work
```

Most skills start as just a Markdown file. You only add scripts when you need rock-solid reliability for something you'll run repeatedly.

## Building a Real Skill: Weekly Performance Reports

Let's walk through something concrete. Say you run a weekly website performance report that involves:

1. Fetching analytics data from an API
2. Formatting key metrics into a summary
3. Generating a clean report to share

Here's how you'd turn that into a skill.

### Step 1: Define the Trigger

The frontmatter of SKILL.md tells Claude when this skill applies:

```yaml
---
name: weekly-performance-report
description: Generate weekly website performance reports by fetching analytics data, calculating key metrics, and formatting output for stakeholder sharing. Use when the user asks for performance reports, weekly metrics, analytics summaries, or needs to compile website statistics.
---
```

The `description` is crucial — it's how Claude decides whether to use this skill. Be specific about *what* it does and *when* to trigger it.

### Step 2: Write the Instructions

The body of SKILL.md is just plain English instructions. Write it like you're explaining the process to a colleague:

```markdown
# Weekly Performance Report

## What This Skill Does

Fetches website analytics data and generates a formatted performance report for stakeholder sharing.

## The Process

1. **Fetch data** from the analytics API
   - Endpoint: `/api/v1/metrics`
   - Parameters: last 7 days, all tracked properties
   
2. **Calculate key metrics**
   - Total page views
   - Unique visitors
   - Average session duration
   - Top 5 pages by traffic

3. **Format the output**
   - Use the report template structure
   - Include week-over-week comparison
   - Highlight any metrics that changed >10%

4. **Generate deliverable**
   - Create clean Markdown report
   - Include executive summary at top
   - Add raw data table at bottom

## When Code Is Needed

For reliable, repeatable data fetching, use the provided script:

```bash
python scripts/fetch_analytics.py --week=$(date +%V) --year=$(date +%Y)
```

The script handles authentication, rate limiting, and error retry logic.
```

Notice: no special syntax. No rigid structure. Just clear instructions anyone could follow.

### Step 3: Add Code (Only When It Helps)

For the API-calling part, you might want a script. Here's what that looks like:

```python
#!/usr/bin/env python3
import requests
import os
from datetime import datetime, timedelta

def fetch_analytics(week, year):
    """Fetch analytics data for specified week."""
    
    # Calculate date range
    start_date, end_date = week_to_dates(week, year)
    
    # API call with proper error handling
    headers = {"Authorization": f"Bearer {os.getenv('ANALYTICS_API_KEY')}"}
    params = {"start": start_date, "end": end_date}
    
    response = requests.get(
        "https://api.analytics.example.com/v1/metrics",
        headers=headers,
        params=params
    )
    response.raise_for_status()
    
    return response.json()

def week_to_dates(week, year):
    """Convert week number to start/end dates."""
    start = datetime.strptime(f"{year}-W{week}-1", "%Y-W%W-%w")
    end = start + timedelta(days=6)
    return start.strftime("%Y-%m-%d"), end.strftime("%Y-%m-%d")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--week", required=True, type=int)
    parser.add_argument("--year", required=True, type=int)
    args = parser.parse_args()
    
    data = fetch_analytics(args.week, args.year)
    print(json.dumps(data, indent=2))
```

This isn't exotic code. It's standard Python — the kind you might already have in a notebook or half-finished script somewhere.

The skill simply **organizes** it: the process lives in Markdown, the reliable bits live in code, and Claude knows when to use each.

## The Compounding Effect

Here's where skills get interesting: they stack.

Your first skill saves you twenty minutes a week. Not life-changing, but nice. Your fifth skill saves you two hours. Your tenth skill starts changing how you think about delegation entirely.

More importantly, skills capture *intent*, not just mechanics. Six months from now, when you ask "Why do we calculate session duration that way?" the skill's Markdown explains the reasoning. It's not just automation — it's documentation that actually gets used.

## Your Turn

Find one thing you did this week that felt mechanical. A data pull. A format conversion. A report that writes itself if someone just follows the steps.

Open a text file. Name it SKILL.md. Write down what you do and when you do it.

That's a skill. It really is that simple.

---

Want to go deeper? The [Claude Code documentation on skills](https://docs.anthropic.com/en/docs/claude-code/skills) covers advanced patterns: conditional logic, multi-step workflows, and sharing skills with your team.

But you don't need any of that to start. You just need one tedious task and the willingness to write down how you do it.

Your future self will thank you.
