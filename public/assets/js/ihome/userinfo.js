var city;
var provid;
var parentId;
var slect_occup;
$(function(){
	$('#cityOpen').leanModal({ top: 100, closeButton: ".modal_close", okButton: "#city_ok"});
	
	/**
	 * 城市弹出框
	 */
	//热门城市
	$('#tab_hot_city').click(function(){
		$('#hot_city').removeAttr("style");
		$('#all_provid').attr("style","display: none;");
		$('#provid_city').empty();
	});
	//全部
	$('#tab_all_provid').click(function(){
		$('#hot_city').attr("style","display: none;");
		$('#all_provid').removeAttr("style");
	});
	//热门城市绑定点击事件
	$('.h_c').live("click",function(){
		city = null;
		city = $(this).html();
	});
	//省绑定点击事件
	$('.a_p').live("click",function(){
		city = null;
		provid = $(this).next().val();
		
		$.ajax({
			 type: "POST",
			 dataType: "json",
			 url: path+"/getCityByProvid",
			 data: "provid="+provid,
			 success: function(data){
			     $('#provid_city').empty();
			     var citys = "";
			     $.each(data,function(i,item){
			    	 citys += '<a href="#" class="h_c">'+item.name+'</a>&nbsp;&nbsp;';
			     });
			     $('#provid_city').append(citys);
			 }
		});
	});
	//确认
	$('#city_ok').click(function(){
		if(city != null){
			$('#u_city').val(city);
			$('#l_city').empty();
			$('#l_city').append(city);
		}
		
	});
	
});