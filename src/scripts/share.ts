const BASE_URL = 'https://techterms.io';

function getText(definitionTerm: string, definitionExplanation: string) {
  return encodeURIComponent(`${definitionTerm} = ${definitionExplanation}`);
}

function getUrl(definitionId: string) {
  return encodeURIComponent(`${BASE_URL}/t/${definitionId}`);
}

function getTextWithUrl(
  definitionTerm: string,
  definitionExplanation: string,
  definitionId: string
) {
  return encodeURIComponent(
    `${definitionTerm} = ${definitionExplanation} ${BASE_URL}/t/${definitionId}`
  );
}

function initTwitterShare() {
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

      const intentUrl = `https://twitter.com/intent/tweet?text=${getText(definitionTerm, definitionExplanation)}&url=${getUrl(definitionId)}`;
      window.open(intentUrl, '_blank');
    });
  });
}

function initBlueSkyShare() {
  const buttons = document.querySelectorAll('[data-type="share-on-bsky-button"]');
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

      const intentUrl = `https://bsky.app/intent/compose?text=${getTextWithUrl(definitionTerm, definitionExplanation, definitionId)}`;
      window.open(intentUrl, '_blank');
    });
  });
}

function getEmbedCode(definitionId: string) {
  return `<iframe src="${BASE_URL}/embed/t/${definitionId}" width="100%" height="180" frameborder="0" allowfullscreen></iframe>`;
}

function initEmbedShare() {
  const buttons = document.querySelectorAll('[data-type="share-embed-button"]');
  if (!buttons || buttons.length === 0) {
    return;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const definitionId = button.getAttribute('data-definition-id')?.trim();

      if (!definitionId) {
        return;
      }

      const embedCode = getEmbedCode(definitionId);
      navigator.clipboard.writeText(embedCode);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTwitterShare();
  initBlueSkyShare();
  initEmbedShare();
});
