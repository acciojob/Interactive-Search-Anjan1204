// Select elements
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// On button click
btn.addEventListener('click', () => {
  search.classList.add('active');
  input.focus();
});
