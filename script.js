document.addEventListener('DOMContentLoaded', () => {
  // Animate header links on load
  const links = document.querySelectorAll('header ul li a');
  links.forEach((link, i) => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.transition = 'opacity 0.5s ease';
      link.style.opacity = 1;
    }, i * 200);
  });

  // Animate logo
  const logo = document.querySelector('main img');
  if (logo) {
    logo.style.opacity = 0;
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      logo.style.transition = 'all 0.6s ease-out';
      logo.style.opacity = 1;
      logo.style.transform = 'translateY(0)';
    }, 500);
  }

  // Interactive search
  const input = document.querySelector('main input[type="text"]');
  if (input) {
    input.addEventListener('input', () => {
      input.style.boxShadow = '0 0 15px rgba(255, 90, 90, 0.8)';
      clearTimeout(input.timer);
      input.timer = setTimeout(() => {
        input.style.boxShadow = 'none';
      }, 1000);
    });
  }

  // 🌙 Unique Round Dark Mode Toggle with smooth animation
  const toggleButton = document.querySelector('.dark-toggle');

  if (toggleButton) {
    // Label above the button
    const label = document.createElement('div');
    label.textContent = 'DARK MODE';
    label.style.fontSize = '12px';
    label.style.color = '#666';
    label.style.marginBottom = '6px';
    label.style.textAlign = 'center';
    label.style.fontWeight = '500';
    label.classList.add('dark-mode-label');
    toggleButton.parentNode.insertBefore(label, toggleButton);

    // Apply button styling
    toggleButton.style.width = '50px';
    toggleButton.style.height = '50px';
    toggleButton.style.borderRadius = '50%';
    toggleButton.style.border = 'none';
    toggleButton.style.fontSize = '24px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.transition = 'all 0.4s ease';
    toggleButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    toggleButton.style.backgroundColor = '#f0f0f0';

    const updateToggleEmoji = (isDark) => {
      toggleButton.innerHTML = isDark ? '🌙' : '☀️';
      toggleButton.style.backgroundColor = isDark ? '#1e1e1e' : '#f0f0f0';
      label.textContent = isDark ? 'LIGHT MODE' : 'DARK MODE';
      label.style.color = isDark ? '#ddd' : '#666';
    };

    const darkSaved = localStorage.getItem('darkMode') === 'enabled';
    updateToggleEmoji(darkSaved);
    if (darkSaved) document.body.classList.add('dark-mode');

    toggleButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

      // Animate emoji scale
      toggleButton.style.transform = 'scale(1.2)';
      setTimeout(() => {
        toggleButton.style.transform = 'scale(1)';
        updateToggleEmoji(isDark);
      }, 150);
    });
  }

  // Initial dark mode check
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});
