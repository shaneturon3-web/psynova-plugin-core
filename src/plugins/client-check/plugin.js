import clientCheck from '../../content/client-check.js';

function text(value, fallback = 'Not set') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

export default {
    id: 'client-check',
    label: 'Client Check',
    enabled: true,
    description: 'Organization fit check',
    version: '1.0.0',

    render(container) {
        container.replaceChildren();

        const title = document.createElement('h2');
        title.className = 'plugin-title';
        title.textContent = 'Client Check';

        const organization = document.createElement('p');
        organization.textContent = `Organization Type: ${text(clientCheck.organizationType)}`;

        const status = document.createElement('p');
        status.textContent = `Status: ${text(clientCheck.status)}`;

        const selected = document.createElement('p');
        const selectedCapabilities = Array.isArray(clientCheck.selectedCapabilities) &&
            clientCheck.selectedCapabilities.length > 0
            ? clientCheck.selectedCapabilities.join(', ')
            : 'None';

        selected.textContent = `Selected Capabilities: ${selectedCapabilities}`;

        container.append(title, organization, status, selected);
    }
};
