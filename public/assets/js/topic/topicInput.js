/**
 * 话题发布
 * 2012-02-14
 * by zhangjie
 */
$(document).ready(function(){
	$("#id_div_content").jtextarea();
	if($("#id_topicKeyWord").val().length > 0){
		$("#id_keyWord").val($("#id_topicKeyWord").val());
	}
	
	$("#id_keyWord").focus(function (){
		if($(this).val() == this.defaultValue){
			$(this).val("");
		}	
	}).blur(function(){
		if($(this).val() == ""){
			$(this).val(this.defaultValue);
		}
	});
	
	
	
	
	
	$(".jqKeyWord").bind("click",function(){
		if($("#id_keyWord").val() == "多个用空格隔开"){
			$("#id_keyWord").val($(this).text());
		}else{
			var keyWord = $("#id_keyWord").val().split(" ");
			if(keyWord.length >= 5)return;
			for(var i = 0; i < keyWord.length; i++){
				if(keyWord[i] == $(this).text()){
					return;
				}
			}
		
			$("#id_keyWord").val($("#id_keyWord").val()+" " + $(this).text());
		}
	});
	
	
	$("#id_div_content").keyup(function(e){
		var content = $("#id_div_content").val();
		if(content.length == 0){
			$("#id_div_content").css("height","20");
		}
		if(e.keyCode == '13'){
			var height = $("#id_div_content").css("height");
			height = height.split("px");
			var tmp = height[0] - 0 + 20;
			$("#id_div_content").css("height", tmp+ "px");
		}
		//计算已经输入多少字
		$("#id_conentNum").text(content.length+"/1000");
	});
	
	$("#id_submit_topicReply").click(function(){
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_div_content").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_div_content").val().replace(/\n/g,"<br>"); 
		}
		if(tmp.length == 0){
			alert("话题内容不能为空!");
			return;
		}
		if(tmp.length < 10){
			alert("话题内容最少10个字!");
			return;
		}
		
		if(tmp.length > 1000){
			alert("话题内容过长!");
			return;
		}
		
		$("#id_content").val(tmp);
		
		if($("#id_keyWord").val() == "多个用空格隔开"){
			alert("请给话题添加标签!");
			return;
//			$("#id_keyWord").val("");
		}
		$("#id_form_topicReply").submit();
	});
	
	/**
	 * 清理标签
	 */
	$("#id_clearAllLabel").click(function(){
		$("#id_keyWord").val("多个用空格隔开");
	});
});
























