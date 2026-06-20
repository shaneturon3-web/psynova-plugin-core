import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function createSection(section) {
    const item = document.createElement('article');
    item.className = 'content-page__section';
    item.dataset.section = text(section.id);

    const heading = document.createElement('h3');
    heading.textContent = text(section.heading, 'Section');

    const body = document.createElement('p');
    body.textContent = text(section.body);

    item.append(heading, body);
    return item;
}

const contentPagePlugin = {
    id: 'content-page',
    label: 'Content Page',
    enabled: true,
    version: '0.1.0',
    description: 'Reusable content page model',
    routes: ['#/page/:slug'],

    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'content-page';
        wrapper.dataset.slug = text(content.slug, 'overview');

        const title = document.createElement('h2');
        title.textContent = text(content.title, 'Content Page');

        const summary = document.createElement('p');
        summary.className = 'content-page__summary';
        summary.textContent = text(content.summary);

        const sections = document.createElement('div');
        sections.className = 'content-page__sections';

        const enabledSections = Array.isArray(content.sections)
            ? content.sections.filter((section) => section.enabled !== false)
            : [];

        if (enabledSections.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'No content sections available.';
            sections.appendChild(empty);
        } else {
            enabledSections.forEach((section) => sections.appendChild(createSection(section)));
        }

        wrapper.append(title, summary, sections);
        container.appendChild(wrapper);
    }
};

export default contentPagePlugin;
