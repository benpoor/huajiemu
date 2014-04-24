/**
 * 个人设置
 * 2012-02-19
 * by zhangjie
 */
$(document).ready(function(){
	
	
	$("#id_login").click(function(){
		insertUser();
	});
	
	/**添加用户信息**/
	function insertUser(){
		var userInfo = getUserInfoJSON();
		$.getJSON('ihome/insertUserAction.do?userInfo='+userInfo,function(data){
			alert(data);
		});
	}
	
	/**
	 * 返回用户信息
	 */
	function getUserInfoJSON(){
		var retVal = "{";
		
		retVal += '"name":';
		retVal += '"' + $("#id_name").val() + '"';
		retVal += ",";
		
		retVal += '"password":';
		retVal += '"111"';
		retVal += ',';
		
		retVal += '"permission":';
		retVal += '"111"';
		retVal += ',';
		
		retVal += '"status":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"email":';
		retVal += '""';
		retVal += ',';
		
		
		retVal += '"iphone":';
		retVal += '""';
		retVal += ',';
		
		retVal += '"sex":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"nickname":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"imgUrl":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"description":';
		retVal += '"1"';
		retVal += ',';
		
		
		retVal += '"city":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"occupation":';
		retVal += '"1"';
		retVal += ',';
		
		retVal += '"link":';
		retVal += '"1"';
		
		retVal += "}";
		return retVal;
	}
});