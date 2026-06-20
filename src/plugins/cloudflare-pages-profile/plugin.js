import content from './content.js';
import './styles.css';

function row(label, value) {
    const item = document.createElement('div');
    item.className = 'cloudflare-pages-profile__row';

    const key = document.createElement('dt');
    key.textContent = label;

    const data = document.createElement('dd');
    data.textContent = value || 'Not set';

    item.append(key, data);
    return item;
}

export default {
    id: 'cloudflare-pages-profile',
    label: 'Cloudflare Pages Profile',
    enabled: true,
    version: '0.1.0',
    description: 'Cloudflare Pages deployment profile as static project data',
    routes: ['#/deploy'],
    render(container) {
        container.replaceChildren();

        const wrapper = document.createElement('div');
        wrapper.className = 'cloudflare-pages-profile';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Cloudflare Pages Profile';

        const description = document.createElement('p');
        description.className = 'cloudflare-pages-profile__description';
        description.textContent = content.description || '';

        const list = document.createElement('dl');
        list.className = 'cloudflare-pages-profile__list';

        list.append(
            row('Project', content.projectName),
            row('Custom domain', content.customDomain),
            row('Build command', content.buildCommand),
            row('Output directory', content.outputDirectory),
            row('Node version', content.nodeVersion),
            row('Deployment mode', content.deploymentMode),
            row('Status', content.status)
        );

        wrapper.append(title, description, list);
        container.appendChild(wrapper);
    }
};
