$(function(){
	divHieght();
	window.onresize=function(){
		divHieght();
	}
	
});

function divHieght(){
	$("#div").height(document.documentElement.clientHeight-20);
	$("#div_1").height(document.documentElement.clientHeight-40);
	$("#div_2").height(document.documentElement.clientHeight-40);
	$("#div_3").height(document.documentElement.clientHeight-40);
	$("#div_4").height(document.documentElement.clientHeight-40);
	$("#div_5").height(document.documentElement.clientHeight-40);
}

