# PsyNova V12 Adaptive Tropicaliser Handoff

Status: active handoff
Branch of truth: main
Commit: 3314a66
Tag: v12-adaptive-tropicaliser-shelf
Shelf zip: /home/shane/dev/_shelf/psynova-v12-adaptive-tropicaliser-shelf-20260624-183317-3314a66.zip

## Purpose

This document closes the current PsyNova work block before switching projects.

It records what was completed, what remains unfinished, and how the next maintainer must continue without drifting into old branches, stale plans, or mutant architecture.

## Source of Truth

Use:

- branch main
- tag v12-adaptive-tropicaliser-shelf
- current repository code
- current law docs
- current implementation docs
- shelf zip listed above

Do not use:

- restart-from-v12-1-before-language
- psynova-t11-v13
- old branch plans
- failed branch archaeology
- docs that contradict working main

## What Was Completed

The V12 adaptive runtime now has:

- route-aware rendering
- surface profile resolution
- plugin filtering by surface and route
- render safety fallback
- language fallback to English
- missing language slot fallback to English
- unknown route fallback to base route
- navigation filtering against available surface routes
- validated Tropicaliser runtime
- deployment selector through public/psynova-deployment.js
- psynova-standard tropicaliser
- psynova-public tropicaliser
- DEV console runtime report
- portable language and fallback implementation docs
- portable tropicalisation package docs
- law docs and branch containment docs
- self-contained shelf zip

## Tropicaliser State

The Tropicaliser is now real enough to select deployment bindings.

It owns deployment binding only.

It does not own:

- router behavior
- language behavior
- CSS
- translated copy
- plugin rendering
- API provider implementation
- Clinic behavior

Current selectable tropicalisers:

- psynova-standard
- psynova-public

Selector file:

- public/psynova-deployment.js

Default selector:

tropicaliserId: "psynova-standard"

Selectable public binding:

tropicaliserId: "psynova-public"

Unknown ids must fall back safely to psynova-standard.

## Runtime Proof

The DEV console report exposes:

- route
- requestedRoute
- surface
- theme
- tropicaliser id
- requested tropicaliser id
- resolved tropicaliser id
- usedFallback
- available tropicaliser ids
- rendered plugin ids

Known successful report shape:

route: /
requestedRoute: /
surface: psynova-infrastructure
theme: infrastructure-warm
tropicaliser id: psynova-standard
requestedId: psynova-standard
resolvedId: psynova-standard
usedFallback: false
availableIds: psynova-public, psynova-standard

## Shelf Unit

Latest shelf zip:

/home/shane/dev/_shelf/psynova-v12-adaptive-tropicaliser-shelf-20260624-183317-3314a66.zip

The shelf zip is self-contained for future implementation work.

It intentionally excludes:

- node_modules
- dist
- .git
- failed branch history
- local terminal state

The shelf zip includes:

- source
- package manifests
- law docs
- implementation docs
- maintainer docs
- Tropicaliser runtime
- deployment selector
- tropicaliser profiles

## What Is Not Complete

PsyNova is not finished.

Do not claim final product completion.

Still pending:

- fuller tropicalisation package workflow
- shaneturon.ca implementation
- possible shaneturon.ca surface profile
- possible shaneturon.ca copy namespace
- possible shaneturon.ca theme
- plugin expansion only after ownership stays clean
- API contract work
- provider adapter work
- Clinic work
- deeper audit/testing pass
- production deployment hardening

## Next Correct Work

Recommended next block:

shaneturon.ca tropicalisation

Correct order:

1. Start from main or the shelf zip.
2. Keep PsyNova engine unchanged unless a true engine bug appears.
3. Create a shaneturon.ca tropicaliser profile.
4. Reuse existing surface profile unless a new surface profile is actually needed.
5. Reuse existing theme unless a new theme is actually needed.
6. Reuse existing copy namespace unless new copy is actually needed.
7. Do not add Clinic.
8. Do not add API providers.
9. Do not patch CSS to hide architecture problems.
10. Build and test after every ownership-layer change.

## Mutant Trap

Stop immediately if work tries to:

- make Tropicaliser parse routes
- make Tropicaliser choose language
- put translated copy inside Tropicaliser
- put CSS inside Tropicaliser
- render DOM from Tropicaliser
- bypass plugin filtering
- bypass surface profile routes
- use old branch names as truth
- treat the shelf zip as final product instead of a portable starting point
- start Clinic before public surface is stable
- start API providers before API contracts are defined

## Law

One piece owns one job.

Router owns routes.
Language owns locale and slots.
Theme owns visual tokens.
Surface profile owns public purpose, route set, plugin allow-list, default theme, copy namespace, API profile, and safety posture.
Tropicaliser owns deployment binding.
Plugins own bounded route surfaces.
Render owns placing selected plugins into the app.
CSS owns presentation only.
API owns contracts, adapters, and provider boundaries.

## Tail

### Git Tail
3314a66 (HEAD -> main, tag: v12-adaptive-tropicaliser-shelf, origin/main, origin/HEAD) docs(tropicaliser): define portable tropicalisation package
9039226 feat(tropicaliser): report deployment binding resolution
4bce328 feat(tropicaliser): add deployment selector
94346be feat(tropicaliser): add public deployment binding
e6c0874 feat(tropicaliser): validate deployment binding runtime
4c8153f docs(law): add v12 shelf law entrypoint
ac1285e docs(implementation): define portable language and fallback runtime
b4c8e98 fix(render): show safe base fallback when no plugins render
9ff4c68 fix(surface): hide unavailable routes from navigation
7f65770 fix(language): fall back to English for unknown locales and missing slots
3b6d8df fix(surface): fall back to base route for unknown routes
302d409 docs(law): sanitize t10 runtime record
3d061e8 docs(law): contain stale branches and sources
ec171c6 docs(maintainer): add adaptive runtime entrypoint
05649c6 docs(law): define v12 ownership boundaries
4619795 chore(core): consolidate adaptive runtime baseline
ae1aa89 first commit
fd22a23 (tag: v1.2.1-public-surface-gate) fix: gate public surface from system review

### Status
?? docs/handoff/

### Shelf SHA256
537fa6292e301c4249eb494cbdf737c09e19525bf7fb0862a06592767b46698b  /home/shane/dev/_shelf/psynova-v12-adaptive-tropicaliser-shelf-20260624-183317-3314a66.zip
