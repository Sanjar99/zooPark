var panda__btn = document.querySelector(".panda__btn");
var donate_to_volunteers = document.querySelector(".donate-to-volunteers");
var donate_to_volunteers_off = document.querySelector(".donate-to-volunteers__off");


panda__btn.addEventListener("click", function(){
  panda__btn.classList.add("panda__btn--active");
  donate_to_volunteers.classList.add("donate-to-volunteers--active");
  body.classList.toggle("body--active");
});


donate_to_volunteers_off.addEventListener("click", function(){
  donate_to_volunteers_off.classList.remove("panda__btn--active");
  donate_to_volunteers.classList.remove("donate-to-volunteers--active");
  body.classList.remove("body--active");
}); 

