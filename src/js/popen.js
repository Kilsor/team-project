const toggleButtons = document.querySelectorAll('.toggle-btn');
const toggleParagraphs = document.querySelectorAll('.toggle-paragraph');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleParagraphs[index].classList.toggle('expanded');
    button.classList.toggle('active');
    button.classList.toggle('collapsed');
  });
});
