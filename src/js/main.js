var leave_feedback_btn = document.querySelector(".testimonials__btn");
var leave_feedback = document.querySelector(".leave-feedback");
var leave_feedback_off = document.querySelector(".leave-feedback__off");

leave_feedback_btn.addEventListener("click", function(){
  leave_feedback_btn.classList.add("testimonials__btn--active");
  leave_feedback.classList.add("leave-feedback--active");
  body.classList.toggle("body--active");
});



leave_feedback_off.addEventListener("click", function(){
  leave_feedback_off.classList.remove("testimonials__btn--active");
  leave_feedback.classList.remove("leave-feedback--active");
  body.classList.remove("body--active");
}); 




var benefits__btn = document.querySelector(".benefits__btn");
var donate_to_volunteers = document.querySelector(".donate-to-volunteers");
var donate_to_volunteers_off = document.querySelector(".donate-to-volunteers__off");

benefits__btn.addEventListener("click", function(){
  benefits__btn.classList.add("benefits__btn--active");
  donate_to_volunteers.classList.add("donate-to-volunteers--active");
  body.classList.toggle("body--active");
});


donate_to_volunteers_off.addEventListener("click", function(){
  donate_to_volunteers_off.classList.remove("benefits__btn--active");
  donate_to_volunteers.classList.remove("donate-to-volunteers--active");
  body.classList.remove("body--active");
}); 






























