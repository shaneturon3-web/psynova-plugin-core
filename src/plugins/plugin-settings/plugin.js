import content from './content.js';
import './styles.css';

function visibleSettings() {
    const settings = Array.isArray(content.settings) ? content.settings : [];

    return settings.filter((item) => item && item.visibility !== 'hidden');
}

export default {
    id: 'plugin-settings',
    label: 'Plugin Settings',
    enabled: true,
    version: '0.1.0',
    description: 'Per-plugin settings from data',
    routes: ['#/settings'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'plugin-settings';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Plugin Settings';

        const description = document.createElement('p');
        description.className = 'plugin-settings__description';
        description.textContent = content.description || 'Visibility and activation controls.';

        wrapper.append(title, description);

        const items = visibleSettings();

        if (items.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = content.emptyText || 'No plugin settings configured.';
            wrapper.appendChild(empty);
            container.appendChild(wrapper);
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'plugin-settings__grid';

        for (const item of items) {
            const card = document.createElement('article');
            card.className = 'plugin-settings__card';

            const heading = document.createElement('h3');
            heading.textContent = item.pluginId || 'Plugin';

            const visibility = document.createElement('p');
            visibility.textContent = `Visibility: ${item.visibility || 'public'}`;

            const enabled = document.createElement('p');
            enabled.textContent = `Enabled: ${item.enabled !== false ? 'yes' : 'no'}`;

            const order = document.createElement('p');
            order.textContent = `Display order: ${item.displayOrder ?? 'none'}`;

            card.append(heading, visibility, enabled, order);
            grid.appendChild(card);
        }

        wrapper.appendChild(grid);
        container.appendChild(wrapper);
    }
};
