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

  $('#cart-close, #mini-cart').on('click', function() {
    $('.sidebar-tabs').toggleClass('active');
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

$('#whatsapp-send-text').on('keypress', function(e) {
      if(e.which == 13) {
        const numberWA = '79271101373';

        let textWA = $('#whatsapp-send-text').val();
        
          if (textWA.length > 3) {
            sendToWhatsapp(textWA, numberWA);
          }
      }
});

function sendToWhatsapp(text, phone) {
 
  text = encodeURIComponent(text);
 
  let url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
 
  window.open(url);
}

$(window).on('load', function () {
      $('#load').delay(500).fadeOut('slow');
      setTimeout(function(){
/*         $( "#load" ).remove(); */
        $( "body" ).removeClass( "is-loading" );
      }, 400);
      

  });
  


  $( 'body' ).on( 'click', 'button.plus, button.minus', function() {
 
    var qty = $(this).parent().find( 'input' ),
        val = parseInt( qty.val() ),
        min = parseInt( qty.attr( 'min' ) ),
        max = parseInt( qty.attr( 'max' ) ),
        step = parseInt( qty.attr( 'step' ) );
   
    // дальше меняем значение количества в зависимости от нажатия кнопки
    if ( $( this ).is( '.plus' ) ) {
      if ( max && ( max <= val ) ) {
        qty.val( max );
      } else {
        qty.val( val + step );
      }
    } else {
      if ( min && ( min >= val ) ) {
        qty.val( min );
      } else if ( val > 1 ) {
        qty.val( val - step );
      }
    }
   
  });

/*   
  jQuery( function( $ ) {
 
	$( 'body' ).on( 'click', '.plus, .minus', function() {
 
		// делаем всё, что нужно сделать, меняем количество в полях
 
		input.val( quantity ).change();
		$( '[name="update_cart"]' ).trigger( 'click' );
	} );
 
} );
  
  
  */


$('form.woocommerce-cart-form').on('click', function( event ) {
  event.preventDefault();
});