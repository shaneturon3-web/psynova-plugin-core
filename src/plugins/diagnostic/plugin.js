import { diagnosticContent } from "./content.js";
import "./styles.css";

function i18nSpan(key, fallback = "") {
    return `<span data-i18n="${key}">${fallback}</span>`;
}

function createCard(card) {
    return `
        <article class="diagnostic__card">
            <h2>${i18nSpan(card.titleKey, card.fallbackTitle)}</h2>
            <p>${i18nSpan(card.bodyKey, card.fallbackBody)}</p>
        </article>
    `;
}

export default {
    id: "diagnostic",
    label: "Diagnostic",
    enabled: true,
    routes: ["#/diagnostic"],

    render(container) {
        container.innerHTML = `
            <main class="diagnostic">
                <section class="diagnostic__panel">
                    <p class="diagnostic__eyebrow">
                        ${i18nSpan(diagnosticContent.eyebrow.key, diagnosticContent.eyebrow.fallback)}
                    </p>

                    <h1>
                        ${i18nSpan(diagnosticContent.title.key, diagnosticContent.title.fallback)}
                    </h1>

                    <p class="diagnostic__intro">
                        ${i18nSpan(diagnosticContent.intro.key, diagnosticContent.intro.fallback)}
                    </p>

                    <div class="diagnostic__grid">
                        ${diagnosticContent.cards.map(createCard).join("")}
                    </div>

                    <div class="diagnostic__actions">
                        <a class="diagnostic__button" href="${diagnosticContent.cta.href}">
                            ${i18nSpan(diagnosticContent.cta.labelKey, diagnosticContent.cta.fallbackLabel)}
                        </a>
                    </div>
                </section>
            </main>
        `;
    }
};
