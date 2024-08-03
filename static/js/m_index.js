!function setDateFun(){
	var _time=new Date(),_year=_time.getFullYear(),_month=_time.getMonth()+1,_date=_time.getDate(),_work='',_hours=_time.getHours(),_minutes=_time.getMinutes()>=10?_time.getMinutes():'0'+_time.getMinutes();
	switch(_time.getDay()){
		case 0:_work='星期日';break;
		case 1:_work='星期一';break;
		case 2:_work='星期二';break;
		case 3:_work='星期三';break;
		case 4:_work='星期四';break;
		case 5:_work='星期五';break;
		case 6:_work='星期六';break;
	}
	$('#dateFun').html(_year+'年'+_month+'月'+_date+'日 '+_work);
}()


/*小屏顶部导航开始*/
if($('.swiper_container_top_nav').size()>0){

	var mySwiperNav = new Swiper('.swiper_container_top_nav',{
		freeMode : true,
    	freeModeFluid : true,
		calculateHeight : true,
		slidesPerView : 'auto',
		cssWidthAndHeight : true,
	    onFirstInit: function(swiper){
	      holdPosition=0,mySwiperNavTimer=null;
	    },
		onTouchStart:function(swiper){
			holdPosition=0,clearTimeout(mySwiperNavTimer);
		},
		onTouchEnd:function(swiper){
			if(holdPosition!=0){
				$('#m_nav_mask_fun').hide();
				mySwiperNavTimer=setTimeout(function(){$('#m_nav_mask_fun_left').stop().fadeIn();   },1000)
			}else{
				mySwiperNavTimer=setTimeout(function(){$('#m_nav_mask_fun').stop().fadeIn();   },1000)
				$('#m_nav_mask_fun_left').hide();
			}
		},
		onResistanceAfter: function(swiper,pos){
		  holdPosition = pos
	  }
	})

	function topNavFun(){
		if($(window).scrollTop()>
		   ($('.m_tou_date').height()+$('.m_top_logo').height()  )  
		  ){
		  	
			if(!$('.swiper_container_top_nav').hasClass('fixed')){
				$('.swiper_container_top_nav').addClass('fixed');
		    }
		}else if(
			$(window).scrollTop()<=
		   ($('.m_top_logo').height()  )  
		){
			
			if($('.swiper_container_top_nav').hasClass('fixed')){
				$('.swiper_container_top_nav').removeClass('fixed');
		    }
		}
	}
	// topNavFun();
	$(window).scroll(function(){
		topNavFun();
	});

}
/*小屏顶部导航结束*/



if($('.m_chnldesc_tab_btn_sy').size()>0){
	$('.m_chnldesc_tab_btn_sy').children().click(function(e){
		var _this = $(this);
		_this.addClass('cur').siblings().removeClass('cur').parents('.show_part_parents').find('.show_part').eq(_this.index()).show().siblings('.show_part').hide();
	});
}




if($(window).width()>992){
	$('.show_part_parents').each(function(i,e){
		var _index = 0,
			_pc_tab = $(this).find('.pc_tab'),
			_curStyleClass = _pc_tab.attr('data-curclass')
		;
		$(this).find('.show_part').each(function(i1,e1){
			if($(this).is(':visible')){
				_index = i1
			}
		});
		_pc_tab.children().eq(_index).addClass(_curStyleClass).siblings().removeClass(_curStyleClass);

	});
}
if($(window).width()<=992){

	$('.show_part_parents').each(function(i,e){
		var _index = 0,
			_ms_tab = $(this).find('.m_chnldesc_tab_btn_sy')
		;
		$(this).find('.show_part').each(function(i1,e1){
			if($(this).is(':visible')){
				_index = i1
			}
		});
		_ms_tab.children().eq(_index).addClass('cur').siblings().removeClass('cur');
	});
}
$(window).resize(function(){
	if($(window).width()>992){
		$('.show_part_parents').each(function(i,e){
			var _index = 0,
				_pc_tab = $(this).find('.pc_tab'),
				_curStyleClass = _pc_tab.attr('data-curclass')
			;
			$(this).find('.show_part').each(function(i1,e1){
				if($(this).is(':visible')){
					_index = i1
				}
			});
			_pc_tab.children().eq(_index).addClass(_curStyleClass).siblings().removeClass(_curStyleClass);

		});
	}
	if($(window).width()<=992){
	
		$('.show_part_parents').each(function(i,e){
			var _index = 0,
				_ms_tab = $(this).find('.m_chnldesc_tab_btn_sy')
			;
			$(this).find('.show_part').each(function(i1,e1){
				if($(this).is(':visible')){
					_index = i1
				}
			});
			_ms_tab.children().eq(_index).addClass('cur').siblings().removeClass('cur');
		});
	}
});



