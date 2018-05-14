$(document).ready(function(){

	$('.main_slide').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
		dots: true,
		fade: true,
		pauseOnHover: false,
		// respondTo: 'slider',
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		// customPaging : function(slider, i) {
		// 	var title = $(slider.$slides[i]).data('title');
		// 	return '<button></button><span>'+title+'</span>';
		// }
		vertical: false
	});

});
