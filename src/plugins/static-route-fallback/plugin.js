import fallback from './content.js';
import './styles.css';

export default {
    id: 'static-route-fallback',
    label: 'Static Route Fallback',
    enabled: true,
    version: '0.1.0',
    description: 'Static hosting route fallback instructions',
    routes: ['#/routes'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'static-route-fallback';

        const title = document.createElement('h2');
        title.textContent = 'Static Route Fallback';

        const summary = document.createElement('p');
        summary.className = 'static-route-fallback__summary';
        summary.textContent = 'Static hosting route behavior for this core.';

        const facts = document.createElement('dl');
        facts.className = 'static-route-fallback__facts';

        const modeTerm = document.createElement('dt');
        modeTerm.textContent = 'Routing mode';

        const modeValue = document.createElement('dd');
        modeValue.textContent = fallback.routingMode || 'hash';

        const fileTerm = document.createElement('dt');
        fileTerm.textContent = 'Fallback file';

        const fileValue = document.createElement('dd');
        fileValue.textContent = fallback.fallbackFile || 'index.html';

        facts.append(modeTerm, modeValue, fileTerm, fileValue);

        const notes = document.createElement('ul');
        notes.className = 'static-route-fallback__notes';

        const noteItems = Array.isArray(fallback.notes) ? fallback.notes : [];

        if (noteItems.length === 0) {
            const item = document.createElement('li');
            item.textContent = 'No routing notes configured.';
            notes.appendChild(item);
        } else {
            noteItems.forEach((note) => {
                const item = document.createElement('li');
                item.textContent = note;
                notes.appendChild(item);
            });
        }

        wrapper.append(title, summary, facts, notes);
        container.appendChild(wrapper);
    }
};
