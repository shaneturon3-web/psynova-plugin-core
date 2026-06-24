import { psynovaStandardTropicaliser } from './profiles/psynova-standard.js';
import { psynovaPublicTropicaliser } from './profiles/psynova-public.js';

export const DEFAULT_TROPICALISER_ID = 'psynova-standard';

export const tropicalisers = {
    [psynovaStandardTropicaliser.id]: psynovaStandardTropicaliser,
    [psynovaPublicTropicaliser.id]: psynovaPublicTropicaliser
};
