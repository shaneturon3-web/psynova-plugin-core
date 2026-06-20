import content from './content.js';
import './styles.css';

function getRoute(context) {
    return context?.route || '/';
}

export default {
    id: 'public-surface-gate',
    label: 'Public Surface Gate',
    enabled: true,
    version: '0.1.0',
    description: 'Separates the public landing surface from system review modules.',
    routes: ['#/', '#/system-review'],

    render(container, context) {
        container.replaceChildren();

        const route = getRoute(context);

        if (route !== content.systemReviewRoute) {
            container.classList.add('pn-home-gate-note');
            return;
        }

        const wrapper = document.createElement('section');
        wrapper.className = 'pn-surface-gate';

        const intro = document.createElement('div');
        intro.className = 'pn-system-review-intro';

        const title = document.createElement('h2');
        title.textContent = content.title;

        const summary = document.createElement('p');
        summary.textContent = content.summary;

        intro.append(title, summary);
        wrapper.appendChild(intro);
        container.appendChild(wrapper);
    }
};
