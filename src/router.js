export function getCurrentRoute() {
    const hash = window.location.hash || '#/';
    const routeWithQuery = hash.startsWith('#') ? hash.slice(1) : hash;
    const route = routeWithQuery.split('?')[0] || '/';

    return route.startsWith('/') ? route : `/${route}`;
}

export function navigateTo(route = '/') {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    window.location.hash = normalizedRoute;
}
