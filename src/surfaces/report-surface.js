export function reportSurfaceRuntime({ route, profile, themeId, plugins }) {
    if (!import.meta.env || !import.meta.env.DEV) {
        return;
    }

    const pluginIds = Array.isArray(plugins)
        ? plugins.map((plugin) => plugin.id).filter(Boolean)
        : [];

    console.info("[PsyNova Surface]", {
        route,
        surface: profile?.id || null,
        theme: themeId || profile?.theme || null,
        plugins: pluginIds
    });
}
