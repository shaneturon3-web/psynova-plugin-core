export default {
    title: 'Capability Selector',
    intro: 'Select capabilities to shape a PsyNova instance.',
    emptyMessage: 'No capabilities available.',
    capabilities: [
        {
            id: 'website',
            label: 'Website',
            description: 'Public website presentation capability.',
            enabled: true,
            selected: true
        },
        {
            id: 'booking',
            label: 'Booking',
            description: 'Scheduling intent capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'messaging',
            label: 'Messaging',
            description: 'Communication intent capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'billing',
            label: 'Billing',
            description: 'Payment workflow intent capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'records',
            label: 'Records',
            description: 'Information organization capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'cms',
            label: 'CMS',
            description: 'Content management capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'automation',
            label: 'Automation',
            description: 'Workflow automation capability for future configuration.',
            enabled: true,
            selected: false
        },
        {
            id: 'custom',
            label: 'Custom',
            description: 'Custom capability extension point.',
            enabled: true,
            selected: false
        }
    ]
};
