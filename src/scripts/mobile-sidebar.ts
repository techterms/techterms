// Mobile Sidebar Toggle Functionality

document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileSidebarOverlay = document.getElementById('mobile-sidebar-overlay');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const mobileBackdrop = document.getElementById('mobile-sidebar-backdrop');

  // Function to open the mobile sidebar
  const openMobileSidebar = () => {
    if (mobileSidebarOverlay && mobileSidebar) {
      // Show the overlay
      mobileSidebarOverlay.classList.remove('hidden');

      // Small delay to ensure the overlay is rendered before animation
      setTimeout(() => {
        mobileSidebar.classList.remove('-translate-x-full');
      }, 10);

      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    }
  };

  // Function to close the mobile sidebar
  const closeMobileSidebar = () => {
    if (mobileSidebarOverlay && mobileSidebar) {
      // Hide the sidebar with animation
      mobileSidebar.classList.add('-translate-x-full');

      // Hide the overlay after animation completes
      setTimeout(() => {
        mobileSidebarOverlay.classList.add('hidden');
        // Restore body scroll
        document.body.style.overflow = '';
      }, 300); // Match the transition duration
    }
  };

  // Event listeners
  mobileMenuBtn?.addEventListener('click', openMobileSidebar);
  closeSidebarBtn?.addEventListener('click', closeMobileSidebar);

  // Close sidebar when clicking on backdrop
  mobileBackdrop?.addEventListener('click', closeMobileSidebar);

  // Close sidebar when clicking outside the sidebar area
  mobileSidebarOverlay?.addEventListener('click', e => {
    if (e.target === mobileSidebarOverlay) {
      closeMobileSidebar();
    }
  });

  // Close sidebar on escape key
  document.addEventListener('keydown', e => {
    if (
      e.key === 'Escape' &&
      mobileSidebarOverlay &&
      !mobileSidebarOverlay.classList.contains('hidden')
    ) {
      closeMobileSidebar();
    }
  });

  // Handle window resize - close sidebar if window becomes large
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      // lg breakpoint
      closeMobileSidebar();
    }
  });
});
