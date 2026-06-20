import { plugins } from '../plugin-registry.js';
import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function collectRoutes() {
    return plugins
        .filter((plugin) => plugin && plugin.enabled !== false)
        .flatMap((plugin) => {
            const declaredRoutes = Array.isArray(plugin.routes) ? plugin.routes : [];

            return declaredRoutes.map((route) => ({
                pluginId: plugin.id,
                pluginLabel: plugin.label || plugin.id,
                route
            }));
        })
        .filter((entry) => typeof entry.route === 'string' && entry.route.trim());
}

const pluginPageRoutePlugin = {
    id: 'plugin-page-route',
    label: 'Plugin Page Route',
    enabled: true,
    version: '0.1.0',
    description: 'Displays route declarations from enabled plugins',
    routes: ['#/', '#/capabilities', '#/organization', '#/contact', '#/page/:slug'],

    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'plugin-page-route';

        const title = document.createElement('h2');
        title.textContent = text(content.title, 'Plugin Routes');

        const summary = document.createElement('p');
        summary.className = 'plugin-page-route__summary';
        summary.textContent = text(content.summary);

        const list = document.createElement('ul');
        list.className = 'plugin-page-route__list';

        const routes = collectRoutes();

        if (routes.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = text(content.emptyMessage, 'No plugin routes available.');
            wrapper.append(title, summary, empty);
            container.appendChild(wrapper);
            return;
        }

        routes.forEach((entry) => {
            const item = document.createElement('li');
            item.className = 'plugin-page-route__item';

            const code = document.createElement('code');
            code.textContent = entry.route;

            const label = document.createElement('span');
            label.textContent = ` — ${entry.pluginLabel}`;

            item.append(code, label);
            list.appendChild(item);
        });

        wrapper.append(title, summary, list);
        container.appendChild(wrapper);
    }
};

export default pluginPageRoutePlugin;
