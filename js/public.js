// JavaScript Document
$(document).ready(function(){$("..mNav_a:last").addClass("mNav_lasta");});
/* 菜单效果  */
 $(".mPos").hover(function(){$(this).addClass("mPos_hover")},function(){$(this).removeClass("mPos_hover")});
 $(".mPos").hover(function(){$(this).find(".mPos_menu1").show();$(this).find(".mNav_cuta,.mNav_a").addClass("mNav_cutahover");$(this).find(".mNav_cuta,.mNav_a").removeClass("mNav_cuta,.mNav_a");},function(){$(this).find(".mPos_menu1").hide();$(this).find(".mNav_cutahover").addClass("mNav_cuta,.mNav_a");$(this).find(".mNav_cutahover").removeClass("mNav_cutahover");});
//友情链接
$(".mCr_link").click(function(){$(".main2_html").html($(this).find(".main_html").html());$(this).toggleClass("mCr_linkBg");$(".mCr_posList").removeClass("mCr_posList2");$(".mCr_posList").toggle()});

$(".mCr_posList").hover(function(){return false;},function(){$(".mCr_posList").removeClass("mCr_posList2");$(".mCr_link,.mCr_link1").removeClass("mCr_linkBg");$(this).hide();});

$(".mCon_r").hover(function(){return false;},function(){$(".mCr_posList").hide();$(".mCr_link,.mCr_link1").removeClass("mCr_linkBg");});

$(".mCr_link1").click(function(){$(".mCr_link").removeClass("mCr_linkBg");$(".mCr_posList").addClass("mCr_posList2");$(".main2_html").html($(this).find(".main_html").html());$(this).toggleClass("mCr_linkBg");$(".mCr_posList").toggle()});

/* 滚动新闻 */
var rollText_k=$(".mNews_num li").size()/2;
				var rollText_i=1; //菜单默认值
				//setFocus1(0);
				rollText_tt=setInterval("rollText(1)",3000);
				function rollText(a){
				clearInterval(rollText_tt);
				rollText_tt=setInterval("rollText(1)",3000);
				rollText_i+=a;
				if (rollText_i>rollText_k){rollText_i=1;}
				if (rollText_i==0){rollText_i=rollText_k;}
				 for (var j=1; j<=rollText_k; j++){
				 document.getElementById("rollTextMenu"+j).style.display="none";
				 }
				 document.getElementById("rollTextMenu"+rollText_i).style.display="block";
				 document.getElementById("rollTextMenu"+rollText_i).onmouseover=txtStop();
				} 
function txtStop(){
	clearInterval(rollText_tt);
}
$(".banner").css("left",($("body").outerWidth()-1440)/2);
$(".banner2").css("left",($("body").outerWidth()-1165)/2);
$(".mCon").css("left",($("body").outerWidth()-1023)/2);
/*二级页面自由高度*/
var hobj1=$(".m2Con_l").height();
var hobj2=$(".m2Con_r").height();
if(hobj1>hobj2){
	$(".m2rCon").css("minHeight",hobj1-28);
}
/*屏蔽js错误*/
function SlyarErrors() { 
	return true;
} 
window.onerror = SlyarErrors;