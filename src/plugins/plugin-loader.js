import { plugins } from './plugin-registry.js';
import { isValidPlugin } from './plugin-contract.js';

export function loadPlugins() {
    return plugins.filter((plugin) => {
        return plugin.enabled !== false && isValidPlugin(plugin);
    });
}
