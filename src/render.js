function isRenderablePlugin(plugin) {
    return (
        plugin &&
        plugin.enabled === true &&
        typeof plugin.id === 'string' &&
        plugin.id.trim().length > 0 &&
        typeof plugin.render === 'function'
    );
}

function createPluginContainer(plugin) {
    const section = document.createElement('section');
    section.className = 'plugin-section';
    section.id = `plugin-${plugin.id}`;
    section.dataset.plugin = plugin.id;
    section.setAttribute('aria-label', plugin.label || plugin.id);

    return section;
}

export function render(route = '/', plugins = [], context = {}) {
    const app = document.getElementById('app');

    if (!app) {
        throw new Error('Missing #app root element');
    }

    app.replaceChildren();

    const shell = document.createElement('div');
    shell.className = 'app-shell';
    shell.dataset.route = route;

    const activePlugins = plugins.filter(isRenderablePlugin);

    for (const plugin of activePlugins) {
        const container = createPluginContainer(plugin);
        shell.appendChild(container);
        plugin.render(container, { ...context, route });
    }

    if (activePlugins.length === 0) {
        const fallback = document.createElement('section');
        fallback.className = 'plugin-section plugin-section--fallback';
        fallback.id = 'plugin-render-fallback';
        fallback.dataset.plugin = 'render-fallback';
        fallback.setAttribute('aria-label', 'PsyNova fallback surface');

        const heading = document.createElement('h1');
        heading.textContent = 'PsyNova';

        const body = document.createElement('p');
        body.textContent = 'Professional Practice Infrastructure';

        fallback.appendChild(heading);
        fallback.appendChild(body);
        shell.appendChild(fallback);
    }

    app.appendChild(shell);
}
