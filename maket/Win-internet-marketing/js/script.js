$(document).ready(function() {

	mainSlider();

	function mainSlider() {
		var mySwiper = new Swiper('.js-mainSlider', {
		    speed: 4000,
		    spaceBetween: 100,
		    autoplay: {
			   delay: 5000,
			},
			pagination: {
		       el: '.main-slider__pagination',
		       clickable: true,
		    },
			effect: 'fade',
		    grabCursor: true,
		});
	};

	/*Mobile menu*/
	$('body').on('click', '.js-menuToggle', function(e){
		e.preventDefault();
		$(this).toggleClass('-is-active');
		$('body').toggleClass('-style_fixed');
		$('.js-mainMenu').toggleClass('-is-active');
	});
	/*End Mobile menu*/

	/*Scrolling header*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('body .js-scrollHeader').addClass("-style-fixed");
		} else {
			$('body .js-scrollHeader').removeClass("-style-fixed");
		};
	});
	/*END Scrolling header*/

});