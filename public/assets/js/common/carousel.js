
var MysamplesItems=new Array();

Core.widget.Carousel = (function(){
    var Dom = Core.Dom;
    var Event = Core.Event;
    var Builder = Core.Builder;
    // Download by http://www.codefans.net
    var samplesContainer = Dom.get('carousel_container');
    var samplesList = Dom.get('samples_list');
    var photoContainer = Dom.get('carousel_photo_container');
    var photo = Dom.get('carousel_photo');
    var photoIntro = Dom.get('carousel_photo_intro');
    var BtnLastPhoto = Dom.get('carousel_btn_lastpic');
    var BtnNextPhoto = Dom.get('carousel_btn_nextpic');
    var photoTitle=Dom.get('carousel_photo_title');
	//var ImageSize={width:200,height:400};
	
	
	
	
	
    var samplesItems=new Array();
    var samplesItemsItems = samplesList.getElementsByTagName('a');
	for(var i=0;i<samplesItemsItems.length; i++){
			var samplesItemsItem=samplesItemsItems[i];
			if(samplesItemsItem.getAttribute("name") == "xc_image"){
				samplesItems.push(samplesItemsItem);	
			}
		}
	MysamplesItems=samplesItems;
	/**end **/
	
    var i, len = samplesItems.length;
    var samplesItemWidth = 42;
   // var oneScreenItemsNum = parseInt(samplesContainer.offsetWidth, 10) / samplesItemWidth;//784px
   // var oneScreenItemsNum = parseInt(120, 10) / samplesItemWidth;//784px zcb 修改
   
	//	oneScreenItemsNum = oneScreenItemsNum - 1;
	var oneScreenItemsNum = 3;
	
    var lastIndex = 0;
    var curIndex = Number(document.getElementById("current_no").value);
//    var curIndex = 0;
    var movedGroups = 0;
//    var groups = len < oneScreenItemsNum ? 0 : Math.ceil(len / oneScreenItemsNum) - 1;
    var groups = len < oneScreenItemsNum ? 1 : Math.ceil(len / oneScreenItemsNum);
    //var groups = parseInt(samplesItems.length/6)+(samplesItems.length%6 == 0?0:1);
   // alert(groups);
    var samplesLeft = 0;
    var isVisited = [];
    var samplePhotos = [];
    var imgPath = [];
    var imgAlt = [];
    
    
   
    return {
        init: function(){
			
            var that = this, defaultPhoto = new Image();
            Dom.setStyle(samplesContainer, 'overflow', 'hidden');
            Dom.setStyle(samplesList, 'width', (((len+1) * 42) + 'px'));
            Dom.setStyle(samplesList, 'left', (-(curIndex * 44+7) + 'px'));
            for (i = 0; i < len; i += 1) {
                isVisited[i] = false;
                samplePhotos[i] = samplesItems[i].getElementsByTagName('img')[0];
                imgPath[i] = samplesItems[i].getAttribute('href');
                imgAlt[i] = samplesItems[i].getElementsByTagName('img')[0].getAttribute('alt');
				samplesItems[i].clicked=false;
                Event.addListener(samplesItems[i], 'click', function(index){
                    return function(event){
                        var evt = event || window.event;
                        curIndex = index;
                        that.focusSample();
                        that.chgPhoto();
                        Event.stopEvent(evt);
                    }
                }(i));
            }
            defaultPhoto.src = photo.src;
            this.autoSize.call(defaultPhoto);
            Event.addListener(BtnLastPhoto, 'click', this.lastPhotos);
            Event.addListener(BtnNextPhoto, 'click', this.nextPhotos);
			
				/** zcb *添加一个事件**/
				var zcbImage=document.getElementById("carousel_photo");
				//alert(zcbImage);
			 	Event.addListener(zcbImage, 'click',this.mouseClicks);
				Event.addListener(zcbImage, 'mousemove',this.mouseOvers);
				
				/**创建一个对像，在这个对像中加入一个onclick事件，一但触发，就会向下翻一页**/
				var virDiv = document.createElement("div");
					virDiv.setAttribute('id','vir_div');
					virDiv.style.display = 'none';
				samplesContainer.appendChild(virDiv);
				
				/**var virDiv2 = document.createElement("div");
					virDiv2.setAttribute('id','vir_div2');
					virDiv2.style.display = 'none';
				samplesContainer.appendChild(virDiv2);**/
				
				Event.addListener(virDiv, 'click',this.nextPhotos);
				//Event.addListener(virDiv2, 'click',this.rebackPhotos);
				
				/** end **/
			
        },
        rebackPhotos: function(){//回到第一组(初始化)
        	// var evt = e || window.event;
        	 //alert("dd");
        	Dom.setStyle(samplePhotos[curIndex].parentNode.parentNode, 'background-color', "");
            while(movedGroups) {
				//alert("dd");
             	 movedGroups -= 1;
                 Core.widget.Carousel.move(-oneScreenItemsNum);
            }
           // Event.stopEvent(evt);
        },
        lastPhotos: function(e){
            if (groups) {
				
                var evt = e || window.event;
             	 movedGroups -= 1;
				
                if (movedGroups < 0) {
                    movedGroups = groups;
                    Core.widget.Carousel.move( oneScreenItemsNum* groups);
				   //alert("已是最上一组!");
                }
                else {
                    Core.widget.Carousel.move(-oneScreenItemsNum);
                }
				 
                Event.stopEvent(evt);
            }else{
				alert("只有一组");
			}
        },
        nextPhotos: function(e){
            if (groups) {
				//alert("dd");
                var evt = e || window.event;
             
				 movedGroups += 1;
				
                if (movedGroups > groups) {
                    movedGroups = 0;
                    Core.widget.Carousel.move(-oneScreenItemsNum * groups);
//				   alert("已是最后一组!");
                }
                else {
                    Core.widget.Carousel.move(oneScreenItemsNum);
                }
				
                Event.stopEvent(evt);
            }else{
            	alert("只有一组");
            }
        },
		mouseClicks: function(e){
          /** zcb 添加这个属性 是一个单击事件**/
         	var ev = e || window.event;
         	
         	var eve=mouseCoords(ev,this);
         	
         	var eve=mouseCoords(ev,this);
			//判断是不是焦点是不是在当前组
			var currGropts=parseInt(curIndex/6);
			//获得焦点所在的组，获得当前组
			//alert(curIndex+" "+currGropts+" "+movedGroups);
			var moveG=movedGroups;
			if((curIndex+1)%6 == 1){
			}else{
			
				if(moveG > currGropts){
					//向上移
					for(var i=0;i< moveG-currGropts; i++){
//						onClickEven(BtnLastPhoto);
					}
					
					
				}else if(moveG < currGropts){
					//向下移
					for(var i=0;i< currGropts-moveG; i++){
//						onClickEven(BtnNextPhoto);
					}
					//lastPhotos();
				}
			}
			if(eve.x > this.width/2){
					
					if(curIndex < samplesItems.length-1){
						//samplesItems[curIndex+1].click();
//						onClickEven(samplesItems[curIndex+1]);
						window.location.href=imgPath[curIndex+1];
					}else{
						alert("已经是最后一张了！");
					}
					
			}else{
					//alert("rigth");
					if(curIndex>0){
						//samplesItems[curIndex-1].click();
//						onClickEven(samplesItems[curIndex-1]);
						window.location.href=imgPath[curIndex-1];
					}else{
						alert("已经是第一张了！");
					}
					
			}
			  Event.stopEvent(e);
        },
		mouseOvers: function(e){
           /** zcb 添加这个属性 是一个事件 用来改变鼠标的样式**/
          	//alert(e.offsetX +" "+this.width/2);
          	
          	var ev = e || window.event;
         	
         	var eve=mouseCoords(ev,this);
         	
         	var eve=mouseCoords(ev,this);
         	
			if(eve.x > this.width/2){
					if(curIndex < samplesItems.length-1){
						//设置鼠标样式
						//alert("dd");
						
						this.style.cursor="url("+"images/next.ani"+")";
						this.title="点击跳到下一张";
						//alert(this.style.cursor);
						//alert(this.childNodes[0].id);
					}else{
						//最后一张
						this.style.cursor="pointer";
						this.title="最后一张";
					}
					
			}else{
					//alert("rigth");
					if(curIndex>0){
						//设置鼠标样式
						this.style.cursor="url("+"images/pre.ani"+")";
						this.title="点击跳到上一张";
					}else{
						//第一张
						this.style.cursor="pointer";
						this.title="第一张";
					}
					
			}
			  Event.stopEvent(e);
        },
        move: function(moveSteps){
            var left = 0;
            var sLeft = (samplesItemWidth * moveSteps)  + 7;
            var timer = null;
            var scroll = function(){
                if (timer) {
                    clearTimeout(timer);
                }
                if (sLeft > 0) {
					left += 33.6;
					if (left > sLeft) {
						if (Core.lang.isMoz) {
							samplesLeft += sLeft;
							samplesContainer.scrollLeft = samplesLeft;
						}
						else {
							samplesLeft -= sLeft;
							Dom.setStyle(samplesList, 'left', (samplesLeft + 'px'));
						}
						return false;
					}
					else {
						if (Core.lang.isMoz) {
							samplesContainer.scrollLeft = samplesLeft + left;
						}
						else {
							Dom.setStyle(samplesList, 'left', (samplesLeft - left + 'px'));
						}
					}
				}
                else {
                    left -= 33.6;
                    if (left < sLeft) {
                        if (Core.lang.isMoz) {
                            samplesLeft += sLeft;
                            samplesContainer.scrollLeft = samplesLeft;
                        }
                        else {
                            samplesLeft -= sLeft;
                            Dom.setStyle(samplesList, 'left', (samplesLeft + 'px'));
                        }
                        return false;
                    }
                    else {
                        if (Core.lang.isMoz) {
                            samplesContainer.scrollLeft = samplesLeft + left;
                        }
                        else {
                            Dom.setStyle(samplesList, 'left', (samplesLeft - left + 'px'));
                        }
                    }
                }
                timer = setTimeout(scroll, 5);
            };
            scroll();
        },
        focusSample: function(){
            //Dom.setStyle(samplePhotos[lastIndex], 'opacity', 1);
            //Dom.setStyle(samplePhotos[curIndex], 'opacity', .4);
            
			/**张朝兵 加添 **/
			Dom.setStyle(samplePhotos[lastIndex].parentNode.parentNode, 'background-color',"");
			Dom.setStyle(samplePhotos[curIndex].parentNode.parentNode, 'background-color', "#c5e7fa");
			
			/**添加标题**/
			//photoTitle.innerHTML=samplePhotos[curIndex].alt;
           
			
			
			//alert((curIndex+1)%6);
			//alert(curIndex +" A"+ lastIndex);
			if((curIndex+1)%6 == 1 && (curIndex+1)<samplesItems.length && curIndex>0 && curIndex > lastIndex ){
				//向下移动一组
				//if(curIndex > lastIndex){
				//	samplePhotos[curIndex].clicked=true;
				//}
				
				//BtnNextPhoto.click();
//				onClickEven(BtnNextPhoto);
				
			}else if((curIndex+1)%6 == 1 && (curIndex+1)<samplesItems.length && curIndex>0 && lastIndex > curIndex){
				//向上移动一组
				//if(lastIndex > curIndex){
				//	samplePhotos[curIndex].clicked=false;
				//}
				//BtnLastPhoto.click();
//				onClickEven(BtnLastPhoto);
			}
			 lastIndex = curIndex;
			//alert("dd");
			/** end **/
        },
//        chgPhoto: function(){
//            var that = this;
//            var tempImage = new Image();
//            var shardow = null;
//			
//			 
//            tempImage.src = imgPath[curIndex];
//            if (!isVisited[curIndex]) {
//                photoContainer.appendChild(Builder.Node('div', {
//                    id: 'carousel_photo_shardow'
//                }));
//                shardow = Dom.get('carousel_photo_shardow');
//                shardow.style.height = photoContainer.offsetHeight + 'px';
//                photoContainer.appendChild(Builder.Node('img', {
//                    id: 'carousel_photo_loading',
//                    src: 'images/loading.gif',
//                    alt: 'loading'
//                }));
//                
//            }
//            if (tempImage.complete) {// Mozllia
//                that.loadPhoto.call(tempImage);
//				
//            }
//            else {// IE
//                Event.addListener(tempImage, 'load', function(){
//                    that.loadPhoto.call(tempImage);
//                });
//            }
//			
//			
//        },
//        loadPhoto: function(){
//        	 
//        	 //photo.src="";
//        	 //可出现图片滤镜效果 只能在IE6以上可用
//        	if(document.all){
//        		try{
//	        		photo.filters[0].apply();
//	      			photo.style.visibility = "";
//	    			photo.filters[0].transition = 5;
//	     			photo.filters[0].play();
//     			}catch(e){
//     				photo.style.visibility = "";
//     			}
//        	}else{
//        		photo.style.visibility = "";
//        	}
//        	
//           Core.widget.Carousel.autoSize.call(this);
//           photo.src = imgPath[curIndex];
//           photoIntro.innerHTML = imgAlt[curIndex];
//          // isVisited[curIndex] = true;
//           
//  
//            
//            
//            
//            shardow = Dom.get('carousel_photo_shardow');
//            loadingImg = Dom.get('carousel_photo_loading');
//            if (shardow && loadingImg) {
//                photoContainer.removeChild(shardow);
//                photoContainer.removeChild(loadingImg);
//            }
//        },
        autoSize: function(){
			
				
            var width = this.width;
            var height = this.height;
			/** 添加**/
			//ImageSize.width=width;
			//ImageSize.height=height;
            imgPercent = width / height;
            /**if (width > 800) {
                width = 800;
                height = (width / imgPercent);
            }**/
            //if(height <400){
            	//height=800;
            //}
//            Dom.setStyles(photo, {
//                width: width + 'px',
//                height: height + 'px'
//            });
        }
    }
})();
Core.widget.Carousel.init();
/**zcb 添加 用于兼容IE 和 Firefox**/
function mouseCoords(ev,ob){
	if(ev.offsetX || ev.offsetX){
		return {x:ev.offsetX, y:ev.offsetX};
	}
	return {
		x:ev.clientX - (document.body.clientWidth-ob.width)/2,
		y:ev.clientY - document.body.clientTop-ob.width
	};
}
function onClickEven(ob){
	 if(document.all){
//          ob.click();     
     }         
    else 
    { 
//      var evt = document.createEvent("MouseEvents"); 
//       evt.initEvent("click",true,true); 
//       ob.dispatchEvent(evt); 
     } 
}
/** end **/

