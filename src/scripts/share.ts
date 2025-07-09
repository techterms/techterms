document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-type="share-on-x-button"]');
  if (!buttons || buttons.length === 0) {
    return;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const definitionId = button.getAttribute('data-definition-id')?.trim();
      const definitionTerm = button.getAttribute('data-definition-term')?.trim();
      const definitionExplanation = button.getAttribute('data-definition-explanation')?.trim();

      if (!definitionId || !definitionTerm || !definitionExplanation) {
        return;
      }

      const text = `${definitionTerm} = ${definitionExplanation}\n\n`;
      const url = `https://techterms.io/t/${definitionId}`;

      const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(intentUrl, '_blank');
    });
  });
});
