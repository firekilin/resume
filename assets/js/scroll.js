var circle=true;
var timelist=[true,true,true,true];
$(window).scroll(function() {
    
	/*console.log($(window).scrollTop());*/
    
	var scroll=$(window).scrollTop();
	$('.layout.personal').css({
		'left':(-scroll+100)+'px',
	});
	$('.layout.ability').css({
		'left':(-scroll+1600)+'px',
	});
	$('.layout.experience').css({
		'left':(-scroll+3240)+'px',
	});
	$('.layout.call').css({
		'left':(-scroll+5240)+'px',
	});

	
	if (scroll>1000&&circle){
		new_element=document.createElement("script");
　	　	new_element.setAttribute("type","text/javascript");
　　	new_element.setAttribute("src","assets/js/circle.js");
		document.body.appendChild(new_element);
		circle=false;
	}
	if (scroll>2240&&timelist[0]){
		$('.year_box.one').css({
			 'opacity': '1',
		})
		timelist[0]=false;
	}
		if (scroll>2740&&timelist[1]){
		$('.year_box.two').css({
			 'opacity': '1',
		})
		timelist[1]=false;
	}
		if (scroll>3240&&timelist[2]){
		$('.year_box.three').css({
			 'opacity': '1',
		})
		timelist[2]=false;
	}
		if (scroll>3740&&timelist[3]){
		$('.year_box.four').css({
			 'opacity': '1',
		})
		timelist[3]=false;
	}
}
);