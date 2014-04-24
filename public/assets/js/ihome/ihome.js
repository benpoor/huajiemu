/**
 * 个人主页
 * 2012-02-18
 */
$(document).ready(function(){
	findMyFilmReviewListById();
	findMovieOfRecentlyFilmReviewByUserId();
	
	
	/**
	 * Function 部分
	 * 
	 **/	
	/**
	 * 参数格式如下：
	 *   m.put("content", f.getContent());
		 m.put("id", f.getId());
		 m.put("movieId", f.getMovieId());
		 m.put("remark", f.getRemark());
		 m.put("status", f.getStatus());
		 m.put("time", f.getTime());
		 m.put("title", f.getTitle());
		 m.put("type", f.getType());
		 m.put("userId", f.getUserId());
		 m.put("userName", u.getName());
		 m.put("userImgUrl", u.getImgurl());
		 m.put("movieImgUrl", movieInfo.getImgUrl());
		 m.put("movieName", movieInfo.getName());
		 m.put("replyNum", commontInfoServices.findCommontCountByFilmreviewId(f.getId()));
		 m.put("favorNum", commontInfoServices.findFavorCountByFilmreviewId(f.getId()));
	 * @param {Object} filmReview
	 * @return {TypeName} 
	 */
	function getFilmReviewHTML(filmReview){
		var retVal = "";
		retVal += '<div class="m_s_l">';
		retVal += '<div class="From_Author">';
		retVal += '<a href="#"class="From_pic "><img src="../banner/ps.jpg" /></a>';
		retVal += '<a href="#" class="Author_pic"><img src="../banner/index_39.gif"></a> ';
		retVal += '</div>';
		retVal += '<div class="Critics_List">';
		retVal += '<h3>评 < <a href="#">' + filmReview.movieName + '</a> ></h3>';
		retVal += '<h2><a href="#">倩女幽魂87版</a></h2>';
		retVal += '<p>' + filmReview.content + '...<a href="#">阅读点评</a></p>';
		retVal += '<div class="Comment">';
		retVal += '<ul>';
		retVal += ' <li><img src="../images/icon_line.png" /><a href="#">' + filmReview.userName  + '</a></li>';
		retVal += '<li><img src="../images/icon_reply1.gif"  />' + filmReview.replyNum + '</li>';
		retVal += '<li><img src="../images/icon_love1.gif" />' + filmReview.favorNum + '</li>';
		retVal += '<li><img src="../images/icon_star.gif"  />6.9</li>';
		retVal += '</ul>';
		retVal += '</div>';
		retVal += '</div>';
		retVal += '</div>';
		retVal += '<div class="blank08"></div>';
		return retVal;
	}
	
	function findMyFilmReviewListById(){
		var param = 2;
		$.getJSON('ihome/findMyFilmReviewListByIdAction.do?userId='+param, function(data){
			$.each(eval(data.json),function(idx,item){
				$(getFilmReviewHTML(item)).appendTo("#id_list");
			});
		});
	}
	
	/**
	 * 获取最近评论的影评
	 */
	function findMovieOfRecentlyFilmReviewByUserId(){
		var userId = 1;
		var recentNum = 5;//显示条数
		$.getJSON('ihome/findMovieOfRecentlyFilmReviewByUserIdAction.do?userId=' + userId + '&recentNum=' + recentNum ,function(data){
			$.each(eval(data.json), function(idx, item){
				$(getRecentFilmReviewMovieHTML(item)).appendTo("#id_recentFilmReviewMovie");
			});
		});
	}
	
	/**
	 * 获取最近评论的影评HTML
	 */
	function getRecentFilmReviewMovieHTML(movie){
		var retVal = "";
		retVal += '<li><a href="#">' + movie.name + '</a></li>'
        return retVal;
	}
	
	
	
	
});


