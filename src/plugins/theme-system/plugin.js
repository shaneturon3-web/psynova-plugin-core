import theme from './content.js';
import './styles.css';

function applyThemeTokens(tokens) {
    const root = document.documentElement;

    root.style.setProperty('--psynova-brand-color', tokens.brandColor || '#1f4f8f');
    root.style.setProperty('--psynova-background-color', tokens.backgroundColor || '#f8f9fa');
    root.style.setProperty('--psynova-text-color', tokens.textColor || '#212529');
    root.style.setProperty('--psynova-accent-color', tokens.accentColor || '#6c757d');
    root.style.setProperty('--psynova-font-family', tokens.fontFamily || 'system-ui, sans-serif');
    root.style.setProperty('--psynova-max-width', tokens.maxWidth || '960px');

    const spacing = tokens.spacingScale || {};
    root.style.setProperty('--psynova-spacing-xs', spacing.xs || '0.5rem');
    root.style.setProperty('--psynova-spacing-sm', spacing.sm || '0.75rem');
    root.style.setProperty('--psynova-spacing-md', spacing.md || '1rem');
    root.style.setProperty('--psynova-spacing-lg', spacing.lg || '1.5rem');
    root.style.setProperty('--psynova-spacing-xl', spacing.xl || '2rem');
}

export default {
    id: 'theme-system',
    label: 'Theme System',
    enabled: true,
    version: '0.1.0',
    description: 'Reusable public visual tokens',
    routes: ['#/'],
    render(container) {
        applyThemeTokens(theme);
        container.innerHTML = '<p class="theme-system-status">Theme tokens applied.</p>';
    }
};
