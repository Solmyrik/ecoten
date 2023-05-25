const certificates = document.querySelector('.certificates');
const about = document.querySelector('.about');
const catalog = document.querySelector('.catalog');
const modals = document.querySelectorAll('.modals__item');
const certificatesButton = document.querySelectorAll('.certificates__button');
const modalsClose = document.querySelectorAll('.modals__close');
const modalsContainer = document.querySelector('.modals__container');
const sectionsNone = document.querySelectorAll('.modal-none');

const breadcrumbsArrow = document.querySelector('.breadcrumbs__arrow');
const breadcrumbsValue = document.querySelector('.breadcrumbs__value');

certificatesButton.forEach((e, i) => {
  e.addEventListener('click', (element) => {
    sectionsNone.forEach((e) => {
      e.style.display = 'none';
    });
    modals[i].style.display = 'block';
    breadcrumbsArrow.style.display = 'block';
    breadcrumbsValue.style.display = 'block';
    if (i === 0) breadcrumbsValue.textContent = 'СЕ';
    if (i === 1) breadcrumbsValue.textContent = 'ISO';
    if (i === 2) breadcrumbsValue.textContent = 'ВОЗ';
    if (i === 3) breadcrumbsValue.textContent = 'ГОСТ';
    modalsContainer.scrollIntoView();
  });
});

const closes = () => {
  sectionsNone.forEach((e) => {
    e.style.display = 'block';
  });
  breadcrumbsArrow.style.display = 'none';
  breadcrumbsValue.style.display = 'none';
  const screenWidth = window.innerWidth;
  setTimeout(() => {
    window.scrollTo({
      top: certificates.offsetTop,
    });

    console.log('ok');
  }, 10);
  modals.forEach((e) => {
    e.style.display = 'none';
  });
};

modalsClose.forEach((e, i) => {
  e.addEventListener('click', closes);
});
