/* в этот файл добавляет скрипты*/
let navMenu = document.querySelector('.nav-menu');
let navUser = document.querySelector('.nav-user');
let rangeToggle = document.querySelector('.range-scale__toggle');
let menuToggle = document.querySelector('.nav-menu__toggle');
let rangeBar = document.querySelector('.range-scale__bar');

navMenu.classList.remove('nav-menu--nojs');
navUser.classList.remove('nav-user--nojs');

menuToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('nav-menu--closed')) {
    navMenu.classList.remove('nav-menu--closed');
    navMenu.classList.add('nav-menu--opened');
  } else {
    navMenu.classList.remove('nav-menu--opened');
    navMenu.classList.add('nav-menu--closed');
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

if (rangeToggle.disabled) {
  rangeBar.style = "background: #bdbdbd;"
}
