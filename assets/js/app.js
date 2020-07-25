// swiperjs
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: false,
	slidesToScroll: '1',
	// slidesPerView: '2',
	spaceBetween: 30,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth:0,
		modifier: 1,
		slideShadows: false,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	freeMode: true,
	loopedSlides: 4,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		256: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		576: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 2,
			slidesToScroll: '1',
			spaceBetween: 10,
		},
	}
});

// $(document).ready(function(){
// 	$('.slick-slider').slick({
		
// 	});
// });
// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }

$(document).ready(function(){
  $('#slide .slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots: true,
  //   speed: 2000,
  //   centerMode: true,
  // centerPadding: '60px',
  //   slidesToShow: 2,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 4
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  });
});
new WOW().init();
