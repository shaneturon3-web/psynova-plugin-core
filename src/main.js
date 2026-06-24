import { render } from './render.js';
import { getCurrentRoute } from './router.js';
import { loadPlugins } from './plugins/plugin-loader.js';
import { applyLanguage } from './language/runtime.js';
import { applyTheme } from './theme/apply-theme.js';
import { resolveSurfaceProfile } from './surfaces/resolve-surface.js';
import { filterPluginsForSurface, resolveRouteForSurface } from './surfaces/filter-plugins.js';
import { reportSurfaceRuntime } from './surfaces/report-surface.js';
import { resolveTropicaliser } from './tropicaliser/resolve-tropicaliser.js';

function boot() {
    const requestedRoute = getCurrentRoute();
    const tropicaliser = resolveTropicaliser();
    const profile = resolveSurfaceProfile(tropicaliser.surfaceProfile);
    const route = resolveRouteForSurface(requestedRoute, profile);
    const plugins = filterPluginsForSurface(loadPlugins(), profile, route);

    const theme = applyTheme(tropicaliser.theme || profile.theme);

    reportSurfaceRuntime({
        route,
        requestedRoute,
        profile,
        tropicaliser,
        themeId: theme.id,
        plugins
    });

    render(route, plugins, { profile, theme, tropicaliser });
    applyLanguage();
}

document.addEventListener('DOMContentLoaded', boot);
window.addEventListener('hashchange', boot);
