/*!
 *@name     jquery.barrager.js
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
(function($) {
	window_width = $(window).width() + 500
	$.fn.barrager = function(barrage) {
		barrage = $.extend({
			close:true,
			bottom: 0,
			max: 10,
			speed: 6,
			color: '#fff',
			old_ie_color : '#000000'
		}, barrage || {});

		var time = new Date().getTime();
		var barrager_id = 'barrage_' + time;
		var id = '#' + barrager_id;
		var div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
		var window_height = $(window).height() - 100;
		var bottom = (barrage.bottom == 0) ? Math.floor(Math.random() * window_height + 40) : barrage.bottom;
		div_barrager.css({"bottom": bottom + "px"});
		div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
		if(barrage.img){
			div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
			var img = $("<img src='' >").appendTo(id + " .barrage_box .portrait");
			img.attr('src', barrage.img);
		}
		
		div_barrager_box.append(" <div class='z p'></div>");
		if(barrage.close){
			div_barrager_box.append(" <div class='close z'></div>");
		}
		
		var content = $(id + " .barrage_box .p").append('<span class="vt-midl">'+ barrage.info +'</span>')
		content.click(function() {
			barrage.callback(barrage.params)
		})
		
		content.css('color', barrage.color);
		
		$(id).animate({'margin-right': window_width}, barrage.speed, 'linear', function() {
			$(this).remove()
		})
	}
 
	$.fn.barrager.removeAll = function(){
		 $('.barrage').remove();
	}

})(jQuery);