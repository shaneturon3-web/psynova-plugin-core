import profile from './content.js';
import './styles.css';

function value(text, fallback = 'Not set') {
    return typeof text === 'string' && text.trim() ? text : fallback;
}

function createRow(label, data) {
    const row = document.createElement('div');
    row.className = 'deploy-profile__row';

    const term = document.createElement('dt');
    term.textContent = label;

    const description = document.createElement('dd');
    description.textContent = data;

    row.append(term, description);
    return row;
}

export default {
    id: 'deploy-profile',
    label: 'Deploy Profile',
    enabled: true,
    version: '0.1.0',
    description: 'Deployment target metadata from data',
    routes: ['#/deploy'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'deploy-profile';

        const title = document.createElement('h2');
        title.textContent = 'Deploy Profile';

        const summary = document.createElement('p');
        summary.className = 'deploy-profile__summary';
        summary.textContent = 'Static deployment target and output settings.';

        const list = document.createElement('dl');
        list.className = 'deploy-profile__list';

        list.append(
            createRow('Project', value(profile.projectName)),
            createRow('Target host', value(profile.targetHost)),
            createRow('Build command', value(profile.buildCommand)),
            createRow('Output directory', value(profile.outputDirectory)),
            createRow('Environment', value(profile.environment)),
            createRow('Status', value(profile.status))
        );

        wrapper.append(title, summary, list);
        container.appendChild(wrapper);
    }
};
