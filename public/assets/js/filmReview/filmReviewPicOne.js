$(document).ready(function(){
	
	
	$("#id_div_comment").jtextarea();
	/**
	 * 喜欢剧照
	 */
	$("#id_favor").click(function(){
		$("#id_form_favor").submit();
	});
	
	$("#id_favor_2").click(function(){
		$("#id_form_favor").submit();
	});
	
	/**
	 * 删除剧照的评论
	 */
	$("#id_deleteCommentImage").click(function(){
		var c = confirm("是否确定删除?");
		if(c){
			$("#id_form_deleteCommentImage").submit();
		}
	});
	
	/**
	 * 删除剧照
	 */
	$("#id_deleteMovieImage").click(function(){
		var c = confirm("是否确定删除?");
		if(c){
			$("#id_form_deleteMovieImage").submit();
		}
	});
	
	/**
	 * 提交剧照评论
	 */
	$("#id_submitCommentImage").click(function(){
		if($("#id_checkbox_favor").attr("checked")){
			$("#id_favorMovieImage").val(1);
		}
		var content = "";
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_div_comment").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_div_comment").val().replace(/\n/g,"<br>"); 
		}
		content = tmp;
		
		$("#id_commentContent").val(content);
		$("#id_form_addCommentImage").submit();
	});
});