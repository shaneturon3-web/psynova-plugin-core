export function applyLanguageSlots(root = document, seedbank = {}, lang = 'en') {
  const dictionary = seedbank[lang] || {};
  const nodes = root.querySelectorAll('[data-i18n]');

  for (const node of nodes) {
    const key = node.dataset.i18n;
    const value = dictionary[key];

    if (typeof value === 'string') {
      node.textContent = value;
    }
  }
}
