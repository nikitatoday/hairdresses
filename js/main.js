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

function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}