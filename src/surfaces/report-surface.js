export function reportSurfaceRuntime({
    route,
    requestedRoute,
    profile,
    tropicaliser,
    themeId,
    plugins
}) {
    if (!import.meta.env || !import.meta.env.DEV) {
        return;
    }

    const pluginIds = Array.isArray(plugins)
        ? plugins.map((plugin) => plugin.id).filter(Boolean)
        : [];

    const tropicaliserRuntime = tropicaliser?.runtime || {};

    console.info("[PsyNova Surface]", {
        route,
        requestedRoute: requestedRoute || route,
        surface: profile?.id || null,
        theme: themeId || profile?.theme || null,
        tropicaliser: {
            id: tropicaliser?.id || null,
            requestedId: tropicaliserRuntime.requestedId || tropicaliser?.id || null,
            resolvedId: tropicaliserRuntime.resolvedId || tropicaliser?.id || null,
            usedFallback: Boolean(tropicaliserRuntime.usedFallback),
            availableIds: Array.isArray(tropicaliserRuntime.availableIds)
                ? tropicaliserRuntime.availableIds
                : []
        },
        plugins: pluginIds
    });
}