if($('#returnTopFun').size()>0){
	$(window).scroll(function(){
		if($(window).width()+20<=1200){
			if($(window).scrollTop()>=$(window).height()/2){
				$('#returnTopFun').fadeIn('fast')		
			}else{
				$('#returnTopFun').fadeOut('fast')
			}
		}
	});
	$('#returnTopFun').click(function(){$('body,html').animate({'scrollTop':0}) });
	$(window).resize(function(){
		if($(window).width()+20>1200){
			$('#returnTopFun').attr('style')!=undefined?$('#returnTopFun').attr('style',''):'';
		}else{
			if($(window).scrollTop()>=$(window).height()/2){
				$('#returnTopFun').fadeIn('fast')		
			}else{
				$('#returnTopFun').fadeOut('fast')
			}
		}
	});
}


if($('.gd_A_toggle_fun').size()>0){
	$('.gd_A_toggle_fun').each(function(i,e){
		var _this=$(this),_startindex=_this.attr('data-startindex'),_thisCount=parseInt(_this.attr('data-count'));
		_this.click(function(){
			$(this).toggleClass(function(){
				if(_thisCount%2){
					_this.html('收起');
					_this.attr('data-count',_thisCount++)	
				}else{
					_this.html('更多');
					_this.attr('data-count',_thisCount++)	
				}
				return 'sq'
			}).parent().toggleClass('nonepadding').siblings().slice(_startindex).fadeToggle('fast');

		}).click();
	});
}


if($('.common_tab_btn').size()>0){
	$('.common_tab_btn').each(function(i,e){
		var _this = $(this);
		_this.find('.btn').click(function(){
			$(this).addClass('cur').siblings('.btn').removeClass('cur').end().parents('.common_tab_parents').find('.common_tab_show_part').eq($(this).index()).show().siblings('.common_tab_show_part').hide();
		}).first().click();
	});
}





/*微言教育开始*/

if($('#weibo_show').size()>0){

	!function(){

	var _iframeSrc_1='http://widget.weibo.com/weiboshow/index.php?language=&width=auto&height=300&fansRow=2&ptype=0&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2737798435&verifier=5192ec39&colors=ffffff,ffffff,4b4b4b,567FE6,ffffff&dpc=1',
		_iframeSrc_2='http://widget.weibo.com/weiboshow/index.php?language=&width=auto&height=570&fansRow=2&ptype=0&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2737798435&verifier=5192ec39&colors=ffffff,ffffff,4b4b4b,567FE6,ffffff&dpc=1',
		_iframeO=$('#weibo_show iframe')
	;

	if($(window).width()+20<=1200){
		_iframeO.attr('src',_iframeSrc_2)	
	}else{
		_iframeO.attr('src',_iframeSrc_1)	

	}

	$(window).resize(function(){
		if($(window).width()+20<=1200){
			_iframeO.removeClass('iframeS');
			if(!_iframeO.hasClass('iframeB')){
				_iframeO.attr('src',_iframeSrc_2)	
				_iframeO.addClass('iframeB')
			}
		}else{
			_iframeO.removeClass('iframeB');
			if(!_iframeO.hasClass('iframeS')){
				_iframeO.attr('src',_iframeSrc_1)	
				_iframeO.addClass('iframeS')
			}
		}
	});
	

	}()	

}

/*微言教育结束*/
