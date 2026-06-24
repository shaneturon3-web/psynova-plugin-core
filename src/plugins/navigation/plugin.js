import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function normalizeRoute(route = '#/') {
    const raw = String(route || '#/').trim();
    const withoutHash = raw.startsWith('#') ? raw.slice(1) : raw;
    const withoutQuery = withoutHash.split('?')[0];
    const withSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;

    if (withSlash.length > 1 && withSlash.endsWith('/')) {
        return withSlash.slice(0, -1);
    }

    return withSlash || '/';
}

function getAllowedRoutes(context = {}) {
    const routes = context?.profile?.routes;

    if (!Array.isArray(routes) || routes.length === 0) {
        return null;
    }

    return new Set(routes.map(normalizeRoute));
}

function isAllowedNavigationItem(item, allowedRoutes) {
    if (!allowedRoutes) {
        return true;
    }

    return allowedRoutes.has(normalizeRoute(item.route));
}

const navigationPlugin = {
    id: 'navigation',
    label: 'Navigation',
    enabled: true,
    version: '0.1.0',
    description: 'Data-driven public navigation',
    routes: ['*'],

    render(container, context = {}) {
        container.replaceChildren();

        const nav = document.createElement('nav');
        nav.className = 'navigation';
        nav.setAttribute('aria-label', 'Public navigation');

        const allowedRoutes = getAllowedRoutes(context);

        const items = Array.isArray(content.items)
            ? content.items.filter((item) => {
                return item.enabled !== false && isAllowedNavigationItem(item, allowedRoutes);
            })
            : [];

        if (items.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'No navigation items available.';
            nav.appendChild(empty);
        } else {
            items.forEach((item) => {
                const itemRoute = normalizeRoute(item.route);
                const currentRoute = normalizeRoute(context.route || '/');

                const link = document.createElement('a');
                link.className = 'navigation__link';
                link.href = text(item.route, '#/');
                link.dataset.navItem = text(item.id);

                if (currentRoute === itemRoute) {
                    link.setAttribute('aria-current', 'page');
                }

                const label = document.createElement('span');
                label.dataset.i18n = text(item.i18nKey, `nav.${text(item.id, 'item')}`);
                label.textContent = text(item.label, 'Link');

                link.appendChild(label);
                nav.appendChild(link);
            });
        }

        container.appendChild(nav);
    }
};

export default navigationPlugin;
