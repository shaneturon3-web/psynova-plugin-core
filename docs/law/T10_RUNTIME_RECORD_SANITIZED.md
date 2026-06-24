# T10 Runtime Record — Sanitized

Status: sanitized runtime record
Branch of truth: main
Purpose: record Tropicaliser footing without preserving stale branch authority.

## Purpose

This document records the T10 Tropicaliser footing.

It is not permission to restore old branches.
It is not proof that Tropicaliser is complete.
It is not authority over working code.

## Corrected Authority

The only branch of truth is:

- main

Do not use or recreate:

- restart-from-v12-1-before-language
- psynova-t11-v13

Those names are stale drift markers.

## Milestone

T10 — Tropicaliser footing

## Result

A minimal Tropicaliser footing exists as part of the adaptive runtime.

The intended role of Tropicaliser is deployment binding:

- surface profile
- theme
- copy namespace
- plugin set
- API profile
- deployment flags
- safety posture

Tropicaliser is not a theme manager.

Tropicaliser does not own:

- plugin rendering
- language
- routes
- translated copy
- CSS fixes
- API providers

## Runtime Intention

The adaptive engine should follow this ownership chain:

1. read route
2. resolve Tropicaliser
3. resolve surface profile
4. apply theme
5. load plugins
6. filter plugins through profile and route
7. render selected plugins
8. apply language slots

## T10 File Domain

Tropicaliser domain:

- src/tropicaliser/profiles/psynova-standard.js
- src/tropicaliser/tropicaliser-registry.js
- src/tropicaliser/resolve-tropicaliser.js

Boot integration domain:

- src/main.js

Related but separate domains:

- src/surfaces/
- src/theme/
- src/language/
- src/plugins/
- src/render.js
- src/router.js

Do not mix these domains during fixes.

## Non-Actions Preserved

Clinic was not implemented.

API providers were not implemented.

Vendor wiring was not implemented.

Language was not rewritten as part of T10.

Copy was not rewritten as part of T10.

CSS was not used to hide architecture problems.

Plugins were not supposed to be migrated by Tropicaliser.

## Known Deficiency

T10 produced footing, not final authority.

Unknown route / unknown language fallback still requires ownership-correct handling.

If a route is unknown, route and surface policy own the fallback.

If a locale is unknown, language owns locale fallback.

If a plugin is unavailable, surface and plugin filtering own visibility.

If a page is unavailable, navigation should not advertise it.

Do not patch one layer to hide failure in another.

## Correct Continuation

Continue from main.

Before work:

- git branch --show-current
- git status --short
- npm run build

Expected:

- main
- clean or intentional working diff
- build passes

## Stale Statement Removal

Any statement claiming that restart-from-v12-1-before-language is the current authority is stale.

Any statement claiming that psynova-t11-v13 is the current authority is stale.

Any statement claiming that T10 is fully complete is stale.

Any statement claiming that Google Drive is implementation authority is stale.

Any statement claiming that a connector verified current code should be ignored unless reverified locally.

## Next Work Domains

Continue only by ownership domain:

- T = Tropicalisation / deployment binding
- L = Language / locale and slots
- R = Router / route normalization
- S = Surface / profile and plugin allow-list
- P = Plugins / route-owned surfaces
- A = API contracts and adapters

## Law

The organizer organizes.

One piece owns one job.

Working code on main plus current ownership law beats stale planning documents.
