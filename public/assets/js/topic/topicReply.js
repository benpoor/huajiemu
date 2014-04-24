/**
 * 话题与话题回复
 */
$(document).ready(function(){
	var sort;
	var keyWord;
	$("#id_div_content").jtextarea();
	//下拉菜单
	$("ul.menu_floor").superfish(); 
	/**
	 * 添加回复
	 */
	$("#id_submit").click(function(){
		
		if($("#id_div_content").val().length > 1000){
			alert("回复内容过长!");
			return;
		}
		
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_div_content").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_div_content").val().replace(/\n/g,"<br>"); 
		}
		if(tmp.length == 0){
			alert("回复内容不能为空!");
			return;
		}
		
		$("#id_topicReplyContent").val(tmp);
		$("#id_from_topicReply").submit();
		$("#id_topicReplyReplyId").val(0);
	});
	
	/**
	 * 删除回复
	 * 
	 */
	$(".jqDelete").click(function(){
		var c =  confirm("是否确认删除");
		if(c){
			$("#id_deletTopicReply_topicReplyId").val($(this).attr("name"));
			$("#id_form_deletTopicReply").submit();
		}
	});
	
	
	/**
	 * 搜索
	 */
	$("#id_search").click(function(){
		keyWord = $("#id_searchTopic").val();
		search();
	});
	
	/**
	 * 关键字
	 */
	$(".jqKeyWord").bind("click",function(){
		keyWord = $(this).text();
		search();
	});
	
	function search(){
		$("#id_sort").val(sort);
		$("#id_search_keyWord").val(keyWord);
		$("#id_search_topic").submit();
	}
	
	//上条
	$("#id_prevTopic").click(function(){
		var topicId = $("#id_topicId").val() - 1;
		if(topicId <= 0){
			return;
		}
		$("#id_pageTopic").val(topicId);
		$("#id_form_pageTopic").submit();
		
	});
	//下条
	$("#id_nextTopic").click(function(){
		var topicId = $("#id_topicId").val() - 0 + 1;
		$("#id_pageTopic").val(topicId);
		$("#id_form_pageTopic").submit();
	});
	
	//回复某人
	$(".jqToReply").click(function(){
		var r = $(this).attr("name");
		r = r.split("-");
		$.getJSON($("#id_common_path").val() + '/topic/isLogin',function(data) {
			if(data.json == "0"){
				window.location.href = "/toLogin";
			}else{
				$("#id_topicReplyReplyId").val(r[0]);
				$("#id_div_content").empty();
				$("#id_div_content").val(r[1] + " ");
				$('#id_div_content').selectRange(30, 50);
			}
		});
	});
	
	
//	$("#id_div_content").keyup(function(e){
//		var content = $("#id_div_content").val();
//		
//		
//		if(content.length == 0){
//			$("#id_div_content").css("height","20");
//			$("#id_topicReplyReplyId").val('0');
//		}
		
//		if(e.keyCode == '13'){
//			var height = $("#id_div_content").css("height");
//			height = height.split("px");
//			var tmp = height[0] - 0 + 20;
//			$("#id_div_content").css("height", tmp+ "px");
//		}
		
//	});
	
//	$("#id_div_content").bind("paste",function(){
////		alert("咱贴");
////		var scrollHeight =  $("#id_div_content").prop('scrollHeight');
//		var s = $("#id_div_content")[0].scrollHeight;
//		$("#id_div_content").attr("height",s+"px")
//	});
	
	/**
	 * 删除话题
	 */
	$("#id_deleteTopic").click(function(){
		var c =  confirm("是否确认删除");
		if(c){
			$("#id_form_deleteTopic").submit();
		}
	});
	
	$("#id_editTopic").click(function(){
		$("#id_from_goEditTopic").submit();
	});

	
});

/**
 * 设置文本光标在最后位置
 */
$.fn.selectRange = function(start, end) {
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

/**
 * 设置TextAreaHeight高度
 * @param obj
 */
function setTextAreaHeight(obj)
{
//     obj.style.height = obj.scrollHeight + 'px';
}





