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

//changeText

const changeText = () => {
  const texts = document.querySelectorAll('.certificates__text');
  texts[0].textContent = `В переводе с английского аббревиатура ISO это – «Международная организация стандартизации» (International Organization for Standartization).
  Эта ор...`;
  texts[1].textContent = `Всемирная Организация Здравоохранения (ВОЗ), в состав которой входят свыше 180 государств, включая Россию, была создана в 1948 году под эгидой ООН. Она...`;
  texts[2].textContent = `Всемирная Организация Здравоохранения (ВОЗ), в состав которой входят свыше 180 государств, включая Россию, была создана в 1948 году под эгидой ООН. Она...`;
  texts[3].textContent = `Всемирная Организация Здравоохранения (ВОЗ), в состав которой входят свыше 180 государств, включая Россию, была создана в 1948 году под эгидой ООН. Она...`;
};

//resize
// window.addEventListener('resize', (e) => {
//   const screenWidth = window.innerWidth;
//   if (screenWidth < 767) {
//     changeText();
//   }
// });

// const screenWidth = window.innerWidth;
// if (screenWidth < 767) {
//   changeText();
// }

//select
const values = [
  {
    value: 'En',
    label: '<img src="img/countries/ru1.svg"/> En',
    id: 2,
  },
  {
    value: 'Ru',
    label: '<img src="img/countries/ru.svg"/> Ru',
    id: 1,
    selected: true,
  },
];
const defaultSelect = () => {
  const element = document.querySelectorAll('.select-d');
  element.forEach((e, i) => {
    const choices = new Choices(e, {
      choices: values,
      // searchEnabled: true,
      // searchPlaceholderValue: 'Поиск',
      placeholder: true,
      searchEnabled: false,
      searchPlaceholderValue: '',
      searchChoices: false,
      // removeItemButton: true,
    });
  });
};

defaultSelect();
