import { render } from './render.js';
import { getCurrentRoute } from './router.js';
import { loadPlugins } from './plugins/plugin-loader.js';

function boot() {
    const route = getCurrentRoute();
    const plugins = loadPlugins();

    render(route, plugins);
}

document.addEventListener('DOMContentLoaded', boot);
window.addEventListener('hashchange', boot);
