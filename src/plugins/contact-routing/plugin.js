import content from './content.js';
import './styles.css';

function text(value, fallback = '') {
    return typeof value === 'string' && value.trim() ? value : fallback;
}

function createOption(option) {
    const item = document.createElement('article');
    item.className = 'contact-routing__option';
    item.dataset.option = text(option.id);

    const label = document.createElement('h3');
    label.className = 'contact-routing__option-label';
    label.textContent = text(option.label, 'Routing option');

    const description = document.createElement('p');
    description.className = 'contact-routing__option-description';
    description.textContent = text(option.description);

    item.append(label, description);
    return item;
}

const contactRoutingPlugin = {
    id: 'contact-routing',
    label: 'Contact Routing',
    enabled: true,
    version: '0.1.0',
    description: 'Contact routing intent rendered from local plugin data.',
    routes: ['/', '/contact-routing'],

    render(container, context = {}) {
        const route = context.route || '/';

        if (!this.routes.includes(route)) {
            container.replaceChildren();
            return;
        }

        const root = document.createElement('article');
        root.className = 'contact-routing';

        const title = document.createElement('h2');
        title.className = 'contact-routing__title';
        title.textContent = text(content.title, 'Contact Routing');

        const statement = document.createElement('p');
        statement.className = 'contact-routing__statement';
        statement.textContent = text(content.statement);

        const meta = document.createElement('dl');
        meta.className = 'contact-routing__meta';

        const labels = content.labels || {};
        const emptyValue = text(labels.emptyValue, 'Not configured');

        const primaryTerm = document.createElement('dt');
        primaryTerm.textContent = text(labels.primaryContact, 'Primary Contact');

        const primaryValue = document.createElement('dd');
        primaryValue.textContent = text(content.primaryContact, emptyValue);

        const statusTerm = document.createElement('dt');
        statusTerm.textContent = text(labels.status, 'Status');

        const statusValue = document.createElement('dd');
        statusValue.textContent = text(content.status, emptyValue);

        meta.append(primaryTerm, primaryValue, statusTerm, statusValue);

        const options = document.createElement('div');
        options.className = 'contact-routing__options';

        const routingOptions = Array.isArray(content.routingOptions)
            ? content.routingOptions.filter((option) => option.enabled !== false)
            : [];

        if (routingOptions.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'contact-routing__empty';
            empty.textContent = text(labels.emptyOptions, 'No routing options configured.');
            options.appendChild(empty);
        } else {
            routingOptions.forEach((option) => {
                options.appendChild(createOption(option));
            });
        }

        root.append(title, statement, meta, options);
        container.replaceChildren(root);
    }
};

export default contactRoutingPlugin;
