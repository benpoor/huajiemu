/**
 * 添加影片信息
 * by zhangjie
 * 2012-01-27
 */
$(document).ready(function() {
	
	var isSameMovie = false;
	$('#id_time').click(function(){
		WdatePicker({dateFmt:'yyyy'});
	});
	$('#id_releaseTime').click(function(){
		WdatePicker();
	});
	
//	CKEDITOR.replace('id_synopsis');
	
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
            
        },

        onComplete: function(file, response){
            response = response.toLowerCase();
            response = response.replace('<pre>', '').replace('</pre>', '');
            var obj = eval('(' + response + ')');
            flags = true;
//            button.text('上传');
            $('#m_imgurl').attr("src",ulPath+obj.src); 
            $("#mm_imgurl").val(obj.src);
        }
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
	
	//选着了电视
	$("#id_tv").click(function(){
		$("#id_form_addTelevision").submit();
	});
	
	//表单验证
	$('#id_form_addFilmInfo').validate({
		rules : {
			'movieInfo.time' : {
				required : true
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
});






