const buttons = document.querySelectorAll('.favorite-button');
const icons = document.querySelectorAll('.favorite-icon');

buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    icons[index].classList.toggle('active');
  });
});
