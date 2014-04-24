/**
    图片裁剪过程中调用方法
**/
function preview(img, selection){
	  var scaleX = 48 / (selection.width || 1);
	  var scaleY = 48 / (selection.height || 1);

	  $('#m_icon + div > img').css({
	    width: Math.round(scaleX * img.width) + 'px',
	    height: Math.round(scaleY * img.height) + 'px',
	    marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
	    marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
	  });
	}
/**
图片裁剪完调用方法
**/
function getCss(img, selection){
	
var str="{'x1':"+selection.x1+","+
    "'x2':"+selection.x2+","+
    "'y1':"+selection.y1+","+
    "'y2':"+selection.y2+","+
    "'width':"+selection.width+","+
    "'height':"+selection.height+"}";
//    alert(str);
	$('#u_imgSelect').val(str);
}
$(function(){
//	ajax上传文件
	var button = $('#add_pic'), interval;
	new AjaxUpload(button, {
        action: '../ajaxUpload?imgType=1&path=D://',
        name: 'Upload',
        autoSubmit: true,
        responseType: false,
        onChange: function(file, extension){
        },
        onSubmit: function(file, ext){
            if (!(ext && /^(jpg|png|jpeg|gif|bmp)$/.test(ext))) {
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
            if($('#u_imgUrl').val()!=""){
            	$('#b_icon').empty();
            	$(".imgareaselect-selection").parent().remove();
            	$(".imgareaselect-outer").remove();
                $('#m_icon').next().empty();
            }
//            if($('#u_imgUrl').val()==""){
//            	 $('#b_icon').append('<img id="ferret" src="'+ulPath+obj.src+'" style="margin:10px;float:left">');
//            	 $('#ferret').imgAreaSelect({ x1: 0, y1: 0, x2: 100, y2: 100,maxWidth: 160, maxHeight: 160,aspectRatio:'1:1',handles: true,
//            		 onSelectChange: preview ,onSelectBegin : preview,onSelectEnd: getCss,noNewSelect : "true"
//           		});
//            }else{
//            	
//            	$('#ferret').attr("src",ulPath+obj.src);
//            }
            $('#u_imgUrl').val(obj.src);
            $('#b_icon').append('<img id="ferret" src="'+ulPath+obj.src+'" style="margin:10px;float:left">');
            $('#ferret').imgAreaSelect({ x1: 0, y1: 0, x2: 100, y2: 100,maxWidth: 160, maxHeight: 160,aspectRatio:'1:1',handles: true,
            	onSelectChange: preview ,onSelectBegin : preview,onSelectEnd: getCss,noNewSelect : "true"
        	});
            $('<div><img src="'+ulPath+obj.src+'" style="position: relative;" /></div>')
    	    .css({
    	      float: 'left',
    	      position: 'relative',
    	      overflow: 'hidden',
    	      width: '48px',
    	      height: '48px'
    	    })
    	    .insertAfter($('#m_icon'));
        }
    });
	if($('#u_imgUrl').val()!=""){
		
		var imgx1=0;
		var imgx2=0;
		var imgy1=100;
		var imgy2=100;
		var imgminWidth=100;
		var imgminHeight=100;
		if($('#u_imgSelect').val()!=''){
			var imgSelect = eval('(' + $('#u_imgSelect').val() + ')');
			imgx1 = imgSelect.x1;
			imgx2 = imgSelect.x2;
			imgy1 = imgSelect.y1;
			imgy2 = imgSelect.y2;
			imgminWidth = imgSelect.width;
			imgminHeight = imgSelect.height;
		}
		$('#ferret').imgAreaSelect({ x1: imgx1, y1: imgy1, x2: imgx2, y2: imgy2,
			maxWidth: 160, maxHeight: 160,aspectRatio:'1:1',handles: true,
	    onSelectChange: preview ,onSelectBegin : preview,onSelectEnd: getCss
		});
		$('<div><img src="'+$('#ferret').attr('src')+'" style="position: relative;" /></div>')
	    .css({
	      float: 'left',
	      position: 'relative',
	      overflow: 'hidden',
	      width: '48px',
	      height: '48px'
	    })
	    .insertAfter($('#m_icon'));
	}
	
	/**
	 * 提交操作
	 */
	$('#b_mpic').click(function(){
		$('#icon_form').submit();
	});
	$('#b_cpic').click(function(){
		$('#icon_form').attr("action","toUserSet");
		$('#icon_form').submit();
	});
});