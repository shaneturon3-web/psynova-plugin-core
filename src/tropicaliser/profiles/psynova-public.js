export const psynovaPublicTropicaliser = {
    id: "psynova-public",
    surfaceProfile: "psynova-infrastructure",
    theme: "infrastructure-warm",
    copyNamespace: "infrastructure",
    apiProfile: "standard-public",
    enabledPlugins: [],
    routePolicy: {
        unknownRoute: "fallback-to-base"
    },
    safetyPolicy: {
        posture: "public-infrastructure",
        clinic: "off"
    },
    deploymentFlags: {
        portable: true,
        shelfReady: true
    }
};
