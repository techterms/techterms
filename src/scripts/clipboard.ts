export const BASE_URL = 'https://techterms.io';

function showToast(message: string) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }
}

function initCopyToClipboard() {
  const buttons = document.querySelectorAll('[data-type="copy-to-clipboard-button"]');
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

      const url = `${BASE_URL}/t/${definitionId}`;
      const text = `${definitionTerm} = ${definitionExplanation}\n\n${url}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to Clipboard!');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCopyToClipboard();
});
