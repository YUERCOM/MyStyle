$(function(){ 
	$(".select_input").focus(function(){
  		$(this).parent().next().show();
	});

	$(".select_input").blur(function(){
		$(this).parent().next().hide();
	});

	$("#select_select").change(function(){
		alert($("#select_select").find("option:selected").attr("cxfUrl"));
		alert($("#select_select").find("option:selected").attr("abc"));
	});

}); 

//setInterval(abc,5000);

function abc(){
	alert(1);
}