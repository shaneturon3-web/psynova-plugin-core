export default {
    title: 'Contact Routing',
    statement: 'Route inquiries by organization profile and selected capabilities.',
    primaryContact: null,
    routingOptions: [
        {
            id: 'organization-profile',
            label: 'Organization profile',
            description: 'Route by selected organization type.',
            enabled: true
        },
        {
            id: 'selected-capabilities',
            label: 'Selected capabilities',
            description: 'Route by selected capability set.',
            enabled: true
        },
        {
            id: 'general-inquiry',
            label: 'General inquiry',
            description: 'Route unmatched inquiries to a general destination.',
            enabled: true
        }
    ],
    status: null,
    labels: {
        primaryContact: 'Primary Contact',
        status: 'Status',
        emptyValue: 'Not configured',
        emptyOptions: 'No routing options configured.'
    }
};
