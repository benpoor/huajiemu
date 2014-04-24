$(document).ready(function(){
//	$(getHotFilmReviewHTML()).appendTo("#id_hotFilmReview");	
//	$(getReplyContentHTML()).appendTo("#id_replyAll");
//	
//	$(getMoreHTML()).appendTo("#id_hotFilmReview");
//	$(getReplyMoreHTML()).appendTo("#id_replyAll");
//	$(getMoiveInfoHTML()).appendTo("#id_movieInfo");
	
	
	/*---
	-------------------------------函数-------------
	--*/
	
	/**
	 * 根据电影id查找电影影评
	 */
	function findFilmReviewListByMovieId(){
		var params = "movieId="+1;
		$.getJSON('movie/findFilmReviewListByMovieIdAction.do?'+params,function(data){
			$.each(eval(data.json),function(idx,item){
				if(item.type == "1"){
					$(getHotFilmReviewHTML()).appendTo("#id_hotFilmReview");
				}else if(item.type == "2"){
					$(getReplyContentHTML()).appendTo("#id_replyAll");
					
				}
				
			});
		});
	}
	
	/**
	 * 根据电影id查找电影信息
	 */
	function findMovieInfoById(){
		var params = "movieId=" + 1;
		var movieImages = new Array();
		$.getJSON('movie/findMovieImagesListByMovieId.do?'+params, function(data){
			$.each(eval(data.json), function(idx,item){
				movieImages.push(item.path);
			});
		});
		
		$.getJSON('movie/findMovieInfoById.do?'+params,function(data){
			var movieInfo = $.parseJSON(data.json);
			$(getMoiveInfoHTML(movieInfo,movieImages)).appendTo("#id_movieInfo");
		});
	}
	
	/**
	 * 获得热评内容HTML
	 */
	function getHotFilmReviewHTML(filmReview)
	{
		var retVal = '<div class="m_s_l">' +
		                  '<div class="Author_pic"><a href="#" >' +
		                  	'<img src="../banner/index_39.gif"></a>' +                    
		                  '</div>' +
		              	  '<div class="Critics_List">' +
		               		  '<h2><a href="#">倩女幽魂87版</a></h2>' +
		                      	  '<p>以时间为坐标，2011年的《阳光姐妹淘》跟2001年的《朋友》形成了有趣的互文。无论故事发生在首尔还是釜山，二三十年的人生跨度，命运各不相同的朋友们，它们恰好构成了一组“韩国往事”。从推翻独裁到国民的自我认同，从经济腾飞到废除电影审查，在这期间，韩国发生了翻天覆地的变化，两部影片...<a href="#">阅读点评</a>' +
			                  	  '</p>' +
		                         '<div class="Comment">' +
		                          '<ul>'
			                          '<li><img src="../images/icon_line.png" /><a href="#">我是流氓</a></li>' +
			                          '<li><img src="../images/icon_reply1.gif"  />25</li>' +
			                          '<li><img src="../images/icon_love1.gif" />25</li>' +
			                          '<li><img src="../images/icon_star.gif"  />6.9</li>' +
		                          '</ul>' +
			                  '</div>' +
		                   '</div>' +
	                  '</div>' +
	                  '<div class="blank01"></div>';
	   return retVal;
	}
	
	/**
	 * 获取更多HTML
	 */
	function getMoreHTML()
	{
		var retVal = '<div class="m_s_l">' +
	                      '<div class="Author_pic"></div>' +
	                      '<div class="Critics_List">' +
	                        '<p><a href="#"  style="margin-left:30px;">更多影评</a> </p>' +
	                      '</div>' +
	                    '</div>';
		return retVal;
	}
	
	/**
	 * 回应评论
	 */
	function getReplyContentHTML()
	{
		var retVal =  '<div  class="reply_text">' +
	                  '<div class="reply_pic ">' +
	                  '<a href="#" ><img src="../banner/psh.jpg" /></a></div>' +
	                '<div class="reply_t">' +
	                      '<p>中华美食的最高境界不是满汉全席，而是熬得一手好汤。煲汤是门很深邃的学问，熬的好的高汤不用添加任何原料，且汤汁清透。这锅甜品，已经熬了3个半小时了</p>' +
	                    '<div class="reply_note">' +
	                          '<ul>' +
	                          '<li><img src="../images/icon_line.png" /><a href="#">我是流氓</a></li>' +
	                          '<li><img src="../images/icon_love1.gif" />25</li>' +
	                          '<li>2011.12.3/13:34</li>' +
	                      '</ul>' +
	                           '</div>' +
	                      '</div>' +
	                  '</div>' +
	                      '<div class="blank07"></div>';
		return retVal;
	}
	
	/**
	 * 回应更多
	 */
	function getReplyMoreHTML()
	{
		var retVal = '<div class="Critics_List">' +
	                    '<p><a href="#"  style="margin-left:30px;">更多简评</a> </p>' +
	        		 '</div>';
	    return retVal;    
	}
	
	
	function getMoiveInfoHTML()
	{
		var retVal = "";
		retVal += "<div class='column_title'>< <a href='#' > movieInfo.name </a>></div>";
		retVal += '<div class="From_pic From_border"><a><img src="../banner/ps.jpg" /></a></div>';
		retVal += '<div class="Critics_btn From_border">';
		retVal += '<a ><img onclick="loveFilm()" style="cursor: pointer;"  src="../images/bnt_loveFilm.gif"/></a>';
		retVal += '<a><img onclick="writeFilmView()" style="cursor: pointer;" src="../images/btn_Write_Critics2.gif"/></a>';
		retVal += '</div>';
		retVal += '<div class="from_info From_border">           2011.12.14 英国<br />';
		retVal += ' movieInfo.director  导演<br />';
		retVal += '主演： movieInfo.cast  <br />';
		retVal += 'yo-rin Mi /陈熙京<br />';
		retVal += '评分：6.8<br />';
		retVal += '别名：  movieInfo.nickName  />';
	    retVal += '光速 / Speed Angels<br />';                     
	    retVal += '标签：<br />';  
	    retVal += '</div>';
	    retVal += '<div class="from_tite"><h2>剧照<a href="#"> 233 </a>张</h2></div>';
	    retVal += '<div class="Stills_pic1 From_border">';
    	retVal += '<a href="#"  ><img src="../banner/index_43.gif"/></a>';
    	retVal += '<a href="#"  ><img src="../banner/index_43.gif"/></a>';
    	retVal += '<a href="#"  ><img src="../banner/index_43.gif"/></a>';
    	retVal += '<a href="#"  ><img src="../banner/index_43.gif"/></a>';
		retVal += '</div>';
		retVal += '<div class="Stills_bnt From_border">';
		retVal += '<a href="#"  ><img src="../images/bnt_addstills.gif"/></a>';
		retVal += '</div>';
	    retVal += '<div class="from_tite"><h2>剧情</h2></div>';
	    retVal += '<div class="from_info From_border"> movieInfo.synopsis ...<a href="#"  >展开</a><br />';
	    retVal += '</div>';  
	
	    return retVal;                 
	}
	
	/**
	 * 展开电影剧情
	 */
	$("#id_openSynopsis").click(function(){
		$("#id_synopsis").css("display", "none");
		$("#id_synopsis").css("visibility","hidden");
		
		$("#id_synopsisAll").css("display", "block");
		$("#id_synopsisAll").css("visibility","visible");
		
	});
	
	/**
	 * 收起电影剧情
	 */
	$("#id_closeSynopsis").click(function(){
		$("#id_synopsisAll").css("display", "none");
		$("#id_synopsisAll").css("visibility","hidden");
		
		$("#id_synopsis").css("display", "block");
		$("#id_synopsis").css("visibility","visible");
	});
	
	
	
});

/**
 * 喜欢该片
 */
function loveFilm()
{
	alert("喜欢该片");
}

function writeFilmView(){
	alert("写影评");
}




