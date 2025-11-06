import { showToast } from './toast';
import html2canvas from 'html2canvas';
import Logo from '../assets/logo.svg';

function createHiddenContainer(term: string, explanation: string): HTMLElement {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';

  container.style.width = '800px';
  container.style.padding = '40px 40px 66px 40px';
  container.style.backgroundColor = '#ffffff';
  container.style.boxSizing = 'border-box';

  // Create title
  const title = document.createElement('h1');
  title.textContent = term;
  title.style.fontSize = '36px';
  title.style.fontWeight = 'bold';
  title.style.color = '#000000';
  title.style.marginBottom = '24px';
  title.style.lineHeight = '1.2';

  // Create explanation
  const desc = document.createElement('p');
  desc.textContent = explanation;
  desc.style.fontSize = '20px';
  desc.style.color = '#4b5563';
  desc.style.lineHeight = '1.6';
  desc.style.marginBottom = '32px';

  // Create footer
  const footer = document.createElement('div');
  footer.style.fontSize = '14px';
  footer.style.color = '#9ca3af';
  footer.style.marginTop = '24px';
  footer.style.paddingTop = '24px';
  footer.style.borderTop = '1px solid #e5e7eb';
  footer.style.position = 'relative';

  const logoContainer = document.createElement('div');
  logoContainer.style.display = 'flex';
  logoContainer.style.alignItems = 'center';
  logoContainer.style.justifyContent = 'center';
  logoContainer.style.gap = '8px';
  logoContainer.style.width = '32px';
  logoContainer.style.height = '32px';
  logoContainer.style.minWidth = '32px';
  logoContainer.style.minHeight = '32px';
  logoContainer.style.maxWidth = '32px';
  logoContainer.style.maxHeight = '32px';
  logoContainer.style.backgroundImage = `url(${Logo.src})`;
  logoContainer.style.backgroundSize = 'contain';
  logoContainer.style.backgroundRepeat = 'no-repeat';

  // Create footer text
  const footerText = document.createElement('div');
  footerText.textContent =
    'techterms.io - beginner-friendly tech glossary built by the community, for the community';

  footerText.style.marginTop = '-34px';
  footerText.style.marginLeft = '40px';

  footer.appendChild(logoContainer);
  footer.appendChild(footerText);

  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(footer);

  return container;
}

function downloadImage(canvas: HTMLCanvasElement, filename: string) {
  canvas.toBlob(blob => {
    if (!blob) {
      showToast('Failed to create image');
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 'image/png');
}

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
          showToast('Missing definition data');
          return;
        }

        // Show loading toast
        showToast('Downloading image');

        // Create hidden container
        const hiddenContainer = createHiddenContainer(definitionTerm, definitionExplanation);
        document.body.appendChild(hiddenContainer);

        // Convert to canvas
        const canvas = await html2canvas(hiddenContainer, {
          backgroundColor: '#ffffff',
          scale: 1,
          logging: false,
          useCORS: true,
        });

        // Clean up
        document.body.removeChild(hiddenContainer);

        // Download the image
        const filename = `${definitionTerm.toLowerCase().replace(/\s+/g, '-')}-techterms.png`;
        downloadImage(canvas, filename);
      } catch (err) {
        showToast('Failed to create image');
        console.error(err);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCreateImage();
});
