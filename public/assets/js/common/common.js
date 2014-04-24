/**
 * 公共部分
 */
var ulPath = "http://rs.huajiemu.com/upload";
var rsPath = "http://rs.huajiemu.com/skin";
var path="http://www.huajiemu.com";
//影评标题最长字数
var FILM_REVIEW_TITLE_FONT_NUM = 20;
//var ulPath = "/huajm";
//var rsPath = "/huajm";
//var path="/huajm";
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

//格式化日期
Date.prototype.format = function(format)
{
    var o =
   {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
       "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format))
   format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
    if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 
$(document).ready(function(){
	$("ul.sf-menu").superfish(); 
	
	/**
	 * 搜索
	 */
	$("#btn_m_search").click(function(){
		searchHeader();
	});
	
	$("#id_searchHeader").keydown(function(e){
		if(e.keyCode==13){
			searchHeader();
		}
	});
	
	function searchHeader(){
		var headKeyWord = $("#id_searchHeader").val();
      	//关键字
      	$("#id_hkw").val(headKeyWord);
		$("#from_hsearch").submit();
	}
	
//	$("#id_searchHeader").keydown(function(event){
//			$("#id_searchHeader").autocomplete({
//				serviceUrl: $("#id_common_path").val()+'/autocomplete', // Page for processing autocomplete requests
//		        minChars: 1, // Minimum request length for triggering autocomplete
//		        delimiter: /(,|;)\s*/, // Delimiter for separating requests (a character or regex)
//		        maxHeight: 800, // Maximum height of the suggestion list, in pixels
//		        width: 580, // List width
//		        zIndex: 9999, // List's z-index
//		        deferRequestBy: 300, // Request delay (milliseconds), if you prefer not to send lots of requests while the user is typing. I usually set the delay at 300 ms.
//		        params: { keyWord:$("#id_searchHeader").val()}, // Additional parameters
//		        onSelect: function(data, value){
////		        	alert(data +"--" +value)
//		        	window.location.href = path+"/search/searchFilm?name=" + data + "&headerKeyWordSearch=" + data + "&keyWordSearch=" + data + "";
////		        	window.location.href = path + "/search/searchFilm?key";
//		        }//, // Callback function, triggered if one of the suggested options is selected,
////		        lookup: ['January', 'February', 'March'] // List of suggestions for local autocomplete
//			});
//		
//	});
		$("#id_searchHeader").autocomplete({
			serviceUrl: '/autocomplete', // 请求的url
	        minChars: 1, // 最小的请求长度Minimum request length for triggering autocomplete
	        delimiter: /(,|;)\s*/, // Delimiter for separating requests (a character or regex)
	        maxHeight: 800, // Maximum height of the suggestion list, in pixels
	        width: 580, // List width
	        zIndex: 9999, // List's z-index
	        deferRequestBy: 300, // Request delay (milliseconds), if you prefer not to send lots of requests while the user is typing. I usually set the delay at 300 ms.
	        params: { keyWord:$("#id_searchHeader").val()}, // Additional parameters
	        onSelect: function(data, value){
	        	//value 格式： id-imgUrl
//	        	alert(data +"--" +value)
//	        	alert(value.split("-")[0]);
	        	window.location.href = path+"/movie/movieDetail?movieId=" + value.split("-")[0];
//	        	window.location.href = path+"/search/searchFilm?name=" + data + "&headerKeyWordSearch=" + data + "&keyWordSearch=" + data + "";
//	        	window.location.href = path + "/search/searchFilm?key";
	        }//, // Callback function, triggered if one of the suggested options is selected,
//	        lookup: ['January', 'February', 'March'] // List of suggestions for local autocomplete
		});
	

	
	
	
	
          
            
          
});