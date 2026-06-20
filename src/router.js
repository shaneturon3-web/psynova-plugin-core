export function getCurrentRoute() {
    const hash = window.location.hash || '#/';
    const route = hash.startsWith('#') ? hash.slice(1) : hash;

    return route.startsWith('/') ? route : `/${route}`;
}

export function navigateTo(route = '/') {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    window.location.hash = normalizedRoute;
}
