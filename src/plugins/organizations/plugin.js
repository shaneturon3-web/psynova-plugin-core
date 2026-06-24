import { organizationsContent } from "./content.js";
import "./styles.css";

function i18nSpan(key, fallback = "") {
    return `<span data-i18n="${key}">${fallback}</span>`;
}

function createOrganizationCard(card) {
    return `
        <article class="organizations__card">
            <h3>${i18nSpan(card.titleKey, card.fallbackTitle)}</h3>
            <p>${i18nSpan(card.pointsKey, "")}</p>
        </article>
    `;
}

function createPracticeCard(card) {
    return `
        <article class="organizations__card">
            <h3>${i18nSpan(card.titleKey, card.fallbackTitle)}</h3>
            <p>${i18nSpan(card.bodyKey, card.fallbackBody)}</p>
        </article>
    `;
}

export default {
    id: "organizations",
    label: "Organizations",
    enabled: true,
    routes: ["#/organizations"],

    render(container) {
        const { organization, practiceTypes } = organizationsContent;

        container.innerHTML = `
            <main class="organizations">
                <section class="organizations__section">
                    <header class="organizations__header">
                        <h1>${i18nSpan(organization.headingKey, organization.fallbackHeading)}</h1>
                        <p>${i18nSpan(organization.bodyKey, organization.fallbackBody)}</p>
                    </header>

                    <div class="organizations__grid">
                        ${organization.cards.map(createOrganizationCard).join("")}
                    </div>
                </section>

                <section class="organizations__section">
                    <header class="organizations__header">
                        <h2>${i18nSpan(practiceTypes.headingKey, practiceTypes.fallbackHeading)}</h2>
                        <p>${i18nSpan(practiceTypes.bodyKey, practiceTypes.fallbackBody)}</p>
                    </header>

                    <div class="organizations__grid organizations__grid--three">
                        ${practiceTypes.cards.map(createPracticeCard).join("")}
                    </div>
                </section>
            </main>
        `;
    }
};
