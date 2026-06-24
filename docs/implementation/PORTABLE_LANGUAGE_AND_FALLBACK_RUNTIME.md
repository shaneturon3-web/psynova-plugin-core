# Portable Language and Fallback Runtime

Status: active implementation guide
Scope: PsyNova, shaneturon.ca, future tropicalised sites
Branch of truth: main

## Purpose

This document defines the portable language and fallback runtime.

The goal is to stop patching a website as if it were one static page.

The correct model is an adaptive runtime:

route
-> surface profile
-> Tropicaliser / deployment binding
-> plugin filtering
-> render
-> language slots

Each layer owns one job.

## Core Rule

Do not patch one layer to hide failure in another.

If a route fails, fix route or surface policy.

If a locale fails, fix language runtime.

If a plugin is missing, fix surface/plugin filtering.

If nothing renderable survives, fix render fallback.

If layout is wrong, fix CSS.

Do not use CSS to hide missing architecture.

## Ownership Map

### Router

Owns:

- route normalization
- route navigation
- stripping hash/query syntax into a clean route

Does not own:

- locale fallback
- plugin visibility
- language slots
- theme selection

### Surface Profile

Owns:

- valid route set
- plugin allow-list
- default theme
- copy namespace
- API profile
- safety posture

Fallback responsibility:

- unknown route must resolve to base route
- unavailable route must not be treated as a page

### Tropicaliser

Owns:

- deployment binding
- selected surface profile
- selected theme
- selected copy namespace
- selected plugin set
- selected API profile
- deployment flags

Does not own:

- translated text
- plugin render functions
- route cloning
- CSS patching

### Plugins

Own:

- bounded route surfaces
- their own markup
- their own local content structure

Fallback responsibility:

- missing plugin means no render for that plugin
- missing plugin must not crash the page

### Navigation

Owns:

- displaying allowed navigation items

Does not own:

- creating route authority

Fallback responsibility:

- navigation must show only routes allowed by the active surface profile
- missing route must not appear in navbar

### Render

Owns:

- placing selected plugins into the app surface

Fallback responsibility:

- if no renderable plugins survive, render a safe base surface
- never leave the app empty
- never show developer-only dead text as public output

### Language Runtime

Owns:

- active locale
- translated slots
- document language
- stored preference
- browser fallback

Fallback responsibility:

- unknown locale falls to English
- unsupported locale falls to English
- missing translated slot falls to English slot
- if English slot is absent, preserve existing DOM fallback text

Language does not own:

- routes
- plugin visibility
- themes
- regulatory posture
- API behavior

### Seedbank

Owns:

- locale dictionaries
- slot values
- English source text
- matching coverage between supported locales

Does not own:

- DOM traversal
- route visibility
- storage
- browser language detection

### CSS

Owns:

- presentation only

Does not own:

- hiding missing plugins
- hiding missing language slots
- hiding route failures
- making architecture appear valid

## Required Fallback Chain

### Route fallback

Unknown route:

- requested route: /does-not-exist
- resolved route: /
- rendered page: base/home surface

Hash language mistakes:

- requested hash: #ja
- derived route: /ja
- resolved route: /
- language: en
- rendered page: base/home surface

### Language fallback

Unknown locale:

- lang=ja
- locale=ja
- browser language unsupported

Result:

- active locale: en
- document language: en
- page still renders

### Slot fallback

Missing slot in selected locale:

- try selected locale
- try English
- preserve DOM fallback text
- never blank the node

### Plugin fallback

Missing or disallowed plugin:

- do not render plugin
- do not crash page
- do not advertise unavailable route in navbar

### Render fallback

No renderable plugins:

- render safe base surface
- do not show empty shell
- do not show only nav/footer as failure state

## PsyNova Current Runtime Files

Core boot:

- src/main.js

Router:

- src/router.js

Surface:

- src/surfaces/filter-plugins.js
- src/surfaces/resolve-surface.js
- src/surfaces/surface-registry.js
- src/surfaces/profiles/infrastructure.js

Tropicaliser:

- src/tropicaliser/resolve-tropicaliser.js
- src/tropicaliser/tropicaliser-registry.js
- src/tropicaliser/profiles/psynova-standard.js

Theme:

- src/theme/apply-theme.js
- src/theme/theme-registry.js
- src/theme/themes/infrastructure-warm.js

