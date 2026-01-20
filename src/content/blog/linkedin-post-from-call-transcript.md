---
title: "How I turn call transcripts into LinkedIn posts"
description: "You're already sharing valuable ideas on calls all day. Here's how to use Claude Code to find them and turn them into LinkedIn content."
pubDate: 2026-01-20
author: "Keanan Koppenhaver"
kitTagId: "14154457"
tags: []
categories: ["Use Cases"]
draft: true
---

I'm on calls all day. Sales calls, client calls, strategy sessions. And on those calls, I'm constantly explaining things, sharing insights, answering questions in ways that seem to click for people.

Then the call ends and all of that disappears.

Here's what I've realized: I don't need AI to generate ideas for me. I already have the ideas. I'm sharing them every day, I just wasn't capturing them. What I needed was help *finding* the good stuff I was already saying and packaging it into something I could share more widely.

That's exactly what Claude Code is great at.

## Why you should be transcribing your calls

If you're not already transcribing your calls, start. Sales calls especially, but client calls too. Every call is a potential content goldmine.

I use [Granola](https://granola.ai) for transcription, but there are plenty of options: Otter, Fireflies, Grain, even Zoom's built-in transcription. The tool doesn't matter as much as the habit. Just make sure your transcripts end up somewhere you can actually access them.

I use the [Raycast extension for Granola](https://www.raycast.com/kkoppenhaver/granola) to quickly grab my recent transcripts. If your transcription tool doesn't have something similar, you can set up a simple Zapier automation to dump transcripts into a Google Drive folder or Notion database. The point is: make it easy to get a transcript when you need one.

## What to look for in a transcript

Not every call is going to have LinkedIn-worthy content. But here's what I've found works well:

- **Surprising insights** — moments where a client had an "aha" reaction
- **Questions you keep getting asked** — if multiple people ask the same thing, others are wondering too
- **Analogies that clicked** — when you explained something in a way that made it land
- **Objections you overcame** — the reasoning that convinced a skeptical prospect
- **Counterintuitive advice** — anything that challenges conventional wisdom

You don't need to find these yourself. That's what Claude is for.

## The workflow

Here's how I actually do this. I grab a recent transcript, open Claude Code, and paste in the transcript with a prompt like this:

> Here's a transcript from a recent call. Can you identify 3-5 moments that would make good LinkedIn posts? I'm looking for insights, analogies, or advice I shared that might resonate with a broader audience.
>
> [paste transcript here]

Claude scans through the call and surfaces the moments worth sharing. It's not generating ideas from nothing, it's finding the ideas I already had.

[screenshot TKTK — Claude surfacing moments from a transcript]

Once I pick a moment to focus on, I ask Claude to draft it:

> Let's go with #2. Can you draft a LinkedIn post around that insight? Give me one version to start with so I can provide feedback.

The key phrase here is **"one version to start with."** I've found that asking for multiple versions at once leads to decision paralysis. Better to see one draft, react to it, and iterate.

[screenshot TKTK — Claude presenting a single draft]

## Iterating until it sounds like you

The first draft is rarely perfect. That's fine. I usually go back and forth a few times with feedback like:

- "Make the opening hook punchier"
- "This sounds too corporate, make it more conversational"
- "Cut this down by half"
- "Add a specific example from the call"
- "The ending feels flat, give me something people will want to comment on"

Claude makes the changes and shows me the updated version. Repeat until it sounds like something I'd actually post.

[screenshot TKTK — iteration example]

## A quick note on privacy

A word of caution: call transcripts often contain sensitive information. Client names, company details, pricing discussions, proprietary strategies.

Before you paste a transcript into Claude Code, think about what's in it. If there's confidential information, either:
- Anonymize the sensitive parts before pasting
- Ask Claude to surface insights without including specific details in the post
- Skip that transcript and use a different one

This is especially important for client calls. Your clients trust you with information they wouldn't share publicly. Don't break that trust for a LinkedIn post.

## Real example: from transcript to post

Let me show you what this looks like in practice. Here's an excerpt from a recent call:

[TKTK: Add anonymized call excerpt here]

I asked Claude to surface the moments that might resonate:

[TKTK: Claude's response identifying moments]

And here's what we turned it into:

[TKTK: Final LinkedIn post]

The insight was already there in the call. Claude just helped me find it and package it.

## Leveling up

Once you've done this a few times, there are a couple ways to make it even better.

### Give Claude examples of your style

Before asking for a draft, paste in 2-3 of your previous LinkedIn posts that you're happy with. Then tell Claude:

> Here are some examples of my LinkedIn posts. Use these to match my voice and style when you draft the new one.

The difference is noticeable. Claude picks up on your patterns: how you open posts, how long your sentences are, whether you use emojis, how you structure your hooks.

### Create a skill for your writing style

If you really want to dial this in, you can create a Claude Code skill that knows how to write LinkedIn posts in your voice. A skill is like a reusable prompt template that you can invoke anytime.

I have a `/linkedin` skill that includes:
- My writing style preferences
- Examples of my past posts
- Guidelines for hooks, formatting, and CTAs

I'll cover how to create skills in an upcoming post. For now, know that they exist and they're powerful.

## The mindset shift

Here's what I want you to take away from this: **you're not asking AI to think for you.** You're using it to catch the ideas you're already having.

Every call you're on, you're explaining things, sharing perspectives, helping people understand something they didn't before. That's content. You just need a way to capture it.

Start transcribing your calls. Paste one into Claude Code this week. See what it finds.

If you try this and create something you're proud of, I'd love to see it. Reach out on [Twitter](https://twitter.com/kkoppenhaver) or [LinkedIn](https://linkedin.com/in/keanankoppenhaver) and share what you came up with.
