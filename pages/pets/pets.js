// Mobile menu

const burgerBtn = document.getElementsByClassName('burger-btn');
const mobileNav = document.getElementById('mobile-navbar');
const desktopheader1 = document.getElementById('desktop-header1');
const desktopheader2 = document.getElementById('desktop-header2');
const openBurger = document.getElementsByClassName('open-burger')[0];

const body = document.getElementsByTagName('body')[0];

Array.from(burgerBtn).forEach((btn) => {
  btn.addEventListener('click', () => {
    if (mobileNav.style.display === 'none') {
      mobileNav.style.display = 'block';
      desktopheader1.style.display = 'none';
      openBurger.style.display = 'none';

      body.style.position = 'fixed';
    } else {
      mobileNav.style.display = 'none';
      desktopheader1.style.display = 'block';
      openBurger.style.display = 'block';

      body.style.position = 'inherit';
    }
  });
});

window.addEventListener('resize', () => {
  if (screen.width > 767) {
    mobileNav.style.display = 'none';
    desktopheader1.style.display = 'block';
    openBurger.style.display = 'block';
    par.style.margin = '0';
    body.style.position = 'inherit';
  }
});
