document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const menuDropdown = document.querySelector('.header-dropdown');

  menuOpen.addEventListener('click', () => {
    menuDropdown.classList.add('open');
  });

  menuClose.addEventListener('click', () => {
    menuDropdown.classList.remove('open');
  });

  document.addEventListener('click', event => {
    if (
      !menuDropdown.contains(event.target) &&
      !menuOpen.contains(event.target)
    ) {
      menuDropdown.classList.remove('open');
    }
  });
});
