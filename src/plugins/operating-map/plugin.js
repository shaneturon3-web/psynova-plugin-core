import { operatingMapContent } from "./content.js";
import "./styles.css";

function i18nSpan(key, fallback = "") {
    return `<span data-i18n="${key}">${fallback}</span>`;
}

function createMapItem(item) {
    return `
        <article class="operating-map__item">
            <h2>${i18nSpan(item.titleKey, item.fallbackTitle)}</h2>
            <span>${i18nSpan(item.statusKey, item.fallbackStatus)}</span>
        </article>
    `;
}

function createCard(card) {
    return `
        <article class="operating-map__card">
            <div>
                <h3>${i18nSpan(card.titleKey, card.fallbackTitle)}</h3>
                <p>${i18nSpan(card.bodyKey, card.fallbackBody)}</p>
            </div>
            <span class="operating-map__pill">${i18nSpan(card.labelKey, card.fallbackLabel)}</span>
        </article>
    `;
}

export default {
    id: "operating-map",
    label: "Operating Map",
    enabled: true,
    routes: ["#/operating-map"],

    render(container) {
        container.innerHTML = `
            <section class="operating-map">
                <header class="operating-map__hero">
                    <p class="operating-map__eyebrow">
                        ${i18nSpan(operatingMapContent.eyebrow.key, operatingMapContent.eyebrow.fallback)}
                    </p>
                    <h1>
                        ${i18nSpan(operatingMapContent.title.key, operatingMapContent.title.fallback)}
                    </h1>
                    <p class="operating-map__intro">
                        ${i18nSpan(operatingMapContent.intro.key, operatingMapContent.intro.fallback)}
                    </p>
                </header>

                <div class="operating-map__panel" aria-label="Operating map">
                    ${operatingMapContent.mapItems.map(createMapItem).join("")}
                </div>

                <div class="operating-map__grid">
                    ${operatingMapContent.cards.map(createCard).join("")}
                </div>
            </section>
        `;
    }
};
