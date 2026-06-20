import content from './content.js';
import './styles.css';

function createItem(item) {
    const card = document.createElement('article');
    card.className = 'build-health-check__item';

    const label = document.createElement('h3');
    label.textContent = item.label || 'Checklist item';

    const status = document.createElement('p');
    status.className = 'build-health-check__status';
    status.textContent = item.status || 'not-set';

    const notes = document.createElement('p');
    notes.className = 'build-health-check__notes';
    notes.textContent = item.notes || '';

    card.append(label, status, notes);
    return card;
}

export default {
    id: 'build-health-check',
    label: 'Build Health Check',
    enabled: true,
    version: '0.1.0',
    description: 'Compact static build checklist',
    routes: ['#/build-health'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'build-health-check';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Build Health Check';

        const description = document.createElement('p');
        description.className = 'build-health-check__description';
        description.textContent = content.description || 'Compact static readiness checklist.';

        const list = document.createElement('div');
        list.className = 'build-health-check__list';

        const items = Array.isArray(content.items) ? content.items : [];

        if (items.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'No checklist items configured.';
            list.appendChild(empty);
        } else {
            items.forEach((item) => list.appendChild(createItem(item)));
        }

        wrapper.append(title, description, list);
        container.appendChild(wrapper);
    }
};
