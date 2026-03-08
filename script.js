// navigation between page sections
function showPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(`page${num}`);
  if (el) el.classList.add('active');
}

// make every "no" button run away and alert
function setupNoButton() {
  document.querySelectorAll('[id^=no-btn]').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px)`;
    });
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Muhahahaha, you can never say No to me, Birdie! 😏 Try your default response instead~");
    });
  });
}

// animate hearts dynamically
function animateHearts() {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart, i) => {
    let y = 100; // start from bottom
    let speed = 0.5 + Math.random() * 1; // random speed
    let rotation = 0;
    let opacity = 1;

    function update() {
      y -= speed;
      rotation += 2;
      if (y < -100) {
        y = 100 + Math.random() * 50; // reset to bottom with random offset
        heart.style.left = Math.random() * 100 + '%';
        opacity = 1;
      } else if (y < 50) {
        opacity = y / 50; // fade out near top
      }
      heart.style.transform = `translateY(${y}vh) rotate(${rotation}deg)`;
      heart.style.opacity = opacity;
      requestAnimationFrame(update);
    }
    update();
  });
}

window.onload = () => {
  setupNoButton();
  showPage(1);
  // position hearts randomly and start animation
  document.querySelectorAll('.heart').forEach((heart, i) => {
    heart.style.left = Math.random() * 100 + '%';
  });
  animateHearts();
};