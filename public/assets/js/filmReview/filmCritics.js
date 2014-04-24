$(document).ready(function(){
//	var defaultValue = "";
//	
//	$("#id_div_commontInfoContent").focus(function (){
//		if($(this).val() == defaultValue){
//			$(this).val("");
//		}	
//	}).blur(function(){
//		if($(this).val() == ""){
//			$(this).val(defaultValue);
//		}
//	});
	$("#id_div_commontInfoContent").jtextarea();
	/**
	 * 提交回复
	 */
	$("#id_submitComment").click(function(){
		var content = "";
		
		
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_div_commontInfoContent").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_div_commontInfoContent").val().replace(/\n/g,"<br>"); 
		}
		content = tmp;
		if(content.length > 1000){
			alert("回复内容过长!");
			return;
		}
		
		if(content.length == 0){
			alert("回复内容不能为空!");
			return;
		}
		var isFavor = 0;
		if($("#id_checkbox").attr("checked")=="checked")
			isFavor = 1;
		$("#id_isFavor").val(isFavor);
		$("#id_commontInfoContent").val(content);
		$("#id_form_filmReview").submit();
	});
	
	$("#id_div_checkbox").click(function(){
			$("#id_checkbox").attr("checked",!$("#id_checkbox").attr("checked"));
	});
	
	/**
	 * 喜欢次影评
	 */
	$("#id_favor").click(function(){
		$("#id_form_favorFilmReview").submit();
	});
	
//	
//	$("#id_div_commontInfoContent").keyup(function(e){
//		var content = $("#id_div_commontInfoContent").val();
//		if(content.length == 0){
//			$("#id_div_commontInfoContent").css("height","20");
//		}
//		if(e.keyCode == '13'){
//			var height = $("#id_div_commontInfoContent").css("height");
//			height = height.split("px");
//			var tmp = height[0] - 0 + 20;
//			$("#id_div_commontInfoContent").css("height", tmp+ "px");
//		}
//	});
	
	/**
	 * 删除影评
	 */
	$("#id_deleteFilmReview").click(function(){
		var c =  confirm("是否确认删除");
		if(c){
			$("#id_form_deleteFilmReview").submit();
		}
	});
	/**
	 * 编辑影评
	 */
	$("#id_editFilmReview").click(function(){
		$("#id_form_editFilmReview").submit();
	});
	
	/**
	 * 删除评论
	 */
	$("#id_deleteCommentInfo").click(function(){
		var c =  confirm("是否确认删除");
		if(c){
			$("#id_form_deleteCommentInfo").submit();
		}
	});
	
});

