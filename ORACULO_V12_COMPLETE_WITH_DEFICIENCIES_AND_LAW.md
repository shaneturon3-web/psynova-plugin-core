# V12 Complete with Deficiencies & LAW

Status: active law
Branch of truth: main
Purpose: stop drift, stop archaeology, preserve the adaptive engine.

## Current truth

V12 is complete enough to continue from main.

It has deficiencies, but it is the chosen clean path.

Do not restart from old branch names.
Do not use old manuals as source of truth.
Do not treat failed branches as milestones.
Do not recreate restart-from-v12-1-before-language.
Do not recreate psynova-t11-v13.

## Known deficiencies

- Unknown language or unknown route fallback still needs final ownership-correct behavior.
- Language audit/gate may report warnings.
- Clinic is not implemented.
- API providers are not implemented.
- Some documentation may describe plans that were already superseded by working code.

Deficiencies are not permission to patch randomly.

Fixes must respect ownership.

## LAW — Layer Authority

One piece owns one job.

Engine owns:
- boot order
- route read
- render call
- plugin loading sequence

Router owns:
- route normalization
- route navigation
- no language decisions

Surface Profile owns:
- public purpose
- route set
- plugin allow-list
- default theme
- copy namespace
- API profile
- regulatory/safety posture

Tropicaliser owns:
- deployment binding
- selected surface
- selected theme
- selected copy namespace
- selected plugin bundle
- selected API profile
- deployment flags

Theme owns:
- visual tokens
- colors
- typography
- radius
- spacing
- surfaces
- action states

Language owns:
- active locale
- translated slots
- document language
- stored preference
- browser fallback

Plugins own:
- bounded route surfaces
- their own markup
- their own local content structure

Render owns:
- putting selected plugins into the app surface
- not deciding language, theme, API, or profile policy

API owns:
- contracts
- adapters
- provider boundaries
- no vendor logic inside public plugins

CSS owns:
- presentation only
- never hiding architecture problems

## Organizer Organize Law

When something fails:

1. Identify which ownership boundary failed.
2. Fix that owner.
3. Do not patch another layer to hide the failure.
4. Do not use docs that contradict working code.
5. Build before commit.
6. Commit only the corrected ownership layer.

## Script Domains

scripts/architecture/report-architecture-state.sh owns:
- reporting architecture state
- reporting build state
- listing surfaces, themes, language files, plugins, and docs
- it must not change runtime behavior

scripts/language/seedbank-report.mjs owns:
- comparing locale key coverage inside the seedbank
- it must not modify seedbank or runtime

scripts/language/audit-i18n-slots.mjs owns:
- scanning referenced data-i18n slots
- reporting missing slot coverage
- it must not patch templates or seedbank

scripts/language/language-gate.sh owns:
- running language checks
- reporting pass/warning/fail state
- it must not redefine language architecture

scripts/language/language-strict-gate.sh owns:
- strict L10-only language blocking, if present
- it must not block non-language milestones unless explicitly invoked

scripts/language/export-language-package.sh owns:
- exporting the language package
- it must not import PsyNova route policy into other sites

No script owns product direction.
No script owns layer authority.
No script may convert warnings into architecture changes.

## Branch Law

main is the only branch of truth.

Dead branch names must not be reused:
- restart-from-v12-1-before-language
- psynova-t11-v13

If a branch contains failed planning, broken patching, or mixed ownership, delete it or rename it to an unrecognizable deadref.
Do not push deadrefs.

## Commit Law

Good:
- chore(core): consolidate adaptive runtime baseline
- fix(router): normalize unknown route fallback
- fix(language): restore locale fallback
- docs(law): define v12 ownership boundaries

Bad:
- fix everything
- continue t11
- restore old manual
- patch language and router and css together

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

## Rule

Working code plus this LAW beats old planning docs.

The organizer organizes.
