$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 900,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: false,
                }
        }
    ]
  });

  $('#menu-button').on('click', function() {
    $('#menu-button, header nav').toggleClass('active');
    if (!$(this).data('status')) {
        $(this).html('Закрыть');
        $(this).data('status', true);
      }
      else {
        $(this).html('Меню');
        $(this).data('status', false);
      }
  });