export const infrastructureProfile = {
    id: "psynova-infrastructure",
    label: "PsyNova Infrastructure",
    theme: "infrastructure-warm",
    copyNamespace: "infrastructure",
    defaultLocale: "en",
    routes: [
        "#/",
        "#/operating-map",
        "#/organizations",
        "#/diagnostic",
        "#/reservation",
        "#/contact"
    ],
    publicPlugins: [
        "navigation",
        "landing-composition",
        "operating-map",
        "organizations",
        "diagnostic",
        "contact",
        "site-footer"
    ],
    cta: {
        primary: "reservation.open",
        secondary: "contact.open"
    }
};
