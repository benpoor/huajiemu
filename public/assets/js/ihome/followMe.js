/**
 * 关注
 * 2012-02-19
 * by zhangjie
 */
$(document).ready(function(){
	
	$(getFollowMeHTML("")).appendTo("#id_followMeList");
	findAttentionListByUserId();
	
	
	
	/***FUNCTION***/
	
	
	/**
	 * 
	 * @param {Object} filmReview
	 * @return {TypeName} 
	 */
	function getFollowMeHTML(filmReview){
		var retVal = "";
		retVal += '<div class="m_s_l">';
		retVal += '<div class="From_Author">';
		retVal += '<a href="#"class="From_pic "><img src="../banner/ps.jpg" /></a></div>';
		retVal += '<div class="Critics_List">';
		retVal += '<h3> <a href="#">可可怜的手</a> </h3>';
		retVal += '<p>以时间为坐标，2011年的《阳光姐妹淘》跟2001年的《朋友》形成了有趣的互文。无论故事发生在首尔还是</p>';
		retVal += '<div class="guanzhu">';
		retVal += '<ul>';
		retVal += '<li>状态：<a href="#">相互关注</a></li>';
		retVal += '<li><a href="#">取消关注他</a></li>';
		retVal += '</ul>';
		retVal += '</div>';
		retVal += '</div>';
		retVal += '</div>';
		retVal += '<div class="blank08"></div>';
		
		return retVal;
	}
	/**
	 * 获取用户的关注列表
	 */
	function findAttentionListByUserId(){
		var userId = 1;
		$.getJSON('ihome/findAttentionListByUserIdAction.do?userId='+userId,function(data){
			$(getFollowMeHTML("")).appendTo("#id_followMeList");
			$.each(eval(data.json), function(idx,item){
				
			});
		});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
});