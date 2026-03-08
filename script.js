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

window.onload = () => {
  setupNoButton();
  showPage(1);
};