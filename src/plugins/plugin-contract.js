export function isValidPlugin(plugin) {
    return (
        plugin &&
        typeof plugin.id === 'string' &&
        plugin.id.trim().length > 0 &&
        typeof plugin.label === 'string' &&
        plugin.label.trim().length > 0 &&
        typeof plugin.render === 'function'
    );
}
