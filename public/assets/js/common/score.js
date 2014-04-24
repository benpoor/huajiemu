scale=function (btn,bar,title,b_title){
	this.btn=document.getElementById(btn);
	this.bar=document.getElementById(bar);
	this.title=document.getElementById(title);
	this.b_title=document.getElementById(b_title);
	this.step=this.bar.getElementsByTagName("DIV")[0];
	this.init();
};
scale.prototype={
	init:function (){
		var f=this,g=document,b=window,m=Math;
		f.btn.onmousedown=function (e){
			var x=(e||b.event).clientX;
			var l=this.offsetLeft;
			var max=f.bar.offsetWidth-this.offsetWidth;
			g.onmousemove=function (e){
				var thisX=(e||b.event).clientX;
				var to=m.min(max,m.max(-2,l+(thisX-x)));
				f.btn.style.left=to+'px';
				f.ondrag(m.round(m.max(0,to/max)*100),to);
				b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
			};
			g.onmouseup=new Function('this.onmousemove=null');
		};
		f.bar.onclick=function (e){
			var to =(e||b.event).clientX;
			var x = getElementAbsPos(f.bar);
			max =f.bar.offsetWidth;
			var l = to-x;
			
			f.ondrag(m.round(m.max(0,l/max)*100),l);
			f.btn.style.left=l+'px';
		};
	},
	ondrag:function (pos,x){
		this.step.style.width=Math.max(0,x)+'px';
		this.title.innerHTML=pos/10+'分';
		var tmp;
		if( pos <=0 ){
			tmp = "评分";
		}
		if(1 <= pos && pos <=20 ){
			tmp = "很差";
		}else if( 21 <= pos && pos <=40){
			tmp = "较差";
		}else if(41 <= pos && pos  <= 60){
			tmp = "还行";
		}else if(61 <= pos && pos  <= 80){
			tmp = "推荐";
		}else if(81 <= pos && pos  <= 100){
			tmp = "力荐";
		}
		this.b_title.innerHTML=tmp;
	}
};
function getElementAbsPos(e)   
{   
    var l = e.offsetLeft;  
    while(e = e.offsetParent)  
    {  
    	l += e.offsetLeft;  
    }  
  
    return l;  
} 
new scale('btn','bar','title','b_title');

