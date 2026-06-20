import content from './content.js';
import site from '../../content/site.js';
import capabilities from '../../content/capabilities.js';
import organizationProfiles from '../organization-profile/content.js';
import deploymentConfiguration from '../deployment-configuration/content.js';
import { plugins } from '../plugin-registry.js';
import './styles.css';

function summarizePlugins() {
    return Array.isArray(plugins)
        ? plugins.map((plugin) => ({
            id: plugin.id,
            label: plugin.label,
            version: plugin.version,
            enabled: plugin.enabled !== false,
            routes: Array.isArray(plugin.routes) ? plugin.routes : []
        }))
        : [];
}

function buildConfigurationSummary() {
    return {
        site,
        capabilities,
        organizationProfile: organizationProfiles,
        deploymentConfiguration,
        plugins: summarizePlugins()
    };
}

export default {
    id: 'export-static-config',
    label: 'Export Static Config',
    enabled: true,
    version: '0.1.0',
    description: 'Static export summary of current configuration',
    routes: ['#/config'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'export-static-config';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Static Configuration';

        const status = document.createElement('p');
        status.className = 'export-static-config__status';
        status.textContent = content.status || 'Ready for export';

        const summaryTitle = document.createElement('h3');
        summaryTitle.textContent = content.summaryLabel || 'Summary';

        const list = document.createElement('ul');
        list.className = 'export-static-config__summary';

        const items = Array.isArray(content.summaryItems) ? content.summaryItems : [];
        for (const item of items) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        }

        const details = document.createElement('details');
        details.className = 'export-static-config__details';

        const summary = document.createElement('summary');
        summary.textContent = content.detailsLabel || 'View raw configuration';

        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(buildConfigurationSummary(), null, 2);

        details.append(summary, pre);
        wrapper.append(title, status, summaryTitle, list, details);
        container.appendChild(wrapper);
    }
};
