import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function createAction(action, variant) {
    const link = document.createElement('a');
    link.className = `pn-button pn-button-${variant}`;
    link.href = text(action?.href, '#/');
    const key = action?.i18nKey || `landing.action.${variant}`;
    link.innerHTML = `<span data-i18n="${key}">${text(action?.label, 'Continue')}</span>`;
    return link;
}

function createCard(card, index = 0) {
    const article = document.createElement('article');
    article.className = 'pn-public-card';

    const title = document.createElement('h3');
    title.innerHTML = `<span data-i18n="${card.titleKey || `landing.card.${index}.title`}">${text(card.title, 'Capability')}</span>`;

    const description = document.createElement('p');
    description.innerHTML = `<span data-i18n="${card.bodyKey || `landing.card.${index}.body`}">${text(card.description, 'Configured capability.')}</span>`;

    const status = document.createElement('span');
    status.className = 'pn-status-pill';
    status.innerHTML = `<span data-i18n="${card.labelKey || `landing.card.${index}.label`}">${text(card.status, 'ready')}</span>`;

    article.append(title, description, status);
    return article;
}

function createSectionHeader(heading, body, headingKey, bodyKey) {
    const header = document.createElement('div');
    header.className = 'pn-section-header';

    const title = document.createElement('h2');
    title.innerHTML = `<span data-i18n="${headingKey}">${text(heading, 'Section')}</span>`;

    const copy = document.createElement('p');
    copy.innerHTML = `<span data-i18n="${bodyKey}">${text(body, '')}</span>`;

    header.append(title, copy);
    return header;
}

