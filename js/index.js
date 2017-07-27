$(function(){
	var menu_index=0;//左侧列表下标
	var adv_index=0;//轮播图下标
	var port_index=0;//小圆点下标
	var timer_qg=null;//定时器
	var timer_adv=null;

	// 收藏隐藏内容动画
	$('.item_dl').mouseover(function(){
		$(this).addClass('hover');
	})
	$('.item_dl').mouseout(function(){
		$(this).removeClass('hover');
	})
	$('.item,.last_item,.left_hidden').hover(function(){
		$('.left_hidden').show();
	},function(){
		$('.left_hidden').hide();
	})
	//购物车影藏盒子
	$('.u_box1,.content_box_1').hover(function(){
		$('.utility_hidden').show();
		$('.content_box_1').show();
		$('.u_box1').addClass('utility_show hover');
	},function(){
		$('.utility_hidden').hide();
		$('.content_box_1').hide();
		$('.u_box1').removeClass('utility_show hover');
	})

	$('.u_box2,.content_box_2').hover(function(){
		$('.utility_hidden').show();
		$('.content_box_2').show();
		$('.u_box2').addClass('utility_show hover');
	},function(){
		$('.utility_hidden').hide();
		$('.content_box_2').hide();
		$('.u_box2').removeClass('utility_show hover');
	})
	
	//轮播图图片动画
	$('.adv_ul li').mouseover(function(){
		clearInterval(timer_adv);
		adv_index=$(this).index();
		$('.adv_ul li').eq(adv_index).css({"display":"block"}).siblings().css({"display":"none"});
		$('.port ul li').eq(adv_index).addClass('hover').siblings().removeClass('hover');
	})
	$('.adv_ul li').mouseout(function(){
		timer_adv=setInterval(advMove,2000);
	})
	$('.port ul li').mouseover(function(){
		clearInterval(timer_adv);
		adv_index=$(this).index();
		$('.adv_ul li').eq(adv_index).css({"display":"block"}).siblings().css({"display":"none"});
		$('.port ul li').eq(adv_index).addClass('hover').siblings().removeClass('hover');
	})

	$('.port ul li').mouseout(function(){
		timer_adv=setInterval(advMove,2000);
	})
	timer_adv=setInterval(advMove,2000);
	function advMove(){
		if (adv_index>=8) {
			adv_index=0;
		}
		$('.adv_ul li').eq(adv_index).css({"display":"block"}).siblings().css({"display":"none"});
		$('.port ul li').eq(adv_index).addClass('hover').siblings().removeClass('hover');
		adv_index++;
		// console.log(adv_index+'  ');
	}

	//限时抢购
})