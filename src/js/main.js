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

  $('.comments-slider').slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    dots: false,
    arrows: true,
    prevArrow: '<div class="comments-arrow comments-arrow__left slick-prev slick-arrow"></div>',
    nextArrow: '<div class="comments-arrow comments-arrow__right slick-next slick-arrow"></div>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.video-link').magnificPopup({
    type: 'iframe'
  });

  $('[data-call]').on('click', function () {
    $('#form-modal').arcticmodal();
    const dataValue = $(this).data('call');
    $('#form-modal').find('input[name="data-call"]').val(dataValue);
  });














});