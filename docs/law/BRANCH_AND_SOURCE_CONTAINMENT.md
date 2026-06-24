# Branch and Source Containment

Status: active containment law
Branch of truth: main
Purpose: prevent stale branches, stale folders, stale docs, and failed repair lines from becoming source of truth.

## Current Source of Truth

Use:

- main
- working code that builds
- current ownership law
- operator-confirmed project root

Do not use a branch, folder, or document as authority merely because it has a milestone-like name.

## Dead Branch Names

Do not use or recreate:

- restart-from-v12-1-before-language
- psynova-t11-v13

These names are stale drift markers.

They are not milestones.
They are not recovery targets.
They are not source of truth.
They must not be pushed again.

If they appear locally, remove them or rename them into unrecognizable dead references.

## Progressive Archive Rule

Older folders may exist as historical checkpoints.

They may be read for context.

They must not overwrite main.

They must not be treated as current roots unless the operator explicitly declares a recovery operation.

Historical folders are archive, not authority.

## Superseded Repair Surface

The following are not implementation authority:

- old v12.1 public-surface-gate roots
- v12.2 repair attempts
- v12.2.1 repair attempts
- v12.3 route-split repair attempts
- restart-from-v12-1-before-language
- psynova-t11-v13
- documents that point to those lines as current source

They may explain drift.

They must not govern new work.

## Drive Document Rule

Google Drive documents are control mirrors unless explicitly declared current authority.

If Drive is not accessible in the current session, say:

NO_GDRIVE_ACCESS

Do not pretend to have read Drive.

If a Drive document contradicts working code on main, stop and ask which source is active.

## Local Disk Rule

Sibling directories are not automatically source of truth.

A sibling folder may be used only for:

- comparison
- recovery
- archive inspection
- operator-confirmed restoration

Do not copy from a sibling folder into main without a planned diff.

## GitHub Rule

GitHub main is the remote branch of truth.

Before any push:

- verify current branch is main
- verify build passes
- verify working tree is clean or intentionally staged
- verify no dead branch names are being recreated

No push unless explicitly approved.

## Containment Procedure

When source confusion appears:

1. Stop implementation.
2. Identify the active branch.
3. Identify the active root.
4. Identify whether the source is code, doc, archive, or stale branch.
5. Compare only the necessary files.
6. Restore only the chosen clean path.
7. Build.
8. Commit only the containment-correct result.

## Do Not Preserve Garbage as Truth

Failed branches are not museums.

Broken plans are not milestones.

Stale docs are not roadmaps.

If something is known to be false, do not quarantine it as a possible source of truth.

Remove it from the operational path.

## Clean Continuation

Continue only from:

- main
- consolidated adaptive runtime baseline
- current ownership law
- operator-confirmed working project root

## Stop Conditions

Stop if:

- old branch names reappear as targets
- a stale Drive document overrides main
- a sibling folder becomes authority without operator approval
- a failed branch is preserved as a milestone
- a recovery operation turns into archaeology
- implementation begins before source truth is established

## Rule

Branches do not decide truth.

Old manuals do not decide truth.

Drive mirrors do not decide truth.

Failed branches do not become milestones because they have names.

Working code on main plus current law is the source of truth.

The organizer organizes.
