/**
 * 获得话题
 */
$(document).ready(function(){
	var sort;
	var keyWord;
	
	
	/**
	 * 更新时间
	 */
	$("#id_updateTime").click(function(){
		sort = 0;
		search(1);
	});
	/**
	 * 发布时间
	 */
	$("#id_publishTime").click(function(){
		sort = 1;
		search(1);
	});
	/**
	 * 热度
	 */
	$("#id_replyCount").click(function(){
		sort = 2;
		search(1);
	});
	
	/**
	 * 搜索
	 */
	$("#id_search").click(function(){
		keyWord = $("#id_searchTopic").val();
		search(3);
	});
	
	/**
	 * 关键字
	 */
	$(".jqKeyWord").bind("click",function(){
		keyWord = $(this).text();
		search(2);
	});
	
	$("#id_publishTopic").click(function(){
		$("#id_form_publishTopic").submit();
	});
	
	
	function search(type){
		if(type == 1){
			$("#id_sort").val(sort);
		}else if(type == 2){
			//当2次点击 相同的 标签时，取消以标签为关键字搜索
			if($("#id_search_keyWord").val() == keyWord){
				$("#id_search_keyWord").val('');
				$("#id_keyWord_color").val('');
			}else{
				$("#id_search_keyWord").val(keyWord);
				$("#id_keyWord_color").val('color:red;')
			}
			
		}else if(type == 3){
			$("#id_sort").val('');
			$("#id_search_keyWord").val(keyWord);
		}
		$("#id_form_sort").submit();
	}
});