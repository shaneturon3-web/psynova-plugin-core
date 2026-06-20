import site from '../../content/site.js';

export default {
    id: 'contact-strip',
    label: 'Contact Strip',
    enabled: true,
    description: 'Basic contact strip',
    version: '1.0.0',

    render(container) {
        container.replaceChildren();

        const line = document.createElement('p');
        line.className = 'contact-strip';
        line.textContent = site.contactLine || 'Contact PsyNova';

        container.appendChild(line);
    }
};
