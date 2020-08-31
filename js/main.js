$('.gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
  }
  // other options
});

$(function() {
  // Owl Carousel
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
});

$(document).ready(function(){

  $('.header__navicon').click(function(e){
  	$(this).next().slideToggle(500);
  });

});

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "form/telegram.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('#consultation').fadeOut();
		$('.overlay, #thanks').fadeIn('slow');

		$('form').trigger('reset');
	});
	return false;
});


//MODAL

$('[data-modal=consultation]').on('click', function() {
	$('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
	$('.overlay, #consultation, #thanks').fadeOut('slow');
});

//MODAL