/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-03 14:10:29
 * @version $Id$
 */
 if(typeof jQuery==="undefined"){
 	var url=window.location;
 	url=url.toString();
 	var reg=/(\w)+.html/i;
 	url=url.replace(reg,function(a){
 		return "img/"+a;
 	});
 	alert("由于图片路径的原因，页面将自动跳转到img内的网页");
 	window.location=url;
 }
