let tl = gsap.timeline();
let mainText = document.querySelectorAll('.main_text > *');

tl.from('.top_text p', {
  opacity: 0, 
  duration: 1,
  x:10,
});

tl.from('.top_text span', {
  opacity: 0, 
  duration: .8,
  scale: 2,
}, "-=.5");

tl.from('.bottom_text p', {
  opacity: 0, 
  duration: 1,
  x: -10,
}, '<');

tl.from('.bottom_text span', {
  opacity: 0, 
  duration: .7,
  scale: 2,
});


$(document).ready(function(){

  $(".mob_btn").click(function(){
    $("nav").stop(true,true).fadeIn();
  });

  $(".close").click(function(){
    $("nav").fadeOut();
    return false;
  });

});