export function showToast(message: string) {
  const toastContainer = document.querySelector('[data-type="toast-notifications"]');
  if (!toastContainer) {
    return;
  }

  const toast = document.createElement('div');
  toast.textContent = message;
  toast.classList.add(
    'pointer-events-none',
    'rounded',
    'bg-blue-400',
    'px-4',
    'py-2',
    'text-white',
    'shadow-lg'
  );
  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast) {
      toast.remove();
    }
  }, 2000);
}
