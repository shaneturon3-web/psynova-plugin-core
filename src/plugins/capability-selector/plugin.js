import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function createCapabilityItem(capability) {
    const item = document.createElement('article');
    item.className = 'capability-selector__item';
    item.dataset.capability = text(capability.id);

    if (capability.selected === true) {
        item.dataset.selected = 'true';
    }

    const heading = document.createElement('h3');
    heading.className = 'capability-selector__item-title';
    heading.textContent = text(capability.label, 'Capability');

    const description = document.createElement('p');
    description.className = 'capability-selector__item-description';
    description.textContent = text(capability.description);

    const status = document.createElement('p');
    status.className = 'capability-selector__item-status';
    status.textContent = capability.selected === true ? 'Selected' : 'Available';

    item.append(heading, description, status);
    return item;
}

const capabilitySelectorPlugin = {
    id: 'capability-selector',
    label: 'Capability Selector',
    enabled: true,
    version: '0.1.0',
    description: 'Selectable capability options rendered from local plugin data.',
    routes: ['/', '/capabilities'],

    render(container, context = {}) {
        const route = context.route || '/';

        if (!this.routes.includes(route)) {
            container.replaceChildren();
            return;
        }

        const root = document.createElement('article');
        root.className = 'capability-selector';

        const header = document.createElement('header');
        header.className = 'capability-selector__header';

        const title = document.createElement('h2');
        title.className = 'capability-selector__title';
        title.textContent = text(content.title, 'Capabilities');

        const intro = document.createElement('p');
        intro.className = 'capability-selector__intro';
        intro.textContent = text(content.intro);

        header.append(title, intro);

        const list = document.createElement('div');
        list.className = 'capability-selector__list';

        const capabilities = Array.isArray(content.capabilities)
            ? content.capabilities.filter((capability) => capability.enabled !== false)
            : [];

        if (capabilities.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'capability-selector__empty';
            empty.textContent = text(content.emptyMessage, 'No capabilities available.');
            list.appendChild(empty);
        } else {
            capabilities.forEach((capability) => {
                list.appendChild(createCapabilityItem(capability));
            });
        }

        root.append(header, list);
        container.replaceChildren(root);
    }
};

export default capabilitySelectorPlugin;
