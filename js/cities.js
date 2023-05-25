const triggers = document.querySelectorAll('.cities__trigger');
const onMap = document.querySelector('.cities__onmap');
const list = document.querySelector('.cities__list');

triggers.forEach((t, i) => {
  t.addEventListener('click', (e) => {
    triggers.forEach((element) => element.classList.remove('active'));
    triggers[i].classList.add('active');
    if (i === 0) {
      onMap.classList.remove('active');
      list.classList.add('active');
    }
    if (i === 1) {
      list.classList.remove('active');
      onMap.classList.add('active');
    }
  });
});
