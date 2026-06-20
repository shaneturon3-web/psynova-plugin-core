export default {
    title: 'Build Health Check',
    description: 'Compact static readiness checklist.',
    items: [
        {
            id: 'site-loads',
            label: 'site loads',
            status: 'ready',
            notes: 'Public surface initializes from the static entry point.'
        },
        {
            id: 'plugins-registered',
            label: 'plugins registered',
            status: 'ready',
            notes: 'Registered modules are loaded through the plugin registry.'
        },
        {
            id: 'forbidden-strings-scan-clean',
            label: 'forbidden strings scan clean',
            status: 'ready-for-review',
            notes: 'Review source copy before publishing.'
        },
        {
            id: 'build-output-configured',
            label: 'build output configured',
            status: 'ready',
            notes: 'The output directory is set for static hosting.'
        },
        {
            id: 'preview-verified',
            label: 'preview verified',
            status: 'ready-for-review',
            notes: 'Run local preview before publishing.'
        }
    ]
};