Language:

- src/language/runtime.js
- src/language/seedbank.js
- src/language/apply-language.js, if used by target site

Render:

- src/render.js

Navigation:

- src/plugins/navigation/plugin.js
- src/plugins/navigation/content.js

## Portable Copy Set

For another adaptive site, copy these concepts, not private PsyNova copy.

Minimum portable module set:

- router route normalization
- surface profile route set
- plugin allow-list filtering
- render fallback
- language runtime fallback
- seedbank structure
- navigation filtering against active profile routes

Do not copy:

- PsyNova public copy
- PsyNova route names unless the target site uses the same sitemap
- PsyNova clinical or professional claims
- old branch names
- stale Drive instructions
- failed repair branch logic

## shaneturon.ca Adaptation

For shaneturon.ca, define a new surface profile.

Example surface identity:

- id: shaneturon-site
- theme: editorial or portfolio theme
- copyNamespace: shaneturon
- defaultLocale: en
- API profile: personal-contact or none

Possible route set:

- #/
- #/about
- #/systems
- #/case-files
- #/architecture
- #/lab
- #/now
- #/writing
- #/contact

The target site must define its own:

- surface profile
- theme tokens
- seedbank
- plugin list
- navigation content
- copy namespace

Do not import PsyNova infrastructure copy.

Do not import PsyNova clinic assumptions.

Do not import PsyNova route policy unless explicitly desired.

## Storage Key Rule

PsyNova uses:

- psynova.lang

shaneturon.ca should use its own key, for example:

- shaneturon.lang

The storage key must live in one runtime location only.

Do not scatter storage keys across plugins.

## Supported Locale Rule

Canonical locales should be declared once.

PsyNova currently supports:

- en
- es-MX
- fr-CA

Unknown locale must return:

- en

Accepted aliases may include:

- en, en-US, en-CA -> en
- es, es-MX, es-* -> es-MX
- fr, fr-CA, fr-* -> fr-CA

Target sites may choose fewer locales.

If a target site only has English, unknown locale still falls to English.

## Implementation Order for Target Sites

1. Add router route normalization.
2. Add surface profile with route set.
3. Add plugin allow-list filtering.
4. Add navigation filtering against surface routes.
5. Add render fallback.
6. Add language runtime fallback.
7. Add seedbank.
8. Add language slot attributes to public text.
9. Test unknown route.
10. Test unknown locale.
11. Test missing slot.
12. Build.
13. Commit.

Do not start with visual polish.

Do not start by adding translations.

Do not add API providers during language/fallback work.

## Test Matrix

Run these in the browser:

- #/
- #/contact
- #/does-not-exist
- #/does-not-exist?lang=ja
- #/contact?lang=ja
- #/contact?locale=ja
- #ja
- #es

Expected behavior:

- valid routes render
- unknown routes fall to base route
- unknown locales fall to English
- missing slots do not blank text
- unavailable routes do not appear in navigation
- no JavaScript runtime error
- favicon 404 may be ignored

## Terminal Validation

Before commit:

- git branch --show-current
- git status --short
- npm run build

Expected:

- main
- clean or intentional working diff
- build passes

## Zip Readiness

A zip intended for reuse must include:

- src runtime files
- package.json
- package-lock.json
- index.html
- docs/implementation/PORTABLE_LANGUAGE_AND_FALLBACK_RUNTIME.md
- docs/law/V12_COMPLETE_WITH_DEFICIENCIES_AND_LAW.md
- MAINTAINER_READ_THIS.md

A zip should not include:

- node_modules
- dist
- stale branches
- dead branch names as instructions
- old manuals as current authority

## Handoff Rule

Do not tell the next worker:

"Implement language from scratch."

Say:

"Use the portable language and fallback runtime. Respect ownership. Unknown route falls to base. Unknown locale falls to English. Missing slot falls to English. Missing plugin does not render. Navigation only shows routes allowed by active surface profile."

## Stop Conditions

Stop if:

- language changes route behavior
- router changes locale behavior
- CSS hides missing content
- navigation invents route authority
- Tropicaliser becomes a theme manager
- render decides language
- plugin filtering is bypassed
- old branch names are used as source of truth

## Law

The organizer organizes.

One piece owns one job.

Fallbacks are architecture, not patches.

Working code on main plus ownership law beats stale planning documents.
