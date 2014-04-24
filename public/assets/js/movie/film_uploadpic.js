var pic_li;
var l_txt;
var fileName;
$(function(){
 
	//	ajax上传文件
	var button = $('#add_pic'), interval;
	new AjaxUpload(button, {
        action: '../ajaxUpload?path=D://',
        name: 'Upload',
        autoSubmit: true,
        responseType: false,
        onChange: function(file, extension){
        },
        onSubmit: function(file, ext){
        	if($('#pic_title').children().length>4){
        		alert('一次最多只能上传5张图片');
        		return false;
        	}
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                alert('文件类型错误');
                // cancel upload
                return false;
            }
            flags = false;
            fileName = file;
            pic_li = $('<li class="uppic"></li>');
            pic_li.append('<span>'+file+'</span>');
            l_txt = $('<span>图片上传中</span>');
            pic_li.append(l_txt);
            $('#pic_title').append(pic_li);
            
            interval = window.setInterval(function(){
                var text = l_txt.text();
                if (text.length < 14){
                	l_txt.text(text + '.');            
                } else {
                	l_txt.text('图片上传中');             
                }
            }, 200);
        },
        onComplete: function(file, response){
            response = response.toLowerCase();
            response = response.replace('<pre>', '').replace('</pre>', '');
            var obj = eval('(' + response + ')');
            flags = true;
            pic_li.empty();
            pic_li.append('<span>'+file+'</span>');
            pic_li.append('<a class="d_pic" href="javascript:void(0)"><img src="'+rsPath+'/images/icon_Delete.gif"  class="r"/></a>');
            
            var c_li = $('<li class="c_li"><img class="w170" src="'+ulPath+obj.src+'"/>'+
            		'<input type="hidden" name="imgPath" value="'+obj.src+'"/><input type="hidden" name="imgName" value="'+fileName+'"/></li>');
            c_li.append('<div class="l">描述:<br/><textarea cols="100" rows="3" name="imgDescription"></textarea></div>');
            $('#pic_content').append(c_li);
            //去掉按钮的只读属性
            $('#b_ok').removeAttr("readonly");
        }
    });
	
	$('.d_pic').live("click",function(){
		
		var li = $(this).parent();
		var i = $('.uppic').index(li);
		
//		$('.uppic').remove('li:eq('+i+')');
//		$('.c_li').remove('li:eq('+i+')');
		$('#pic_title li:eq('+i+')').remove();
		$('#pic_content li:eq('+i+')').remove();
	});
});