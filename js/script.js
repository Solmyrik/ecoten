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

//ibg
function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();
