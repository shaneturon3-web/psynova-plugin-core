const content = {
    title: 'Organization Profiles',
    intro: 'Select the organization shape that best fits the intended PsyNova instance.',
    emptyMessage: 'No organization profiles configured.',
    profiles: [
        {
            id: 'individual-practice',
            label: 'Individual Practice',
            description: 'A focused setup for one independent professional operator.',
            enabled: true
        },
        {
            id: 'professional-office',
            label: 'Professional Office',
            description: 'A shared operating structure for a small professional office.',
            enabled: true
        },
        {
            id: 'professional-group',
            label: 'Professional Group',
            description: 'A coordinated model for multiple professionals working under one structure.',
            enabled: true
        },
        {
            id: 'multi-disciplinary-organization',
            label: 'Multi-Disciplinary Organization',
            description: 'A flexible structure for teams with varied professional capabilities.',
            enabled: true
        },
        {
            id: 'network',
            label: 'Network',
            description: 'A connected model for distributed professional participants.',
            enabled: true
        },
        {
            id: 'enterprise',
            label: 'Enterprise',
            description: 'A scalable structure for larger organizations with broader operational needs.',
            enabled: true
        }
    ]
};

export default content;
