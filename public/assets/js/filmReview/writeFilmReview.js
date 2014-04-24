$(document).ready(function(){
	var score = 0;
	
	$("#id_div_filmReviewContent").jtextarea();
	if($("#id_filmReviewScore").val().length > 0){
		setScore($("#id_filmReviewScore").val());
		len();
	}
	
	$("#id_div_filmReviewContent").blur(function(){
		len();
	});
	
	
	$("#id_div_filmReviewContent").keyup(function(e){
		var content = $("#id_div_filmReviewContent").val();
//		if(content.length == 0){
//			$("#id_div_filmReviewContent").css("height","20");
//		}
//		if(e.keyCode == '13'){
//			var height = $("#id_div_filmReviewContent").css("height");
//			height = height.split("px");
//			var tmp = height[0] - 0 + 20;
//			$("#id_div_filmReviewContent").css("height", tmp+ "px");
//		}
		len();
	});
	
	/**
	 * 判断影评字数长度
	 */
	function len(){
		if($("#id_div_filmReviewContent").val().length <= 140){
			$("#id_tishi").css("visibility", "visible");
			$("#id_div_score").css("visibility", "hidden");
		}else{
			$("#id_tishi").css("visibility", "hidden");
			$("#id_div_score").css("visibility", "visible");
		}
	}
	
	
	
	$("#id_submit").click(function(){
		var content = ""; 
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_div_filmReviewContent").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_div_filmReviewContent").val().replace(/\n/g,"<br>"); 
		}
		content = tmp;
		//为简评时，标题可以不写
		if(!($("#id_tishi").css("visibility") == "visible")){
			if($("#id_filmReviewTitle").val().length == 0){
				alert("请填写影评标题!");
				return;
			}
			if($("#id_filmReviewTitle").val().length > FILM_REVIEW_TITLE_FONT_NUM){
				alert("影评标题过长!");
				return;
			}
			
		}
		
		if(content.length == 0){
			alert("请填写影评内容！");
			return;
		}
		if(content.length <= 140){
			$("#id_filmReviewType").val(2);	
		}else{
			$("#id_filmReviewType").val(1);
			if(score == 0){
				alert("请给电影评分!");
				return;
			}
		}
//		alert(score);
		$("#id_filmReviewScore").val(score);
		$("#id_movieInfoScore").val(score);
		$("#id_filmReviewContent").val(content);
		$("#id_form_writeFilmReview").submit();
	});
	
	
	
	$(".jqImg").bind("click",function(){
//		alert(score);
//		score = $(this).attr("title");
//		$("#id_displayScore").html(score+"分");
//		alert(score);
		
		setScore($(this).attr("title"));
	});
	
//	$(".jqImg").bind("mouseover",function(){
//		setScore($(this).attr("title"));
//	});
	
	function setScore(ascore){
		score = ascore;
		$("#id_displayScore").html(score+"分");
		var tmp = "";
		if(score <=2 ){
			tmp = "很差";
		}else if( 3 <= score && score <=4){
			tmp = "较差";
		}else if(5 <= score && score  <= 6){
			tmp = "还行";
		}else if(7 <= score && score  <= 8){
			tmp = "推荐";
		}else if(9 <= score && score  <= 10){
			tmp = "力荐";
		}
//		$("#id_nominate").css("visibility", "visible");
		$("#id_nominate").html(tmp);
		starLight(score);
	}
	
	/**
	 * 根据分数计算星星多少亮
	 */
	function starLight(score){
		var star2 = rsPath + "/images/icon_star2.gif";
		var star = rsPath + "/images/st.gif";
		for(var i = 1; i < 11; i++){
			if(i <=  score){
				$("#id_star_" + i + "").attr("src",star);
			}else{
				$("#id_star_" + i + "").attr("src",star2);
			}
		}
	}
	
});