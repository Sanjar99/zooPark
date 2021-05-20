var contact_us_btn = document.querySelector(".header__contact-btn");
var contact_us = document.querySelector(".contact-us");
var body = document.querySelector(".body");
var contact_us_off = document.querySelector(".contact-us__off");


contact_us_btn.addEventListener("click", function(){
  contact_us_btn.classList.add("header__contact-btn--active");
  contact_us.classList.add("contact-us--active");
  body.classList.toggle("body--active");
});

contact_us_off.addEventListener("click", function(){
  contact_us_off.classList.remove("contact-us__off--active");
  contact_us_btn.classList.remove("header__contact-btn--active");
  contact_us.classList.remove("contact-us--active");
  contact_us_btn.classList.remove("footer__contact-btn--active");
  body.classList.remove("body--active");
}); 

var contact_us_btn = document.querySelector(".footer__contact-btn");

contact_us_btn.addEventListener("click", function(){
  contact_us_btn.classList.add("footer__contact-btn--active");
  contact_us.classList.add("contact-us--active");
  body.classList.toggle("body--active");
});


var log_in__btn = document.querySelector(".header__log-in");
var profil__log_in = document.querySelector(".profil");
var profil__off = document.querySelector(".profil__off");
var sign_up__btn = document.querySelector(".header__sign-up");


log_in__btn.addEventListener("click", function(){
  log_in__btn.classList.add("header__log-in--active");
  profil__log_in.classList.add("profil--active");
  body.classList.toggle("body--active");
});

sign_up__btn.addEventListener("click", function(){
  sign_up__btn.classList.add("header__sign-up--active");
  profil__log_in.classList.add("profil--active");
  body.classList.toggle("body--active");
});


profil__off.addEventListener("click", function(){
  profil__off.classList.remove("header__log-in--active");
  profil__off.classList.remove("header__sign-up--active");
  profil__log_in.classList.remove("profil--active");
  body.classList.remove("body--active");
}); 