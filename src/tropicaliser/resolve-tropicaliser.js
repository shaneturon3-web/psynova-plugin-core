import { DEFAULT_TROPICALISER_ID, tropicalisers } from './tropicaliser-registry.js';

export function resolveTropicaliser(tropicaliserId = DEFAULT_TROPICALISER_ID) {
    return tropicalisers[tropicaliserId] || tropicalisers[DEFAULT_TROPICALISER_ID];
}
