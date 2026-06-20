import footer from './content.js';
import './styles.css';

function createLink(item) {
    const anchor = document.createElement('a');
    anchor.href = item.route || '#/';
    anchor.textContent = item.label || 'Link';
    return anchor;
}

export default {
    id: 'site-footer',
    label: 'Site Footer',
    enabled: true,
    version: '0.1.0',
    description: 'Clean public footer from data',
    routes: ['#/'],
    render(container) {
        container.replaceChildren();

        const footerElement = document.createElement('footer');
        footerElement.className = 'site-footer';

        const brand = document.createElement('div');
        brand.className = 'site-footer__brand';
        brand.textContent = footer.brand || 'PsyNova';

        const line = document.createElement('p');
        line.className = 'site-footer__line';
        line.textContent = footer.line || 'Professional Practice Infrastructure';

        const links = document.createElement('nav');
        links.className = 'site-footer__links';
        links.setAttribute('aria-label', 'Footer navigation');

        const enabledLinks = Array.isArray(footer.links)
            ? footer.links.filter((item) => item.enabled !== false)
            : [];

        for (const item of enabledLinks) {
            links.appendChild(createLink(item));
        }

        const copyright = document.createElement('p');
        copyright.className = 'site-footer__copyright';
        copyright.textContent = footer.copyright || '';

        footerElement.append(brand, line, links, copyright);
        container.appendChild(footerElement);
    }
};
