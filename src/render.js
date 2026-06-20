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

export function render(route = '/', plugins = []) {
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
        plugin.render(container, { route });
    }

    if (activePlugins.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'No plugins enabled.';
        shell.appendChild(empty);
    }

    app.appendChild(shell);
}
