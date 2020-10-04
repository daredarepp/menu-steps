window.addEventListener('load', () => {
  const menuBtn = document.querySelector('.js-menu-btn');
  const header = document.querySelector('.js-header');
  const cheese = document.querySelector('.js-cheese');

  menuBtn.addEventListener('click', toggleMenu);
  cheese.addEventListener('click', spinCheese);
  cheese.addEventListener('click', spinCheese);

  function toggleMenu() {
    header.classList.toggle('active');
  }

  function spinCheese() {
    if (cheese.classList.contains('animatable')) {
      return
    } else {
      cheese.classList.add('animatable');
      cheese.addEventListener('animationend', () => cheese.classList.remove('animatable'));
    }
  }
})