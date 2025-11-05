import { showToast } from './toast';

function initCreateImage() {
  const buttons = document.querySelectorAll('[data-type="create-image-button"]');
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

        console.log('create image', definitionId, definitionTerm, definitionExplanation);
      } catch (err) {
        showToast('Failed to copy to clipboard');
        console.error(err);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCreateImage();
});
