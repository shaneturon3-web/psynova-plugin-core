import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

const navigationPlugin = {
    id: 'navigation',
    label: 'Navigation',
    enabled: true,
    version: '0.1.0',
    description: 'Data-driven public navigation',
    routes: ['#/'],

    render(container, context) {
        container.replaceChildren();

        const nav = document.createElement('nav');
        nav.className = 'navigation';
        nav.setAttribute('aria-label', 'Public navigation');

        const items = Array.isArray(content.items)
            ? content.items.filter((item) => item.enabled !== false)
            : [];

        if (items.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'No navigation items available.';
            nav.appendChild(empty);
        } else {
            items.forEach((item) => {
                const link = document.createElement('a');
                link.className = 'navigation__link';
                link.href = text(item.route, '#/');
                link.textContent = text(item.label, 'Link');
                link.dataset.navItem = text(item.id);
                const currentRoute = context?.route || '/';
                const itemRoute = text(item.route, '#/').replace(/^#/, '') || '/';
                if (currentRoute === itemRoute) {
                    link.setAttribute('aria-current', 'page');
                }
                nav.appendChild(link);
            });
        }

        container.appendChild(nav);
    }
};

export default navigationPlugin;
