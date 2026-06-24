import { seedbank } from './seedbank.js';

const SUPPORTED = ['en', 'fr-CA', 'es-MX'];
const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'psynova.lang';

function normalize(value) {
  const raw = String(value || '').trim();

  if (!raw) return null;

  const lower = raw.toLowerCase();

  if (lower === 'en') return 'en';
  if (lower === 'fr' || lower === 'fr-ca') return 'fr-CA';
  if (lower === 'es' || lower === 'es-mx') return 'es-MX';

  return null;
}

function readLocaleParam(params) {
  if (params.has('lang')) return params.get('lang');
  if (params.has('locale')) return params.get('locale');
  return null;
}

function normalizeRequestedLocale(value) {
  if (value === null) return null;
  return normalize(value) || DEFAULT_LOCALE;
}

function fromQuery() {
  const params = new URLSearchParams(window.location.search);
  return normalizeRequestedLocale(readLocaleParam(params));
}

function fromHashQuery() {
  const hash = window.location.hash || '';
  const queryIndex = hash.indexOf('?');

  if (queryIndex === -1) return null;

  const params = new URLSearchParams(hash.slice(queryIndex + 1));
  return normalizeRequestedLocale(readLocaleParam(params));
}

function fromStorage() {
  try {
    return normalize(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function fromBrowser() {
  return normalize(navigator.language);
}

function getNestedValue(source, path) {
  return path.split('.').reduce((current, part) => {
    if (current && Object.prototype.hasOwnProperty.call(current, part)) {
      return current[part];
    }

    return undefined;
  }, source);
}

function buildAliases(localeSource) {
  return {
    'nav.home': localeSource.navigation?.home,
    'nav.capabilities': localeSource.navigation?.capabilities,
    'nav.organization': localeSource.navigation?.organization,
    'nav.diagnostic': localeSource.navigation?.diagnostic,
    'nav.contact': localeSource.navigation?.contact,

    'footer.brand': localeSource.footer?.brand,
    'footer.line': localeSource.footer?.subtitle,
    'footer.copyright': localeSource.footer?.copyright,
    'footer.link.#/': localeSource.navigation?.home,
    'footer.link.#/capabilities': localeSource.navigation?.capabilities,
    'footer.link.#/organization': localeSource.navigation?.organization,
    'footer.link.#/diagnostic': localeSource.navigation?.diagnostic,
    'footer.link.#/contact': localeSource.navigation?.contact,

    'landing.hero.eyebrow': localeSource.hero?.brand,
    'landing.hero.heading': localeSource.hero?.title,
    'landing.hero.subheading': localeSource.hero?.subtitle,
    'landing.hero.primaryAction': localeSource.hero?.primaryCta,
    'landing.hero.secondaryAction': localeSource.hero?.secondaryCta,

    'landing.hero.systemPanel.title': localeSource.operatingMap?.title,
    'landing.hero.systemPanel.item.0.label': localeSource.operatingMap?.practiceInterface?.title,
    'landing.hero.systemPanel.item.0.status': localeSource.operatingMap?.practiceInterface?.status,
    'landing.hero.systemPanel.item.1.label': localeSource.operatingMap?.capabilitySet?.title,
    'landing.hero.systemPanel.item.1.status': localeSource.operatingMap?.capabilitySet?.status,
    'landing.hero.systemPanel.item.2.label': localeSource.operatingMap?.organizationShape?.title,
    'landing.hero.systemPanel.item.2.status': localeSource.operatingMap?.organizationShape?.status,
    'landing.hero.systemPanel.item.3.label': localeSource.operatingMap?.deploymentShape?.title,
    'landing.hero.systemPanel.item.3.status': localeSource.operatingMap?.deploymentShape?.status,

    'landing.firstStep.eyebrow': localeSource.firstUsefulStep?.eyebrow,
    'landing.firstStep.heading': localeSource.firstUsefulStep?.title,
    'landing.firstStep.body': localeSource.firstUsefulStep?.body,

    'landing.capabilityCards.practiceInterface.title': localeSource.capabilityCards?.practiceInterface?.title,
    'landing.capabilityCards.practiceInterface.body': localeSource.capabilityCards?.practiceInterface?.body,
    'landing.capabilityCards.practiceInterface.label': localeSource.capabilityCards?.practiceInterface?.label,
    'landing.capabilityCards.capabilitySet.title': localeSource.capabilityCards?.capabilitySet?.title,
    'landing.capabilityCards.capabilitySet.body': localeSource.capabilityCards?.capabilitySet?.body,
    'landing.capabilityCards.capabilitySet.label': localeSource.capabilityCards?.capabilitySet?.label,
    'landing.capabilityCards.organizationShape.title': localeSource.capabilityCards?.organizationShape?.title,
    'landing.capabilityCards.organizationShape.body': localeSource.capabilityCards?.organizationShape?.body,
    'landing.capabilityCards.organizationShape.label': localeSource.capabilityCards?.organizationShape?.label,
    'landing.capabilityCards.deploymentShape.title': localeSource.capabilityCards?.deploymentShape?.title,
    'landing.capabilityCards.deploymentShape.body': localeSource.capabilityCards?.deploymentShape?.body,
    'landing.capabilityCards.deploymentShape.label': localeSource.capabilityCards?.deploymentShape?.label,

    'landing.organization.heading': localeSource.organizationDesign?.title,
    'landing.organization.body': localeSource.organizationDesign?.body,
    'landing.organization.card.0': localeSource.organizationTypes?.individualPractice?.title,
    'landing.organization.card.0.points': localeSource.organizationTypes?.individualPractice?.points?.join(' · '),
    'landing.organization.card.1': localeSource.organizationTypes?.professionalOffice?.title,
    'landing.organization.card.1.points': localeSource.organizationTypes?.professionalOffice?.points?.join(' · '),
    'landing.organization.card.2': localeSource.organizationTypes?.professionalGroup?.title,
    'landing.organization.card.2.points': localeSource.organizationTypes?.professionalGroup?.points?.join(' · '),
    'landing.organization.card.3': localeSource.organizationTypes?.network?.title,
    'landing.organization.card.3.points': localeSource.organizationTypes?.network?.points?.join(' · '),

    'landing.value.heading': localeSource.valueStatement?.title,
    'landing.value.heading.line1': localeSource.valueStatement?.title,
    'landing.value.body': localeSource.valueStatement?.body,

    'landing.practiceTypes.regular.title': localeSource.practiceTypes?.regular?.title,
    'landing.practiceTypes.regular.body': localeSource.practiceTypes?.regular?.body,
    'landing.practiceTypes.regular.cta': localeSource.practiceTypes?.regular?.cta,
    'landing.practiceTypes.partial.title': localeSource.practiceTypes?.partial?.title,
    'landing.practiceTypes.partial.body': localeSource.practiceTypes?.partial?.body,
    'landing.practiceTypes.partial.cta': localeSource.practiceTypes?.partial?.cta,
    'landing.practiceTypes.regulated.title': localeSource.practiceTypes?.regulated?.title,
    'landing.practiceTypes.regulated.body': localeSource.practiceTypes?.regulated?.body,
    'landing.practiceTypes.regulated.cta': localeSource.practiceTypes?.regulated?.cta,

    'landing.next.heading': localeSource.contact?.lead,
    'landing.next.body': localeSource.contact?.body,
    'landing.next.action': localeSource.contact?.cta,
  };
}

function getDictionary(locale) {
  const englishSource = seedbank.locales?.[DEFAULT_LOCALE] || {};
  const localeSource = seedbank.locales?.[locale] || {};

  return {
    primary: {
      ...buildAliases(localeSource),
      ...localeSource,
    },
    fallback: {
      ...buildAliases(englishSource),
      ...englishSource,
    },
  };
}

function getSlotValue(dictionaries, key) {
  return (
    dictionaries.primary[key] ??
    getNestedValue(dictionaries.primary, key) ??
    dictionaries.fallback[key] ??
    getNestedValue(dictionaries.fallback, key)
  );
}

export function resolveLocale() {
  return fromQuery() || fromHashQuery() || fromStorage() || fromBrowser() || DEFAULT_LOCALE;
}

export function applyLanguage(root = document) {
  const locale = resolveLocale();
  const dictionary = getDictionary(locale);

  document.documentElement.lang = locale;
  document.documentElement.dataset.psynovaLang = locale;

  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}

  root.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = getSlotValue(dictionary, key);

    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  let badge = document.getElementById('psynova-language-badge');

  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'psynova-language-badge';
    badge.style.cssText = 'position:fixed;bottom:12px;right:12px;z-index:99999;background:#111;color:#fff;padding:8px 10px;border-radius:8px;font:12px system-ui';
    document.body.appendChild(badge);
  }

  badge.textContent = `lang: ${locale}`;

  return locale;
}
