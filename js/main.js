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