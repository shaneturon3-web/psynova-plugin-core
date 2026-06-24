function normalizeRoute(route = "/") {
    const raw = String(route || "/").trim();
    const withoutHash = raw.startsWith("#") ? raw.slice(1) : raw;
    const withoutQuery = withoutHash.split("?")[0];
    const withSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;

    if (withSlash.length > 1 && withSlash.endsWith("/")) {
        return withSlash.slice(0, -1);
    }

    return withSlash || "/";
}

function pluginMatchesRoute(plugin, route) {
    if (!plugin || !Array.isArray(plugin.routes) || plugin.routes.length === 0) {
        return true;
    }

    const currentRoute = normalizeRoute(route);

    return plugin.routes.some((pluginRoute) => {
        if (pluginRoute === "*") {
            return true;
        }

        return normalizeRoute(pluginRoute) === currentRoute;
    });
}

export function filterPluginsForSurface(plugins = [], profile = {}, route = "/") {
    if (!Array.isArray(plugins)) {
        return [];
    }

    const surfaceFiltered = (() => {
        if (!profile || !Array.isArray(profile.publicPlugins)) {
            return plugins;
        }

        const allowedPluginIds = new Set(profile.publicPlugins);

        return plugins.filter((plugin) => {
            return plugin && allowedPluginIds.has(plugin.id);
        });
    })();

    return surfaceFiltered.filter((plugin) => pluginMatchesRoute(plugin, route));
}
