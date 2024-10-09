$(function(){
    $('.is-home__useful .ico').each(function(i){
        $(this).attr('id','num' + (i+1));
    });
});

$(function(){
    $('.is-home__present .ico-new').each(function(i){
        $(this).attr('id','num' + (i+1));
    });
});

$(function(){
	do {
		$(".is-home__message ul").children("div.article:lt(4)").wrapAll('<li></li>')
	}while($(".is-home__message ul").children("div.article").length);
	do {
		$(".is-home__present ul").children("div.article:lt(4)").wrapAll('<li></li>')
	}while($(".is-home__present ul").children("div.article").length);
});

