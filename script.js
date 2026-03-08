/* ============================================
   WOMEN'S DAY TRIBUTE - Interactive Page Handler
   ============================================ */

(() => {
  // Configuration constants
  const PAGES_SELECTOR = '.page';
  const ACTIVE_CLASS = 'active';
  const NO_BUTTON_SELECTOR = '[id^="no-btn"]';
  const HEARTS_SELECTOR = '.heart-bg .heart';

  /* ============================================
     PAGE NAVIGATION
     ============================================ */
  function showPage(num) {
    document.querySelectorAll(PAGES_SELECTOR).forEach((p) => p.classList.remove(ACTIVE_CLASS));
    const el = document.getElementById(`page${num}`);
    if (el) el.classList.add(ACTIVE_CLASS);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  }
  
  // Expose for inline HTML onclick handlers
  window.showPage = showPage;

  /* ============================================
     NO BUTTON INTERACTION
     ============================================ */
  function setupNoButtons() {
    document.querySelectorAll(NO_BUTTON_SELECTOR).forEach((btn) => {
      // Move button on hover
      btn.addEventListener('mouseover', () => {
        btn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
      });

      // Show message on click
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Muhahahaha, you can never say No to me, Birdie! 😏 Try your default response instead~");
      });
    });
  }

  /* ============================================
     FLOATING HEARTS ANIMATION
     ============================================ */
  function setupAndAnimateHearts() {
    const hearts = document.querySelectorAll(HEARTS_SELECTOR);
    hearts.forEach((heart) => {
      let y = 110; // start slightly below viewport
      const speed = 0.5 + Math.random() * 1;
      let rotation = 0;
      let opacity = 1;

      // Set random horizontal position
      heart.style.left = `${Math.random() * 100}%`;

      const update = () => {
        y -= speed;
        rotation += 2;

        // Reset when heart reaches top
        if (y < -20) {
          y = 110 + Math.random() * 20;
          heart.style.left = `${Math.random() * 100}%`;
          opacity = 1;
        } else if (y < 20) {
          // Fade out as it reaches top
          opacity = Math.max(0, y / 20);
        }

        heart.style.transform = `translateY(${y}vh) rotate(${rotation}deg)`;
        heart.style.opacity = `${opacity}`;
        requestAnimationFrame(update);
      };

      update();
    });
  }

  /* ============================================
     INITIALIZATION
     ============================================ */
  document.addEventListener('DOMContentLoaded', () => {
    setupNoButtons();
    showPage(1);
    setupAndAnimateHearts();
  });
})();