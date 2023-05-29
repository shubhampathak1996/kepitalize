const items = document.querySelectorAll('.accordion a');

function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
$('.banners').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  smartSpeed: 800,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  autoplay: true,
  nav: true,
  infinite: true,
  smartSpeed: 250,
  rewindNav: false,
  responsiveClass: true,

  autoplay: true,

  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
