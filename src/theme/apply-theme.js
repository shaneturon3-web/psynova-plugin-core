import { defaultThemeId, themeRegistry } from "./theme-registry.js";

export function applyTheme(themeId = defaultThemeId) {
    const theme = themeRegistry[themeId] || themeRegistry[defaultThemeId];
    const root = document.documentElement;

    root.dataset.theme = theme.id;

    for (const [token, value] of Object.entries(theme.tokens)) {
        root.style.setProperty(token, value);
    }

    return theme;
}
