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
            breakpoint: 1024,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: false,
                }
        }
    ]
  });