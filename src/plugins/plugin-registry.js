import websitePublic from './website-public/plugin.js';
import organizationProfile from './organization-profile/plugin.js';
import capabilitySelector from './capability-selector/plugin.js';
import deploymentConfiguration from './deployment-configuration/plugin.js';
import contactRouting from './contact-routing/plugin.js';
import contentPage from './content-page/plugin.js';
import navigation from './navigation/plugin.js';
import pluginPageRoute from './plugin-page-route/plugin.js';
import themeSystem from './theme-system/plugin.js';
import siteMetadata from './site-metadata/plugin.js';
import siteFooter from './site-footer/plugin.js';

import pluginSettings from './plugin-settings/plugin.js';
import pluginManifest from './plugin-manifest/plugin.js';
import exportStaticConfig from './export-static-config/plugin.js';

import deployProfile from './deploy-profile/plugin.js';
import buildHealthCheck from './build-health-check/plugin.js';
import staticRouteFallback from './static-route-fallback/plugin.js';

import cloudflarePagesProfile from './cloudflare-pages-profile/plugin.js';
import releasePackageChecklist from './release-package-checklist/plugin.js';

import visualLanguage from './visual-language/plugin.js';
import landingComposition from './landing-composition/plugin.js';
import componentPolish from './component-polish/plugin.js';
import publicSurfaceGate from './public-surface-gate/plugin.js';
import gateContent from './public-surface-gate/content.js';

const publicRoutes = new Set([
    '/',
    '/capabilities',
    '/organization',
    '/contact'
]);

const homeVisiblePlugins = new Set(gateContent.publicSurface);
const systemReviewPlugins = new Set(gateContent.systemReview);
const hiddenSideEffectPlugins = new Set([
    'theme-system',
    'site-metadata'
]);
const hiddenOnPublicSideEffectPlugins = new Set([
    'visual-language'
]);
const hiddenStylePlugins = new Set([
    'component-polish'
]);

function routeVisible(pluginId, route) {
    if (route === gateContent.systemReviewRoute) {
        return systemReviewPlugins.has(pluginId);
    }

    if (publicRoutes.has(route)) {
        return homeVisiblePlugins.has(pluginId);
    }

    return homeVisiblePlugins.has(pluginId);
}

function gated(plugin) {
    return {
        ...plugin,
        render(container, context = {}) {
            const route = context.route || '/';

            if (!routeVisible(plugin.id, route)) {
                container.remove();
                return;
            }

            if (hiddenStylePlugins.has(plugin.id)) {
                container.remove();
                return;
            }

            plugin.render(container, context);

            if (
                hiddenSideEffectPlugins.has(plugin.id) ||
                (publicRoutes.has(route) && hiddenOnPublicSideEffectPlugins.has(plugin.id))
            ) {
                container.remove();
            }
        }
    };
}

export const plugins = [
    themeSystem,
    siteMetadata,
    componentPolish,
    navigation,
    publicSurfaceGate,
    landingComposition,
    siteFooter,
    websitePublic,
    organizationProfile,
    capabilitySelector,
    deploymentConfiguration,
    contactRouting,
    contentPage,
    pluginPageRoute,
    pluginSettings,
    pluginManifest,
    exportStaticConfig,
    deployProfile,
    buildHealthCheck,
    staticRouteFallback,
    cloudflarePagesProfile,
    releasePackageChecklist,
    visualLanguage
].map(gated);
