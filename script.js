// ---------- Theme Switcher ----------
const themeSelect = document.getElementById('themeSelect');
document.body.setAttribute('data-theme', localStorage.getItem('stm_theme') || 'default');
themeSelect.value = localStorage.getItem('stm_theme') || 'default';
themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('stm_theme', theme);
});

// ---------- Notes ----------
let notes = JSON.parse(localStorage.getItem('stm_notes')||'[]');
...
// (all JS code for Notes, Tasks, Flashcards, Pomodoro)
// copy exactly as in your original script
