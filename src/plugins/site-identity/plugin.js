import site from '../../content/site.js';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

export default {
    id: 'site-identity',
    label: 'Site Identity',
    enabled: true,
    description: 'Core site identity',
    version: '1.0.0',

    render(container) {
        container.replaceChildren();

        const title = document.createElement('h1');
        title.className = 'site-title';
        title.textContent = text(site.name, '<span data-i18n="canary.brand">PsyNova</span>');

        const line = document.createElement('p');
        line.className = 'site-line';
        line.textContent = text(site.line, 'Professional Practice Infrastructure');

        container.append(title, line);
    }
};
