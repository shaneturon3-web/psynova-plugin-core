import content from './content.js';
import './styles.css';

function createItem(item) {
    const card = document.createElement('article');
    card.className = 'release-package-checklist__item';

    const title = document.createElement('h3');
    title.textContent = item.label || 'Checklist item';

    const status = document.createElement('p');
    status.className = 'release-package-checklist__status';
    status.textContent = item.status || 'not-set';

    const notes = document.createElement('p');
    notes.className = 'release-package-checklist__notes';
    notes.textContent = item.notes || '';

    card.append(title, status, notes);
    return card;
}

export default {
    id: 'release-package-checklist',
    label: 'Release Package Checklist',
    enabled: true,
    version: '0.1.0',
    description: 'Compact release checklist before upload or deploy',
    routes: ['#/release'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'release-package-checklist';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Release Package Checklist';

        const description = document.createElement('p');
        description.className = 'release-package-checklist__description';
        description.textContent = content.description || '';

        const list = document.createElement('div');
        list.className = 'release-package-checklist__list';

        const items = Array.isArray(content.items) ? content.items : [];
        if (items.length) {
            items.forEach((item) => list.appendChild(createItem(item)));
        } else {
            const empty = document.createElement('p');
            empty.className = 'release-package-checklist__empty';
            empty.textContent = 'No release checklist items configured.';
            list.appendChild(empty);
        }

        wrapper.append(title, description, list);
        container.appendChild(wrapper);
    }
};
