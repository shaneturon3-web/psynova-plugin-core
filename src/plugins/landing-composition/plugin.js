import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function createAction(action, variant) {
    const link = document.createElement('a');
    link.className = `pn-button pn-button-${variant}`;
    link.href = text(action?.href, '#/');
    link.textContent = text(action?.label, 'Continue');
    return link;
}

function createCard(card) {
    const article = document.createElement('article');
    article.className = 'pn-public-card';

    const title = document.createElement('h3');
    title.textContent = text(card.title, 'Capability');

    const description = document.createElement('p');
    description.textContent = text(card.description, 'Configured capability.');

    const status = document.createElement('span');
    status.className = 'pn-status-pill';
    status.textContent = text(card.status, 'ready');

    article.append(title, description, status);
    return article;
}

function createSectionHeader(heading, body) {
    const header = document.createElement('div');
    header.className = 'pn-section-header';

    const title = document.createElement('h2');
    title.textContent = text(heading, 'Section');

    const copy = document.createElement('p');
    copy.textContent = text(body, '');

    header.append(title, copy);
    return header;
}

export default {
    id: 'landing-composition',
    label: 'Landing Composition',
    enabled: true,
    version: '0.1.0',
    description: 'Composed public landing surface.',
    routes: ['#/', '#/capabilities', '#/organization', '#/contact'],

    render(container) {
        const page = document.createElement('div');
        page.className = 'pn-landing';

        const hero = document.createElement('section');
        hero.className = 'pn-hero';

        const copy = document.createElement('div');
        copy.className = 'pn-hero-copy';

        const eyebrow = document.createElement('p');
        eyebrow.className = 'pn-eyebrow';
        eyebrow.textContent = text(content.hero.eyebrow, 'PsyNova');

        const heading = document.createElement('h1');
        heading.textContent = text(content.hero.heading, 'Professional Practice Infrastructure');

        const subheading = document.createElement('p');
        subheading.className = 'pn-hero-subheading';
        subheading.textContent = text(content.hero.subheading, '');

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
        panelTitle.textContent = text(content.hero.systemPanel.title, 'Core System');

        const panelList = document.createElement('ul');
        panelList.className = 'pn-system-list';

        for (const item of content.hero.systemPanel.items || []) {
            const row = document.createElement('li');
            row.className = 'pn-system-item';

            const label = document.createElement('span');
            label.textContent = item;

            const marker = document.createElement('span');
            marker.className = 'pn-system-marker';
            marker.textContent = 'active';

            row.append(label, marker);
            panelList.appendChild(row);
        }

        panel.append(panelTitle, panelList);
        hero.append(copy, panel);

        const strip = document.createElement('section');
        strip.className = 'pn-section';
        const stripGrid = document.createElement('div');
        stripGrid.className = 'pn-card-grid';
        for (const card of content.capabilityStrip || []) {
            stripGrid.appendChild(createCard(card));
        }
        strip.appendChild(stripGrid);

        const organization = document.createElement('section');
        organization.className = 'pn-section';
        organization.appendChild(createSectionHeader(
            content.organizationFit.heading,
            content.organizationFit.body
        ));
        const organizationGrid = document.createElement('div');
        organizationGrid.className = 'pn-card-grid';
        for (const label of content.organizationFit.cards || []) {
            const card = document.createElement('article');
            card.className = 'pn-organization-card';
            card.textContent = label;
            organizationGrid.appendChild(card);
        }
        organization.appendChild(organizationGrid);

        const infrastructure = document.createElement('section');
        infrastructure.className = 'pn-section';
        infrastructure.appendChild(createSectionHeader(
            content.modularInfrastructure.heading,
            content.modularInfrastructure.body
        ));
        const layerGrid = document.createElement('div');
        layerGrid.className = 'pn-card-grid';
        for (const column of content.modularInfrastructure.columns || []) {
            const card = document.createElement('article');
            card.className = 'pn-public-card pn-layer-card';

            const title = document.createElement('h3');
            title.textContent = text(column.title, 'Layer');

            const body = document.createElement('p');
            body.textContent = text(column.body, '');

            card.append(title, body);
            layerGrid.appendChild(card);
        }
        infrastructure.appendChild(layerGrid);

        const next = document.createElement('section');
        next.className = 'pn-next-step';

        const nextCopy = document.createElement('div');
        const nextTitle = document.createElement('h2');
        nextTitle.textContent = text(content.nextStep.heading, 'Ready for review');
        const nextBody = document.createElement('p');
        nextBody.textContent = text(content.nextStep.body, '');
        nextCopy.append(nextTitle, nextBody);

        next.append(nextCopy, createAction(content.nextStep.action, 'primary'));

        page.append(hero, strip, organization, infrastructure, next);
        container.appendChild(page);
    }
};
