$('.slick-slider').slick({
    infinite: false,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ocusOnSelect: true,
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




  $('[id|=category]').each(function(i) {
      $('ul.nav-menu').append('<li><a href="#'+ this.id +'">'+ this.textContent +'</a></li>');
  });

$('ul.nav-menu > li > a').on('click', function() {

  $('#menu-button, header nav').toggleClass('active');
  if (!$('#menu-button').data('status')) {
      $('#menu-button').html('Закрыть');
      $('#menu-button').data('status', true);
    }
    else {
      $('#menu-button').html('Меню');
      $('#menu-button').data('status', false);
    }  
    
  let href = $(this).attr("href");
  let hrefTop = $(href).offset().top - 100;
  $("html, body").animate({
      scrollTop: hrefTop
  }, 'slow');

});




$('#whatsapp-send').on('click', function() {

const numberWA = '79271101373';

let textWA = $('#whatsapp-send-text').val();

  if (textWA.length > 3) {
    sendToWhatsapp(textWA, numberWA);
  }


});

function sendToWhatsapp(text, phone) {
 
  text = encodeURIComponent(text);
 
  let url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
 
  window.open(url);
}
