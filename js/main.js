var navLinks = $('nav a');
navLinks.on('click', function(){
	navLinks.removeClass('active');
	$(this).addClass('active');
});

$('#nav-about').on('click', function(){
  $('#section-1').animatescroll();
});

$('#nav-treatment').on('click', function(){
  $('#section-2').animatescroll();
});

$('#nav-contact').on('click', function(){
  $('#section-3').animatescroll();
});


// $('nav').find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });