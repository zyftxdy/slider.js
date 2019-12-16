/*
 * SliderWidth:外层盒子的宽度
 * SliderHeight:外层盒子的高度
 * width:手风琴效果实现后其余li的宽度
 * */
(function($){
	
	$.fn.silder = function(options){
	
	//默认参数
	var defaults = {
		SliderWidth:800,
		SliderHeight:350,
		width:50
	}
	
	var objs = $.extend({},defaults,options);	
	
	var $li = this.find('li');
	
	//设置Slider的宽度
	this.css({'width':objs.SliderWidth+'px','height':objs.SliderHeight+'px'});
	
	//设置ul的宽度
	this.find('ul').css('width',(objs.SliderWidth+10)+'px');
		
	var maxWidth = objs.SliderWidth - ($li.length - 1)*objs.width;
	var avgWidth = Math.floor(objs.SliderWidth/$li.length);
		
	$li.each(function(){
		//设置li的宽度
		$(this).css('width',avgWidth+'px');
		//覆盖事件
		$li.on('mouseenter',function(){
			$(this).stop().animate({"width":''+maxWidth+'px',"opacity":1},700)
			.siblings().stop().animate({"width":''+objs.width+'px',"opacity":0.75},700);
			if($(this).find('.slide').children('.slideText')){
				$(this).find('.slide').children('.slideText').stop().animate({"bottom":'0px'},1000);
			}
						
		})
		//离开事件
		$li.on('mouseleave',function(){
			$li.stop().animate({"width":''+avgWidth+'px',"opacity":1},700);
			if($li.find('.slide').children('.slideText')){
				$li.find('.slide').children('.slideText').stop().animate({"bottom":'-200px'},700);
			}
		})
	})
	
	return this;
}	
})(jQuery)

