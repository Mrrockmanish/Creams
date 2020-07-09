$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  
  $('.bars').on('click', function () {
    $(this).next('.menu').fadeToggle();
    $('body').toggleClass('overflow-hidden');
  });

  $('.promo-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    fade: true
  });



















});