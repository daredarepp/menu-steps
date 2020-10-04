window.addEventListener('load', () => {
  const menuBtn = document.querySelector('.js-menu-btn');
  const header = document.querySelector('.js-header');

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    header.classList.toggle('active');
  }
})