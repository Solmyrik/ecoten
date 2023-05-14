// burger
const headerBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu__body');
const menuClose = document.querySelector('.menu__close');

const menuActive = () => {
  console.log('active');
  menu.classList.toggle('active');
};

headerBurger.addEventListener('click', menuActive);
menuClose.addEventListener('click', menuActive);
