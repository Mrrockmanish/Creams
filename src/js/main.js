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

  $('.show-certificates').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('[data-call]').on('click', function () {
    $('#form-modal').arcticmodal();
    const dataValue = $(this).data('call');
    $('#form-modal').find('input[name="data-call"]').val(dataValue);
  });



  $('[data-modal]').on('click', function () {
    const modalId = $(this).data('modal');
    $(modalId).arcticmodal();
  });

  const productionSlider = (el) => {
    $(el).slick({
      slidesToScroll: 3,
      slidesToShow: 3,
      dots: true,
      arrows: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    })
  };

  $('[data-slider]').on('click', function () {
    const el = $(this);
    const modalId = el.data('slider');
    const sliderId = modalId + "-slider";
    $(modalId).arcticmodal();
    productionSlider(sliderId);
  })


  $(document).on('af_complete', function (event, response) {
    var form = response.form;
    // Если у формы определённый класс
    if (form.hasClass("form-in-modal") && response.success == true) {
      // Скрываем её!
      $('#form-modal').arcticmodal('close');
      $('#thanks').arcticmodal();
    }
    // Иначе печатаем в консоль весь ответ
    else {
      console.log(response);
    }
  });




});
