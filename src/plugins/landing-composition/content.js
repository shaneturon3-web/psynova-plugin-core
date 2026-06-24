export default {
    hero: {
        eyebrow: 'PsyNova',
        heading: 'Professional Practice Infrastructure',
        subheading: 'A modular operating layer for organizations that need clean public presence, structured capabilities, and deployable digital infrastructure.',
        primaryAction: {
            i18nKey: 'landing.hero.primaryAction',
            label: 'View operating map',
            href: '#/operating-map'
        },
        secondaryAction: {
            i18nKey: 'landing.hero.secondaryAction',
            label: 'Define practice shape',
            href: '#/organizations'
        },
        systemPanel: {
            title: 'Engine Base',
            items: [
                'Public Surface',
                'Capability Registry',
                'Organization Profile',
                'Deployment Package'
            ]
        }
    },
    capabilityStrip: [
        {
            title: 'Public Presence',
            description: 'A composed public surface that communicates the organization clearly.',
            status: 'ready'
        },
        {
            title: 'Capability Registry',
            description: 'Selectable modules remain explicit, readable, and easy to review.',
            status: 'modular'
        },
        {
            title: 'Organization Fit',
            description: 'Structure can adapt to different operating shapes without visual clutter.',
            status: 'configurable'
        },
        {
            title: 'Static Deployment',
            description: 'The project remains suitable for simple static hosting and review.',
            status: 'static'
        }
    ],
    organizationFit: {
        heading: 'Built around the shape of the organization',
        body: 'PsyNova is structured to adapt from an individual professional practice to a larger organization without forcing every deployment into the same surface.',
        cards: [
            'Individual Practice',
            'Professional Office',
            'Professional Group',
            'Network'
        ]
    },
    modularInfrastructure: {
        heading: 'Infrastructure before decoration',
        body: 'The system separates visual language, public content, capabilities, deployment metadata, and release checks so the public site can evolve without collapsing into a custom one-off build.',
        columns: [
            {
                title: 'Public layer',
                body: 'Identity, navigation, content, metadata, and footer are composed as public surface modules.'
            },
            {
                title: 'Configuration layer',
                body: 'Capabilities, organization profiles, settings, and manifests remain data-driven.'
            },
            {
                title: 'Deployment layer',
                body: 'Build profile, static files, route fallback, and release checks stay visible and reviewable.'
            }
        ]
    },
    nextStep: {
        heading: 'Ready for controlled deployment',
        body: 'The next step is a test deployment, visual review, and domain attachment only after the public surface is accepted.',
        action: {
            label: 'Prepare deploy review',
            href: '#/contact'
        }
    }
};
