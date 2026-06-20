import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function formatValue(value, fallback) {
    return text(value, fallback);
}

function formatCapabilities(value, fallback) {
    return Array.isArray(value) && value.length > 0 ? value.join(', ') : fallback;
}

function createRow(label, value) {
    const row = document.createElement('div');
    row.className = 'deployment-configuration__row';

    const key = document.createElement('dt');
    key.className = 'deployment-configuration__key';
    key.textContent = label;

    const val = document.createElement('dd');
    val.className = 'deployment-configuration__value';
    val.textContent = value;

    row.append(key, val);
    return row;
}

const deploymentConfigurationPlugin = {
    id: 'deployment-configuration',
    label: 'Deployment Configuration',
    enabled: true,
    version: '0.1.0',
    description: 'Neutral deployment configuration rendered from local plugin data.',
    routes: ['/', '/deployment'],

    render(container, context = {}) {
        const route = context.route || '/';

        if (!this.routes.includes(route)) {
            container.replaceChildren();
            return;
        }

        const root = document.createElement('article');
        root.className = 'deployment-configuration';

        const title = document.createElement('h2');
        title.className = 'deployment-configuration__title';
        title.textContent = text(content.title, 'Deployment Configuration');

        const intro = document.createElement('p');
        intro.className = 'deployment-configuration__intro';
        intro.textContent = text(content.intro);

        const list = document.createElement('dl');
        list.className = 'deployment-configuration__list';

        const config = content.configuration || {};
        const labels = content.labels || {};
        const emptyValue = text(labels.emptyValue, 'Not configured');
        const emptyCapabilities = text(labels.emptyCapabilities, 'None selected');

        list.append(
            createRow(
                text(labels.organizationProfile, 'Organization Profile'),
                formatValue(config.organizationProfile, emptyValue)
            ),
            createRow(
                text(labels.selectedCapabilities, 'Selected Capabilities'),
                formatCapabilities(config.selectedCapabilities, emptyCapabilities)
            ),
            createRow(
                text(labels.deploymentMode, 'Deployment Mode'),
                formatValue(config.deploymentMode, emptyValue)
            ),
            createRow(
                text(labels.status, 'Status'),
                formatValue(config.status, emptyValue)
            )
        );

        root.append(title, intro, list);
        container.replaceChildren(root);
    }
};

export default deploymentConfigurationPlugin;
