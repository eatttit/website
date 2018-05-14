$(document).ready(function(){

	$('#gnb>li').hover(
		function(){
			clearTimeout($.data(this, 'timer'));
			$('ul', this).stop(true, true).slideDown(400);
		},
		function(){
			$.data(this, 'timer', setTimeout($.proxy(function(){
				$('ul', this).stop(true, true).slideUp(100);
			}, this), 100));
		}
	);

	// var gnbs = ['aaa0', 'bbb0', 'ccc0', 'ddd0', 'eee0', 'fff0', 'ggg0', 'hhh0'];
	// $.each(gnbs, function(index, value) {
	// 	if($('body').hasClass(value)){
	// 		$(function(){
	// 			$('#gnb>li:eq('+index+')').addClass('on');
	// 		});
	// 	}
	// });

	// var page_url=location.href.toLowerCase();
	// $('#lnb li a').each(function() {
	// 	if (page_url.indexOf(this.href.toLowerCase()) > -1) {
	// 		$('#lnb li.on').removeClass('on');
	// 		$(this).parent().addClass('on');
	// 	}
	// });
	// $('#lnb li.on').parents().each(function() {
	// 	if ($(this).is('li')){
	// 		$(this).addClass('on');
	// 	}
	// });

	// var lnbs = ['[class$=01]', '[class$=02]', '[class$=03]', '[class$=04]', '[class$=05]', '[class$=06]', '[class$=07]', '[class$=08]', '[class$=09]', '[class$=10]'];
	// $.each(lnbs, function(index, value) {
	// 	if($('body').is(value)){
	// 		$(function(){
	// 			$('#lnb>ul>li:eq('+index+')>a').addClass('on');
	// 		});
	// 	}
	// });

	var triggerBookmark = $('.add_bookmark');
	triggerBookmark.click(function() {
		if (window.sidebar && window.sidebar.addPanel) { // Firefox <23
			window.sidebar.addPanel(document.title,window.location.href,'');
		} else if(window.external && ('AddFavorite' in window.external)) { // Internet Explorer
			window.external.AddFavorite(location.href,document.title);
		} else if(window.opera && window.print || window.sidebar && ! (window.sidebar instanceof Node)) { // Opera <15 and Firefox >23
			triggerBookmark.attr('rel', 'sidebar').attr('title', document.title);
			return true;
		} else { // other browsers (WebKit)
			alert((navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'Ctrl') + '+D 키를 누르시면 즐겨찾기에 추가하실 수 있습니다.');
		}
		return false;
	});

});
