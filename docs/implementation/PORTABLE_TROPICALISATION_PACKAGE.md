# Portable Tropicalisation Package

Status: implementation guide
Owner: Tropicaliser runtime
Scope: deployment binding only

## Purpose

A tropicalisation package binds PsyNova to a deployment context.

It does not rewrite the engine.
It does not own routes.
It does not own language.
It does not own CSS.
It does not render plugins.
It does not implement API providers.
It does not become a theme manager.

The Tropicaliser selects existing owners and deployment posture.

## Runtime Owner

The Tropicaliser runtime owns:

- resolving the requested tropicaliser id
- falling back to the default tropicaliser when needed
- validating the deployment binding shape
- exposing runtime metadata for reports
- selecting deployment bindings for surface, theme, copy namespace, API profile, plugin requests, route policy, safety policy, and deployment flags

## Contract Shape

A tropicaliser profile may define:

- id
- surfaceProfile
- theme
- copyNamespace
- apiProfile
- enabledPlugins
- routePolicy
- safetyPolicy
- deploymentFlags

Each field points to another owner.

The tropicaliser does not implement those owners.

## Resolution Chain

The Tropicaliser resolves in this order:

1. explicit tropicaliser id
2. public deployment selector
3. legacy window tropicaliser id
4. default tropicaliser id

If the requested id is unknown, the runtime falls back to the default tropicaliser.

## Current Selectable Tropicalisers

- psynova-standard
- psynova-public

## Deployment Selector

The deployment selector lives at:

public/psynova-deployment.js

Default:

tropicaliserId: "psynova-standard"

Selectable:

tropicaliserId: "psynova-public"

Unknown ids must fall back safely to psynova-standard.

## Mutant Trap

Stop if the tropicaliser:

- writes route parsing logic
- changes language selection
- contains translated copy
- contains CSS styling
- creates DOM nodes
- renders plugins
- bypasses surface profile filtering
- imports API providers directly
- decides Clinic behavior
- patches missing architecture with deployment flags

That means the work escaped its owner.

## Law

One piece owns one job.

Tropicaliser owns deployment binding only.
