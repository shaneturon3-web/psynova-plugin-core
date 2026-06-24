function isPlainObject(value) {
    return (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value)
    );
}

function cleanString(value, fallback = '') {
    if (typeof value === 'string' && value.trim()) {
        return value.trim();
    }

    return fallback;
}

function cleanArray(value, fallback = []) {
    if (!Array.isArray(value)) {
        return [...fallback];
    }

    return value
        .filter((item) => typeof item === 'string' && item.trim())
        .map((item) => item.trim());
}

function cleanObject(value, fallback = {}) {
    if (!isPlainObject(value)) {
        return { ...fallback };
    }

    return { ...value };
}

export function createTropicaliserRuntime(candidate = {}, fallback = {}, context = {}) {
    const base = isPlainObject(fallback) ? fallback : {};
    const source = isPlainObject(candidate) ? candidate : {};
    const merged = { ...base, ...source };

    const id = cleanString(merged.id, cleanString(base.id, 'psynova-standard'));

    return {
        id,
        surfaceProfile: cleanString(
            merged.surfaceProfile,
            cleanString(base.surfaceProfile, 'psynova-infrastructure')
        ),
        theme: cleanString(
            merged.theme,
            cleanString(base.theme, 'infrastructure-warm')
        ),
        copyNamespace: cleanString(
            merged.copyNamespace,
            cleanString(base.copyNamespace, 'infrastructure')
        ),
        apiProfile: cleanString(
            merged.apiProfile,
            cleanString(base.apiProfile, 'standard-public')
        ),
        enabledPlugins: cleanArray(merged.enabledPlugins, base.enabledPlugins),
        routePolicy: cleanObject(merged.routePolicy, base.routePolicy),
        safetyPolicy: cleanObject(merged.safetyPolicy, base.safetyPolicy),
        deploymentFlags: cleanObject(merged.deploymentFlags, base.deploymentFlags),
        runtime: {
            requestedId: cleanString(context.requestedId, id),
            resolvedId: id,
            usedFallback: Boolean(context.usedFallback),
            availableIds: cleanArray(context.availableIds)
        }
    };
}
