/* в этот файл добавляет скрипты*/
let navMenu = document.querySelector('.nav-menu');
let navUser = document.querySelector('.nav-user');
let menuToggle = document.querySelector('.nav-menu__toggle');

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
