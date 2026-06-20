import { content, tokens } from './content.js';
import './styles.css';

function applyTokens() {
    const root = document.documentElement;
    for (const group of Object.values(tokens)) {
        for (const [name, value] of Object.entries(group)) {
            root.style.setProperty(name, value);
        }
    }
}

function createTokenPreview() {
    const details = document.createElement('details');
    details.className = 'pn-details';

    const summary = document.createElement('summary');
    summary.textContent = content.detailsSummary || 'Preview';

    const pre = document.createElement('pre');
    pre.className = 'pn-pre';
    pre.textContent = JSON.stringify(tokens, null, 2);

    details.append(summary, pre);
    return details;
}

export default {
    id: 'visual-language',
    label: 'Visual Language',
    enabled: true,
    version: '0.1.0',
    description: 'Global visual tokens and public aesthetic primitives.',
    routes: ['/', '#/'],

    render(container) {
        applyTokens();

        const wrapper = document.createElement('div');
        wrapper.className = 'pn-style-guide';

        const title = document.createElement('h2');
        title.textContent = content.title || 'Visual Language';

        const summary = document.createElement('p');
        summary.textContent = content.summary || 'A public interface for professional infrastructure.';

        const toneLabel = document.createElement('p');
        toneLabel.textContent = content.toneLabel || 'Tone:';

        const toneList = document.createElement('ul');
        toneList.className = 'pn-tone-list';

        for (const tone of content.tones || []) {
            const item = document.createElement('li');
            item.textContent = tone;
            toneList.appendChild(item);
        }

        wrapper.append(title, summary, toneLabel, toneList, createTokenPreview());
        container.appendChild(wrapper);
    }
};
