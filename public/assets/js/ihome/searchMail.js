$(function(){
	$("#mail_key").focus(function (){
		if($(this).val() == this.defaultValue){
			$(this).val("");
		}	
	}).blur(function(){
		if($(this).val() == ""){
			$(this).val(this.defaultValue);
		}
	});
	$('#b_search').click(function(){
		if($(this).val() != this.defaultValue){
			$('#mail_search').submit();
		}
	});
});