export default {
    id: 'landing-composition',
    label: 'Landing Composition',
    enabled: true,
    version: '0.1.0',
    description: 'Composed public landing surface.',
    routes: ['#/'],

    render(container) {
        const page = document.createElement('div');
        page.className = 'pn-landing';

        const hero = document.createElement('section');
        hero.className = 'pn-hero';

        const copy = document.createElement('div');
        copy.className = 'pn-hero-copy';

        const eyebrow = document.createElement('p');
        eyebrow.className = 'pn-eyebrow';
        eyebrow.innerHTML = `<span data-i18n="landing.hero.eyebrow">${text(content.hero.eyebrow, 'PsyNova')}</span>`;

        const heading = document.createElement('h1');
        heading.innerHTML = `<span data-i18n="landing.hero.heading">${text(content.hero.heading, 'Professional Practice Infrastructure')}</span>`;

        const subheading = document.createElement('p');
        subheading.className = 'pn-hero-subheading';
        subheading.innerHTML = `<span data-i18n="landing.hero.subheading">${text(content.hero.subheading, '')}</span>`;

        const actions = document.createElement('div');
        actions.className = 'pn-actions';
        actions.append(
            createAction(content.hero.primaryAction, 'primary'),
            createAction(content.hero.secondaryAction, 'secondary')
        );

        copy.append(eyebrow, heading, subheading, actions);

        const panel = document.createElement('aside');
        panel.className = 'pn-system-panel';

        const panelTitle = document.createElement('h2');
        panelTitle.className = 'pn-system-title';
        panelTitle.innerHTML = `<span data-i18n="landing.hero.systemPanel.title">${text(content.hero.systemPanel.title, 'Engine Base')}</span>`;

        const panelList = document.createElement('ul');
        panelList.className = 'pn-system-list';

        for (const [index, item] of (content.hero.systemPanel.items || []).entries()) {
            const row = document.createElement('li');
            row.className = 'pn-system-item';

            const label = document.createElement('span');
            label.innerHTML = `<span data-i18n="landing.hero.systemPanel.item.${index}.label">${item}</span>`;

            const marker = document.createElement('span');
            marker.className = 'pn-system-marker';
            marker.innerHTML = `<span data-i18n="landing.hero.systemPanel.item.${index}.status">active</span>`;

            row.append(label, marker);
            panelList.appendChild(row);
        }

        panel.append(panelTitle, panelList);
        hero.append(copy, panel);

        const strip = document.createElement('section');
        strip.className = 'pn-section';
        const stripGrid = document.createElement('div');
        stripGrid.className = 'pn-card-grid';
        const capabilityKeys = [
            ['landing.capabilityCards.practiceInterface.title', 'landing.capabilityCards.practiceInterface.body', 'landing.capabilityCards.practiceInterface.label'],
            ['landing.capabilityCards.capabilitySet.title', 'landing.capabilityCards.capabilitySet.body', 'landing.capabilityCards.capabilitySet.label'],
            ['landing.capabilityCards.organizationShape.title', 'landing.capabilityCards.organizationShape.body', 'landing.capabilityCards.organizationShape.label'],
            ['landing.capabilityCards.deploymentShape.title', 'landing.capabilityCards.deploymentShape.body', 'landing.capabilityCards.deploymentShape.label']
        ];

        for (const [index, card] of (content.capabilityStrip || []).entries()) {
            const [titleKey, bodyKey, labelKey] = capabilityKeys[index] || [];
            stripGrid.appendChild(createCard({ ...card, titleKey, bodyKey, labelKey }, index));
        }
        strip.appendChild(stripGrid);

        const organization = document.createElement('section');
        organization.className = 'pn-section';
        organization.appendChild(createSectionHeader(
            content.organizationFit.heading,
            content.organizationFit.body,
            'landing.organization.heading',
            'landing.organization.body'
        ));
        const organizationGrid = document.createElement('div');
        organizationGrid.className = 'pn-card-grid';
        for (const [index, label] of (content.organizationFit.cards || []).entries()) {
            const card = document.createElement('article');
            card.className = 'pn-organization-card';

            const title = document.createElement('strong');
            title.innerHTML = `<span data-i18n="landing.organization.card.${index}">${label}</span>`;

            const examples = document.createElement('p');
            examples.className = 'pn-organization-examples';
            examples.innerHTML = `<span data-i18n="landing.organization.card.${index}.points"></span>`;

            card.append(title, examples);
            organizationGrid.appendChild(card);
        }
        organization.appendChild(organizationGrid);

        const infrastructure = document.createElement('section');
        infrastructure.className = 'pn-section';
        infrastructure.appendChild(createSectionHeader(
            content.modularInfrastructure.heading,
            content.modularInfrastructure.body,
            'landing.value.heading.line1',
            'landing.value.body'
        ));
        const layerGrid = document.createElement('div');
        layerGrid.className = 'pn-card-grid';
        const practiceTypeKeys = [
            ['landing.practiceTypes.regular.title', 'landing.practiceTypes.regular.body'],
            ['landing.practiceTypes.partial.title', 'landing.practiceTypes.partial.body'],
            ['landing.practiceTypes.regulated.title', 'landing.practiceTypes.regulated.body']
        ];

        for (const [index, sourceColumn] of (content.modularInfrastructure.columns || []).entries()) {
            const [titleKey, bodyKey] = practiceTypeKeys[index] || [];
            const column = { ...sourceColumn, titleKey, bodyKey };
            const card = document.createElement('article');
            card.className = 'pn-public-card pn-layer-card';

            const title = document.createElement('h3');
            title.innerHTML = `<span data-i18n="${column.titleKey || `landing.practiceTypes.${index}.title`}">${text(column.title, 'Layer')}</span>`;

            const body = document.createElement('p');
            body.innerHTML = `<span data-i18n="${column.bodyKey || `landing.practiceTypes.${index}.body`}">${text(column.body, '')}</span>`;

            card.append(title, body);
            layerGrid.appendChild(card);
        }
        infrastructure.appendChild(layerGrid);

        const next = document.createElement('section');
        next.className = 'pn-next-step';

        const nextCopy = document.createElement('div');
        const nextTitle = document.createElement('h2');
        nextTitle.innerHTML = `<span data-i18n="landing.next.heading">${text(content.nextStep.heading, 'Ready for review')}</span>`;
        const nextBody = document.createElement('p');
        nextBody.innerHTML = `<span data-i18n="landing.next.body">${text(content.nextStep.body, '')}</span>`;
        nextCopy.append(nextTitle, nextBody);

        next.append(nextCopy, createAction({ ...content.nextStep.action, i18nKey: 'landing.next.action' }, 'primary'));

        page.append(hero, next);
        container.appendChild(page);
    }
};
