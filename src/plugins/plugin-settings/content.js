export default {
    title: 'Plugin Settings',
    description: 'Visibility and activation controls.',
    emptyText: 'No plugin settings configured.',
    settings: [
        {
            pluginId: 'website-public',
            enabled: true,
            displayOrder: 10,
            visibility: 'public',
            settings: {}
        },
        {
            pluginId: 'organization-profile',
            enabled: true,
            displayOrder: 20,
            visibility: 'public',
            settings: {}
        },
        {
            pluginId: 'capability-selector',
            enabled: true,
            displayOrder: 30,
            visibility: 'public',
            settings: {}
        }
    ]
};
