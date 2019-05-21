/*圓形進度條*/
var getcircle= document.getElementsByClassName('circle');
for(var i=0;i<getcircle.length;i++){
	
	percent=parseInt(getcircle[i].getAttribute('title'));
		action_circle(getcircle[i],percent,0);



}
function action_circle(item,max,time){
	time+=1;
	if (max<time){
		
	}else{
		var percent=0;
		percent=(360*time/100-135);
		if(percent>45){
			item.getElementsByClassName('percents')[0].innerText=time+"%";
			item.getElementsByClassName('leftcircle')[0].style.cssText = "transform: rotate("+percent+"deg)";
			
		}else{
			item.getElementsByClassName('percents')[0].innerText=time+"%";
			item.getElementsByClassName('rightcircle')[0].style.cssText = "transform: rotate("+percent+"deg)";
			
		}
			
		
		 setTimeout(function () {action_circle(item,max,time);}, 50);
	}
	
  
}
/*平行進度條*/
var getllel= document.getElementsByClassName('container');
for(var i=0;i<getllel.length;i++){
	
	percent=parseInt(getllel[i].getAttribute('title'));
		action_llel(getllel[i],percent,0);



}
function action_llel(item,max,time){
	time+=1;
	if (max<time){
		
	}else{
			item.getElementsByClassName('skills')[0].innerText=time+"%";
			item.getElementsByClassName('skills')[0].style.cssText = "width: "+time+"%";
		 setTimeout(function () {action_llel(item,max,time);}, 50);
	}
	
  
}