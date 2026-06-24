import { DEFAULT_TROPICALISER_ID, tropicalisers } from './tropicaliser-registry.js';
import { createTropicaliserRuntime } from './validate-tropicaliser.js';

function cleanTropicaliserId(value) {
    if (typeof value === 'string' && value.trim()) {
        return value.trim();
    }

    return DEFAULT_TROPICALISER_ID;
}

function getDeploymentTropicaliserId() {
    if (typeof window === 'undefined') {
        return null;
    }

    if (
        window.__PSYNOVA_DEPLOYMENT__ &&
        typeof window.__PSYNOVA_DEPLOYMENT__.tropicaliserId === 'string'
    ) {
        return window.__PSYNOVA_DEPLOYMENT__.tropicaliserId;
    }

    if (typeof window.__PSYNOVA_TROPICALISER_ID__ === 'string') {
        return window.__PSYNOVA_TROPICALISER_ID__;
    }

    return null;
}

export function getAvailableTropicaliserIds() {
    return Object.keys(tropicalisers).sort();
}

export function resolveTropicaliser(tropicaliserId = null) {
    const requestedId = cleanTropicaliserId(
        tropicaliserId ||
        getDeploymentTropicaliserId() ||
        DEFAULT_TROPICALISER_ID
    );

    const fallback = tropicalisers[DEFAULT_TROPICALISER_ID];
    const candidate = tropicalisers[requestedId];
    const usedFallback = !candidate;

    return createTropicaliserRuntime(candidate || fallback, fallback, {
        requestedId,
        usedFallback,
        availableIds: getAvailableTropicaliserIds()
    });
}
