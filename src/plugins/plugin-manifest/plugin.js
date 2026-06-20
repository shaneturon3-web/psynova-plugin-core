import manifestContent from './content.js';
import { plugins } from '../plugin-registry.js';
import './styles.css';

function countRoutes(routes) {
    return Array.isArray(routes) ? routes.length : 0;
}

export default {
    id: 'plugin-manifest',
    label: 'Plugin Manifest',
    enabled: true,
    version: '0.1.0',
    description: 'Readable manifest of registered plugins',
    routes: ['#/plugins'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'plugin-manifest';

        const title = document.createElement('h2');
        title.textContent = manifestContent.title || 'Plugin System';

        const description = document.createElement('p');
        description.className = 'plugin-manifest__description';
        description.textContent = manifestContent.description || '';

        wrapper.append(title, description);

        if (!Array.isArray(plugins) || plugins.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = manifestContent.emptyText || 'No registered plugins available.';
            wrapper.appendChild(empty);
            container.appendChild(wrapper);
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'plugin-manifest__grid';

        for (const plugin of plugins) {
            const card = document.createElement('article');
            card.className = 'plugin-manifest__card';

            const heading = document.createElement('h3');
            heading.textContent = plugin.label || plugin.id || 'Plugin';

            const version = document.createElement('p');
            version.textContent = `Version: ${plugin.version || 'none'}`;

            const state = document.createElement('p');
            state.textContent = plugin.enabled !== false
                ? manifestContent.enabledLabel || 'enabled'
                : manifestContent.disabledLabel || 'disabled';

            const routeCount = document.createElement('p');
            const count = countRoutes(plugin.routes);
            routeCount.textContent = `${count} ${manifestContent.routeCountLabel || 'routes'}`;

            card.append(heading, version, state, routeCount);
            grid.appendChild(card);
        }

        wrapper.appendChild(grid);
        container.appendChild(wrapper);
    }
};
