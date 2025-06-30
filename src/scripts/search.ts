document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[type="search"]');

  if (!searchInput) {
    return;
  }

  // Function to filter definition cards
  const filterDefinitionCards = (query: string) => {
    const definitionCards = document.querySelectorAll('[data-type="definition-card"]');
    const searchTerm = query.toLowerCase().trim();

    definitionCards.forEach(card => {
      const termElement = card.querySelector('[data-type="definition-term"]');
      const explanationElement = card.querySelector('[data-type="definition-explanation"]');

      if (!termElement || !explanationElement) {
        return;
      }

      const term = termElement.textContent?.toLowerCase() || '';
      const explanation = explanationElement.textContent?.toLowerCase() || '';

      const matches = term.includes(searchTerm) || explanation.includes(searchTerm);

      if (matches) {
        (card as HTMLElement).classList.remove('hidden');
      } else {
        (card as HTMLElement).classList.add('hidden');
      }
    });
  };

  // Listen for input changes
  searchInput.addEventListener('input', event => {
    const query = (event.target as HTMLInputElement).value || '';
    filterDefinitionCards(query);
  });
});
