$(function(){ 
	divHieght();
	window.onresize=function(){
		divHieght();
	}


});
function divHieght(){
	$("#body_iframe_body").height(document.documentElement.clientHeight);
}
