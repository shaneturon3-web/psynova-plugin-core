import metadata from './content.js';
import './styles.css';

function ensureMeta(selector, attributes) {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement('meta');

        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }

        document.head.appendChild(element);
    }

    return element;
}

function applyMetadata(data) {
    document.title = data.siteTitle || data.defaultTitle || 'PsyNova';

    const description = ensureMeta('meta[name="description"]', { name: 'description' });
    description.setAttribute('content', data.siteDescription || data.defaultDescription || '');

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    ogTitle.setAttribute('content', data.ogTitle || data.siteTitle || '');

    const ogDescription = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    ogDescription.setAttribute('content', data.ogDescription || data.siteDescription || '');
}

export default {
    id: 'site-metadata',
    label: 'Site Metadata',
    enabled: true,
    version: '0.1.0',
    description: 'Data-driven public page metadata',
    routes: ['#/'],
    render(container) {
        applyMetadata(metadata);
        container.innerHTML = '<p class="site-metadata-status">Site metadata applied.</p>';
    }
};
