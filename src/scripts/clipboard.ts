import { showToast } from './toast';

export const BASE_URL = 'https://techterms.io';

function initCopyToClipboard() {
  const buttons = document.querySelectorAll('[data-type="copy-to-clipboard-button"]');
  if (!buttons || buttons.length === 0) {
    return;
  }

  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      try {
        const definitionId = button.getAttribute('data-definition-id')?.trim();
        const definitionTerm = button.getAttribute('data-definition-term')?.trim();
        const definitionExplanation = button.getAttribute('data-definition-explanation')?.trim();

        if (!definitionId || !definitionTerm || !definitionExplanation) {
          return;
        }

        const url = `${BASE_URL}/t/${definitionId}`;
        const text = `${definitionTerm} = ${definitionExplanation}\n\n${url}`;
        await navigator.clipboard.writeText(text);
        showToast('Copied to Clipboard!');
      } catch (err) {
        showToast('Failed to copy to clipboard');
        console.error(err);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCopyToClipboard();
});
