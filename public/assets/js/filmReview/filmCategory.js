$(document).ready(function(){
	
	/**
	 * 给a标签绑定事件，处理form提交
	 */
	$('.jqCategory').bind("click",function(){
		$("#id_movieInfoParamType").val($(this).attr("name"));
		$("#id_keyWordSearchCategory").val($(this).text());
		$("#id_form_movieCategory").submit();
	});
	
	$('.jqArea').bind('click',function(){
		$("#id_movieInfoParamArea").val($(this).attr("name"));
		$("#id_keyWordSearchArea").val($(this).text());
		$("#id_form_movieArea").submit();
	});
});