$(function(){ 
	$(".first_menu").click(function(){
		//隐藏class为childDiv的子菜单
		$(".childDiv").slideUp();
		//alert($(this).next().attr("class"));
		var nextClass = $(this).next().attr("class");
		//判断下一个元素的class是否是childDiv  并显示指定菜单
		if (nextClass.indexOf("childDiv") >= 0) {
			if($(this).next().css("display") == "block"){
				$(this).next().slideUp();
			}else{
				$(this).next().css("background"," #4B5F7D");
				$(this).next().slideDown();
			}
		}
	});

}); 
