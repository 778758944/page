/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-16 15:04:02
 * @version $Id$
 */
 var get={
 	byClass:function(tagname,classname,obj){
 		var tagcol=(obj||document).getElementsByTagName(tagname);
 		for(var i=0;i<tagcol.length;i++){
 			if(tagcol[i].className==classname){
 				return tagcol[i];
 			}
 		}
 	}
};
$(function(){
	var time1;
	var time2;
	$("[data-toggle='popover']").popover();
	$("#ul1 li").mouseover(function(event){
		clearTimeout(time1);
		$("#ul1 .caret").css("display","block");
		
		$(".bp2").css("display","block");
		var oleft=this.offsetLeft;
		var owidth=this.offsetWidth;
		
		var pos=oleft+(owidth/2)-10;
		
		var aa=$(this).children("a");
		var wid=document.documentElement.clientWidth;
		$("#div1").css("display","block");
		
		$("#ul1 .caret").animate({left:pos+"px"},1);
		aa.tab("show");
	}).mouseout(disap);
	function disap(){
		time1=setTimeout(function(){
			$(".caret").css("display","none");
		    $("#div1").css("display","none");
		    $(".bp2").css("display","none");
		},100);
	};
	$("#div1").mouseover(function(){
		clearTimeout(time1);
		
	}).mouseout(function(event){
		if(event.relatedTarget.className!="bp2"){
			disap();
		}
	});
	$(".bp2").mouseout(function(){
		disap();
	});
	$(".caret").mouseover(function(){
		$(this).css("display","block");
	});
	$(".caret").mouseover(function(){
		$(this).css("display","block");
	})

	//轮播按钮淡入淡出
	$("#car1").hover(function(){
		$(".rightdot").stop().animate({opacity:"1"},500);
		$(".leftdot").stop().animate({opacity:"1"},500);
	},function(){
		$(".rightdot").stop().animate({opacity:"0"},500);
		$(".leftdot").stop().animate({opacity:"0"},500);
	});

	$(".rightdot").hover(function(){
		this.style.backgroundPosition="0 -60px";
		
	},function(){
		this.style.backgroundPosition="0 0";
	});
	$(".leftdot").hover(function(){
		this.style.backgroundPosition="0 -60px";
	},function(){
		this.style.backgroundPosition="0 0";
	})
	$("#ul2 li").mouseover(function(){
		clearTimeout(time2);
		var bb=$(this).children("a");
		$(this).css("background-color","rgba(233,233,233,0.9)").siblings().css("background-color","#F3F3F3");
		$("#div2").css("display","block");
		bb.tab("show");
	}).mouseout(function(event){
		if(event.relatedTarget.tagName=="UL"){
			
			return false;
		}
	})
	$("#ul2").mouseout(function(){
		time2=setTimeout(function(){
			$("#div2").css("display","none");
			$("#ul2 li").css("background-color","#F3F3F3");
		},100)
	});
	$("#div2").mouseover(function(){
		clearTimeout(time2);
	}).mouseout(function(){
		time2=setTimeout(function(){
			$("#div2").css("display","none");
			$("#ul2 li").css("background-color","#F3F3F3");
		},100);
	})
	$(".inner1 button").hover(function(){
		$(this).animate({opacity:"0.8"},500);
	},function(){
		$(this).animate({opacity:"1"},500);
	})
	//文字变化
	var txt=["提升技术实力 迅速获得高薪","学习最新实战教程 迅速提升开发实力","知识碎片化 自由规划学习周期"];
	var b=0;
	var time3=setInterval(function(){
		var i=Math.floor(Math.random()*3);
		while(i==b){
			i=Math.floor(Math.random()*3);
		}
		$("#wenzi h2").text(txt[i]);
		b=i;

	},3000);
	//设置二维码；
	$("#ewm").click(function(){
		$(this).remove();
		$("#bar .erw").css("display","block");
	});
	//滚动事件
	document.onscroll=function(){
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		if(top>0){
			$("#bar .st").animate({opacity:"1"},500).css("display","block");
		}
		else if(top==0){
			$("#bar .st").animate({opacity:"0"},500).css("display","none");
		}
		
	};

	//滚动监听
	$("#myspy").on("activate.bs.scrollspy",function(){
		var k=$("#myspy li").index($("#myspy .active"));
		var bp=get.byClass("div","bp",document.getElementById('nav'));
		//设置ewm
		if(k>=2){
			
				$("#ewm").css("display","block").animate({opacity:"1"}, 500);
				console.log("kk");
			
		}
		else if(k<2){
			
				$("#ewm").animate({opacity:"0"}, 500,function(){
					$("#ewm").css('display',"none");
				});
		
		}
		switch(k){
			case 0:
			$("#nav").css("position","absolute").css("top","60px").css("opacity","").css("backgroundColr","");
			bp.style.boxShadow="0px 0px 0px 0px #fff";
			$("#nav .bp").css("opacity","0.6");
			$("#nav .bp").css("backgroundColor","#F3F2F0");
			$("#nav form").css("display","block");
			$("#ddr").css("display","none");
			break;

			case 1:
			$("#nav").css("position","fixed").css("top","-2px").css("backgroundColor","#fff");
			bp.style.boxShadow="2px 1px 3px 2px #777";
			$("#nav .bp").css("opacity","1");
			$("#nav .bp").css("backgroundColor","#fff");
			$("#nav form").css("display","none");
			$("#ddr").css("display","block");
			break;

		}
	});
})
