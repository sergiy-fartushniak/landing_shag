'use strict';

const selector = document.querySelector('.header__selector');
const townList = document.querySelector('.header__selector-list');
const mobileNav = document.querySelector('.nav__mobile-list');
const mobToggler = document.querySelector('.nav__mobile-toggler');

selector.addEventListener('click', () => {
  townList.classList.toggle('header__selector-list--active');
});

mobToggler.addEventListener('click', () => {
  mobileNav.classList.toggle('nav__mobile-list--active');
  mobToggler.classList.toggle('nav__mobile-toggler--active');
});
