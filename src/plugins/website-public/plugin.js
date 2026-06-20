import content from './content.js';
import './styles.css';

function appendTextElement(parent, tagName, className, value, fallback = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = typeof value === 'string' && value.trim() ? value : fallback;
    parent.appendChild(element);
    return element;
}

function createContentSection(section, fallbackTitle) {
    const wrapper = document.createElement('section');
    wrapper.className = 'website-public__section';

    appendTextElement(
        wrapper,
        'h2',
        'website-public__section-title',
        section?.title,
        fallbackTitle
    );

    appendTextElement(
        wrapper,
        'p',
        'website-public__section-body',
        section?.body,
        ''
    );

    return wrapper;
}

const websitePublicPlugin = {
    id: 'website-public',
    label: 'Website Public',
    enabled: true,
    version: '0.1.0',
    description: 'Public website capability rendered from local plugin content.',
    routes: ['/', '/website'],

    render(container, context = {}) {
        const route = context.route || '/';

        if (!this.routes.includes(route)) {
            container.replaceChildren();
            return;
        }

        const root = document.createElement('article');
        root.className = 'website-public';

        const hero = document.createElement('section');
        hero.className = 'website-public__hero';

        appendTextElement(
            hero,
            'h1',
            'website-public__name',
            content?.hero?.name,
            'Website'
        );

        appendTextElement(
            hero,
            'p',
            'website-public__line',
            content?.hero?.line,
            ''
        );

        appendTextElement(
            hero,
            'p',
            'website-public__statement',
            content?.hero?.statement,
            ''
        );

        root.append(
            hero,
            createContentSection(content?.capabilityStatement, 'Capability'),
            createContentSection(content?.organizationStatement, 'Organization'),
            createContentSection(content?.nextStep, 'Next Step')
        );

        container.replaceChildren(root);
    }
};

export default websitePublicPlugin;
