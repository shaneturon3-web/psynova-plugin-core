import content from './content.js';
import './styles.css';

function createTextElement(tagName, className, value, fallback = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = typeof value === 'string' && value.trim() ? value : fallback;
    return element;
}

function createProfileCard(profile) {
    const card = document.createElement('article');
    card.className = 'organization-profile__card';
    card.dataset.profile = profile.id || '';

    const label = createTextElement(
        'h3',
        'organization-profile__card-title',
        profile.label,
        'Profile'
    );

    const description = createTextElement(
        'p',
        'organization-profile__card-description',
        profile.description,
        ''
    );

    card.append(label, description);
    return card;
}

const organizationProfilePlugin = {
    id: 'organization-profile',
    label: 'Organization Profile',
    enabled: true,
    version: '0.1.0',
    description: 'Organization profile options rendered from local plugin content.',
    routes: ['/', '/organization'],

    render(container, context = {}) {
        const route = context.route || '/';

        if (!this.routes.includes(route)) {
            container.replaceChildren();
            return;
        }

        const root = document.createElement('article');
        root.className = 'organization-profile';

        const header = document.createElement('header');
        header.className = 'organization-profile__header';

        header.append(
            createTextElement('h2', 'organization-profile__title', content.title, 'Profiles'),
            createTextElement('p', 'organization-profile__intro', content.intro, '')
        );

        const list = document.createElement('div');
        list.className = 'organization-profile__list';

        const profiles = Array.isArray(content.profiles)
            ? content.profiles.filter((profile) => profile.enabled !== false)
            : [];

        if (profiles.length === 0) {
            list.appendChild(
                createTextElement('p', 'organization-profile__empty', content.emptyMessage, '')
            );
        } else {
            profiles.forEach((profile) => {
                list.appendChild(createProfileCard(profile));
            });
        }

        root.append(header, list);
        container.replaceChildren(root);
    }
};

export default organizationProfilePlugin;
