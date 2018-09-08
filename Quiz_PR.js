$(function() {
  	var appear = false;
  	var pagetop = $('#page_top');
  	$(window).scroll(function () {
    	if ($(this).scrollTop() > 1000) {  //100pxスクロールしたら
      		if (appear == false) {
        		appear = true;
        		pagetop.stop().animate({
          		'right': '20px' //右から0pxの位置に
        		}, 300); //0.3秒かけて現れる
      		}
    	} else {
      		if (appear) {
        		appear = false;
        		pagetop.stop().animate({
         		'right': '-70px' //右から-50pxの位置に
        		}, 300); //0.3秒かけて隠れる
      		}
    	}
  	});
  	pagetop.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    	return false;
  	});
});

$(function(){	// #で始まるリンクをクリックしたら実行されます 
	$('a[href^="#"]').click(function() {
    	var speed = 750; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});