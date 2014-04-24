/**
 * 添加电视连续剧信息
 */
$(document).ready(function() {
	$('#m_type').leanModal({ top: 100, closeButton: ".modal_close", okButton: "#type_ok"});
	$('#m_language').leanModal({ top: 100, closeButton: ".modal_close", okButton: "#language_ok"});
	$('#m_area').leanModal({ top: 100, closeButton: ".modal_close", okButton: "#area_ok"});
	
	var isSameMovie = false;
	$('#id_time').click(function(){
		WdatePicker({dateFmt:'yyyy'});
	});
	$('#id_releaseTime').click(function(){
		WdatePicker();
	});
	//上传图片
	var button = $('#add_image'), interval;
	new AjaxUpload(button, {
        action: '../ajaxUpload?path=D://',
        name: 'Upload',
        autoSubmit: true,
        responseType: false,
        onChange: function(file, extension){
        },
        onSubmit: function(file, ext){
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                alert('文件类型错误');
                // cancel upload
                return false;
            }
            flags = false;
            
            button.text('文件上传中');
            
            interval = window.setInterval(function(){
                var text = button.text();
                if (text.length < 14){
                    button.text(text + '.');                    
                } else {
                    button.text('文件上传中');             
                }
            }, 200);
        },
        onComplete: function(file, response){
            response = response.toLowerCase();
            response = response.replace('<pre>', '').replace('</pre>', '');
            var obj = eval('(' + response + ')');
            flags = true;
            button.text('上传');
            $('#m_imgurl').attr("src",obj.src); 
            $("#mm_imgurl").val(obj.src);
        }
	});
	//切换到添加电影
	$("#id_movie").click(function(){
		$("#id_form_addFilm").submit();
	});
	
	$("#id_submit").click(function(){
//		if(isNull())return;
		if(isSameMovie)return;
		if(!$('#id_form_addFilmInfo').valid())
			return false;
		if($("#id_synopsis").val().length > 500){
			alert("剧情字数过长!");
			return;
		}
		var tmp = "";
		if($.browser.msie){//ie浏览器
			tmp =$("#id_synopsis").val().replace(/\r\n/g,"<br>"); 
		}else{
			tmp =$("#id_synopsis").val().replace(/\n/g,"<br>"); 
		}
		$("#id_input_synopsis").val(tmp);
		
		$("#id_type").val($("#id_select_type").val());
		$("#id_language").val($("#id_select_language").val());
		$("#id_area").val($("#id_select_area").val());
//		$("#id_time").val($("#id_select_time").val());
		$("#id_form_addFilmInfo").submit();
	});
	
	/**
	 * 计算已经输入多少字
	 */
	$("#id_synopsis").keyup(function(){
		var len = $("#id_synopsis").val().length;
		$("#id_synopsisFontNum").html("" + len + "/500字");
	});
	
	/**
	 * 电影名验证  判断是否已经有了相同的名称
	 */
	$("#id_name").blur(function(){
		var movieName = $(this).val();
		$.getJSON(path + '/movie/isSameMovieName?movieName='+movieName,function(data) {
			if(data.json == "true"){
				$("#id_nameTip").css("visibility","visible");	
				isSameMovie = true;
			}else{
				$("#id_nameTip").css("visibility","hidden;");
				isSameMovie = false;
			}
			
		});
	});
	
	
	//表单验证
	$('#id_form_addFilmInfo').validate({
		rules : {
			'movieInfo.time' : {
				required : true,
			},
			'movieInfo.name' :{
				required : true
			},
			'movieInfo.area' : {
				required : true
			},
		}
	});
	
	/*-----------函数部分--------------*/
	
		/**
	 * 判断是否有空值
	 * 如果有空值 返回 0，否则返回 1
	 */
	function isNull()
	{
		var retVal = false;
		switch(0)
		{
			case $("#id_name").val().length:
				alert("原名不能为空!");
				retVal = true;
				break;
			case $("#id_simplifiedChineseName").val().length:
				alert("简体中文不能为空!");
				retVal = true;
				break;
			case $("#id_nickName").val().length:
				alert("又名不能为空!");
				retVal = true;
				break;
			case $("#id_imdb").val().length:
				alert("IMDB编码不能为空!");
				retVal = true;
				break;
			case $("#id_director").val().length:
				alert("导演不能为空!");
				retVal = true;
				break;
			case $("#id_screenWriter").val().length:
				alert("编辑不能为空!");
				retVal = true;
				break;
			case $("#id_cast").val().length:
				alert("主演不能为空!");
				retVal = true;
				break;
			case $("#id_select_type").val().length:
				alert("类型不能为空!");
				retVal = true;
				break;
			case $("#id_select_language").val().length:
				alert("语言不能为空!");
				retVal = true;
				break;
			case $("#id_select_area").val().length:
				alert("制片国家/地区不能为空!");
				retVal = true;
				break;
			case $("#id_select_time").val().length:
				alert("年份不能空!");
				retVal = true;
				break;
			case $("#id_releaseTime").val().length:
				alert("首播时间不能为空!");
				retVal = true;
				break;
			case $("#id_movieNumber").val().length:
				alert("集数不能为空!");
				retVal = true;
				break;
			case $("#id_movieLength").val().length:
				alert("单集片长不能为空!");
				retVal = true;
				break;
			case $("#id_officialWebsite").val().length:
				alert("官网不能为空!");
				retVal = true;
				break;
			case $("#id_synopsis").val().length:
				alert("剧情简介不能为空!");
				retVal = true;
				break;
		}
		
		return retVal;
	}
	
	
	//电影分类
	var sel_type=[];
	$('.ck_type').click(function(){
		if($(this).attr('checked') == "checked"){
			sel_type.push($(this).val());
		}else{
			var pi = $.inArray($(this).val(),sel_type);
			sel_type = $.grep(sel_type,function(n,i){
				return i==pi;
			},true);
		}
	});
	$('#type_ok').click(function(){
		if(sel_type.length>0){
			$('#m_type').val((sel_type.toString()).replace(/,/g, '|'));
		}
	});
	//电影语言
	var sel_language=[];
	$('.ck_language').click(function(){
		if($(this).attr('checked') == "checked"){
			sel_language.push($(this).val());
		}else{
			var pi = $.inArray($(this).val(),sel_language);
			sel_language = $.grep(sel_language,function(n,i){
				return i==pi;
			},true);
		}
	});
	$('#language_ok').click(function(){
		if(sel_language.length>0){
			$('#m_language').val((sel_language.toString()).replace(/,/g, '|'));
		}
	});
	//电影区域
	var sel_area=[];
	$('.ck_area').click(function(){
		if($(this).attr('checked') == "checked"){
			sel_area.push($(this).val());
		}else{
			var pi = $.inArray($(this).val(),sel_area);
			sel_area = $.grep(sel_area,function(n,i){
				return i==pi;
			},true);
		}
	});
	$('#area_ok').click(function(){
		if(sel_area.length>0){
			$('#m_area').val((sel_area.toString()).replace(/,/g, '|'));
		}
	});
});