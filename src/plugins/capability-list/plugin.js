import capabilities from '../../content/capabilities.js';

function normalizeCapability(capability) {
    if (typeof capability === 'string') {
        return {
            label: capability,
            enabled: true
        };
    }

    if (!capability || typeof capability !== 'object') {
        return null;
    }

    return {
        label: typeof capability.label === 'string' ? capability.label : '',
        enabled: capability.enabled !== false
    };
}

export default {
    id: 'capability-list',
    label: 'Capability List',
    enabled: true,
    description: 'Registered capabilities',
    version: '1.0.0',

    render(container) {
        container.replaceChildren();

        const title = document.createElement('h2');
        title.className = 'plugin-title';
        title.textContent = 'Capabilities';

        const normalized = Array.isArray(capabilities)
            ? capabilities.map(normalizeCapability).filter(Boolean)
            : [];

        const activeCapabilities = normalized.filter((capability) => {
            return capability.enabled && capability.label.trim().length > 0;
        });

        if (activeCapabilities.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'No capabilities registered yet.';
            container.append(title, empty);
            return;
        }

        const list = document.createElement('ul');
        list.className = 'capability-list';

        for (const capability of activeCapabilities) {
            const item = document.createElement('li');
            item.textContent = capability.label;
            list.appendChild(item);
        }

        container.append(title, list);
    }
};
