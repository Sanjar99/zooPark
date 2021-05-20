var aligator__btn = document.querySelector(".aligator__btn");
var donate_to_volunteers = document.querySelector(".donate-to-volunteers");
var donate_to_volunteers_off = document.querySelector(".donate-to-volunteers__off");


aligator__btn.addEventListener("click", function(){
  aligator__btn.classList.add("aligator__btn--active");
  donate_to_volunteers.classList.add("donate-to-volunteers--active");
  body.classList.toggle("body--active");
});


donate_to_volunteers_off.addEventListener("click", function(){
  donate_to_volunteers_off.classList.remove("aligator__btn--active");
  donate_to_volunteers.classList.remove("donate-to-volunteers--active");
  body.classList.remove("body--active");
}); 

