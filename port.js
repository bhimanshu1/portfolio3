document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    updateToggleIcon();

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      updateToggleIcon();
    });

    function updateToggleIcon() {
      const isDark = document.body.classList.contains('dark-mode');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
    }
  });

  document.addEventListener('mousemove', function(e) {
    if (!document.body.classList.contains('dark-mode')) {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    }
  });