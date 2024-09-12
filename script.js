//window scroll

$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 100) {
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header')
  }
});

// Document Ready
$(document).ready(function(){

  //Typing animation
  new Typed('#type-it', {
    strings: ['Developer', 'Designer' , 'Gamer' , 'YouTuber'],
    typeSpeed: 100,
    loop: true
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 2,
    margin:30,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
      0:{
        items:1
      },
      900:{
        items:2
      },
    }
  });

  // One Page Scroll
  $.scrollIt({
    easing: 'linear',      // the easing function for animation
    topOffset: -70           // offste (in px) for fixed top navigation
  });
});

const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const subject_error = document.getElementById('subject_error');

const message_error = document.getElementById('message_error');

form.addEventListener('submit',(e)=>{

  var email_check = /\S+@\S+\.\S+/;
  if(name.value === '' || name.value == null){
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  }else {
    name_error.innerHTML = "";
  }
  if(!email.value.match(email_check)){
    e.preventDefault();
    email_error.innerHTML = "Enter valid Email";
  }else {
    email_error.innerHTML = "";
  }

  if(subject.value === '' || subject.value == null){
    e.preventDefault();
    subject_error.innerHTML = "Please enter a subject";
  }else {
    subject_error.innerHTML = "";
  }

  if(message.value.length < 30){
    e.preventDefault();
    message_error.innerHTML = "Please enter a message in at least 30 characters";
  }else {
    message_error.innerHTML = "";
  }

})
