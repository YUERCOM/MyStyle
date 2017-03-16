$(function(){ 
	divHieght();
	window.onresize=function(){
		divHieght();
	}
	



});
function divHieght(){
	$("#body_index").height(document.documentElement.clientHeight);
	$("#body_left").height(document.documentElement.clientHeight-60);
	$("#body_right").height(document.documentElement.clientHeight-90);
}
