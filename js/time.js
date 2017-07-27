function ShowCountDown(year,month,day,divname) 
{ 
	var now = new Date(); 
	var endDate = new Date(year, month-1, day); 
	var leftTime=endDate.getTime()-now.getTime(); 
	var leftsecond = parseInt(leftTime/1000); 
	//var day1=parseInt(leftsecond/(24*60*60*6)); 
	var day1=Math.floor(leftsecond/(60*60*24)); 
	var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
	// day1=(Array(2).join(0)+day1).slice(-2);
	hour=Number((Array(2).join(0)+hour).slice(-2));
	minute=(Array(2).join(0)+minute).slice(-2);
	second=(Array(2).join(0)+second).slice(-2);
	var cc = document.getElementById(divname); 
	cc.innerHTML = "<label>剩余时间：</label>"+'<span class="c_orange">'+(hour+day1*24)+'</span> : <span class="c_orange">'+minute+'</span> : <span class="c_orange">'+second+'</span>'; 
} 
window.setInterval(function(){ShowCountDown(2017,7,30,'timer');}, 1000);  