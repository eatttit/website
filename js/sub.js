$(document).ready(function(){



});

function stickyfoot() {
	//console.log($('body').height());
	//console.log($(window).height());
	if ($('body').height() > $(window).height()) {
		$('#footer_wrap').removeClass('sticky');
		$('#container_wrap').removeClass('sticky');
	}else {
		$('#footer_wrap').addClass('sticky');
		$('#container_wrap').addClass('sticky');
	}
}

$(window).load(function(){

	stickyfoot();
	$(window).resize(function () {
		stickyfoot();
	});

});
