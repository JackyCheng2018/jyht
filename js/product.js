$(function(){
	$(".product_fen_title li:eq(0)").click(function(){
		$(this).parent().addClass("product_fen_title_bg1");
		$(this).parent().removeClass("product_fen_title_bg2");
		$(this).parent().removeClass("product_fen_title_bg3");
		$(this).parent().removeClass("product_fen_title_bg4");
		$(this).addClass("product_fen_title_current");
		$(this).siblings().removeClass("product_fen_title_current");
		$(".xianwei1").show();
		$(".xianwei1").siblings().hide();
		$(".product_fen_title").show();
	});	
	$(".product_fen_title li:eq(1)").click(function(){
		$(this).parent().addClass("product_fen_title_bg2");
		$(this).parent().removeClass("product_fen_title_bg1");
		$(this).parent().removeClass("product_fen_title_bg3");
		$(this).parent().removeClass("product_fen_title_bg4");
		$(this).addClass("product_fen_title_current");
		$(this).siblings().removeClass("product_fen_title_current");
		$(".xianwei2").show();
		$(".xianwei2").siblings().hide();
		$(".product_fen_title").show();
	});	
	$(".product_fen_title li:eq(2)").click(function(){
		$(this).parent().addClass("product_fen_title_bg3");
		$(this).parent().removeClass("product_fen_title_bg2");
		$(this).parent().removeClass("product_fen_title_bg1");
		$(this).parent().removeClass("product_fen_title_bg4");
		$(this).addClass("product_fen_title_current");
		$(this).siblings().removeClass("product_fen_title_current");
		$(".xianwei3").show();
		$(".xianwei3").siblings().hide();
		$(".product_fen_title").show();
	});	
	$(".product_fen_title li:eq(3)").click(function(){
		$(this).parent().addClass("product_fen_title_bg4");
		$(this).parent().removeClass("product_fen_title_bg2");
		$(this).parent().removeClass("product_fen_title_bg3");
		$(this).parent().removeClass("product_fen_title_bg1");
		$(this).addClass("product_fen_title_current");
		$(this).siblings().removeClass("product_fen_title_current");
		$(".xianwei4").show();
		$(".xianwei4").siblings().hide();
		$(".product_fen_title").show();
	});	
})