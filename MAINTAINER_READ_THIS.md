# MAINTAINER — PsyNova V12 Adaptive Runtime

Status: active maintainer entrypoint
Branch of truth: main
Purpose: prevent drift before work begins.

## Read First

This repository continues from main.

Do not start from memory.
Do not start from old branch names.
Do not start from old Drive planning documents.
Do not start from sibling folders unless the operator explicitly orders recovery.

Before work, verify:

- git branch is main
- git status is clean or intentionally dirty
- npm run build passes

If this is not true, stop.

## Current State

PsyNova V12 has a consolidated adaptive runtime baseline.

It includes footing for:

- route-aware rendering
- surface profiles
- theme runtime
- language runtime
- route-owned plugins
- Tropicaliser / tropicalisation binding

It is complete enough to continue.

It has deficiencies.

A deficiency is not permission to patch randomly.

## Dead Branch Names

Do not use or recreate:

- restart-from-v12-1-before-language
- psynova-t11-v13

These are stale drift markers.

They are not milestones.
They are not recovery targets.
They are not source of truth.

## Core Law

One piece owns one job.

If something fails:

1. Identify the owner.
2. Fix the owner.
3. Do not patch another layer to hide the failure.
4. Do not mix unrelated fixes.
5. Build before commit.
6. Commit only the ownership-correct change.

## Ownership Map

Router owns routes.

Language owns locale and slots.

Theme owns visual tokens.

Surface profile owns public purpose, route set, plugin allow-list, default theme, copy namespace, API profile, and safety posture.

Tropicaliser owns deployment binding.

Plugins own bounded route surfaces.

Render owns placing selected plugins into the app.

CSS owns presentation only.

API owns contracts, adapters, and provider boundaries.

## Stop Conditions

Stop if:

- language changes route behavior
- router changes locale behavior
- theme decides copy
- CSS hides missing architecture
- plugin filtering is bypassed
- Tropicaliser becomes a theme manager
- Clinic appears before Standard is stable
- API provider code enters public plugins
- old branch names are used as truth

## Valid Work Pattern

One task.
One ownership layer.
One planned diff.
Build.
Commit.
No push unless explicitly approved.

## Rule

Working code on main plus docs/law/V12_COMPLETE_WITH_DEFICIENCIES_AND_LAW.md beats stale planning documents.

The organizer organizes.
