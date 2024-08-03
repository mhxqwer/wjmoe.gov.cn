function linkJump(_obj,e){
	e = e || window.event;
	if(e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue = false;
	} 
	var gourl=_obj.attr('href');
	if(gourl){
		tmpurl = gourl.indexOf('://') ==-1 ? gourl : gourl.substring(gourl.indexOf('://')+3);
		godomain = tmpurl.indexOf('/') != -1 ? tmpurl.substring(0,tmpurl.indexOf('/')) : tmpurl;
		godomain = godomain.indexOf(':') == -1 ? godomain : godomain.substring(0,godomain.indexOf(':'));
		var filterUrl = new Array('www.moe.gov.cn','www.moe.edu.cn','hudong.moe.gov.cn','zwfw.moe.gov.cn','rz.moe.gov.cn','m.moe.gov.cn','video.moe.gov.cn','so.moe.gov.cn','..','.','','教育部.政务');
		if($.inArray(godomain,filterUrl) == -1){
			if($('#moe_black').size()>0) $('#moe_black').remove();
			var strlink = '<div id="moe_black"><div id="moe_golink"><p id="golink_close"><img src="https://www.moe.gov.cn/images/moe_goLink_close.png" /></p><div id="golink_info">您访问的链接即将离开<img src="http://www.moe.gov.cn/images/moe_goLink_tb.png" alt="教育部门户网站" /><br />是否继续？</div></div></div>';
			$('body').append(strlink);
			var tm = $('#moe_black');
			var infoBox = $('#moe_golink');
			var closeBtn = $('#golink_close').find('img');
			//var infoTop = ($(window).height()-277)/2;
			var infostr = '<div id="golink_btn"><a href='+gourl+' target="_blank"><img src="https://www.moe.gov.cn/images/moe_goLink_btn.png" alt="继续访问" /></a><strong>取消</strong></div>';
			tm.height($(document).height()).show();
			infoBox.append(infostr).show();
			/*infoBox.append(infostr).css({'top':infoTop}).show();
			
			if (!$.support.leadingWhitespace) {
				infoTop = $(window).scrollTop()+($(window).height()-277)/2;
				infoBox.css({'position':'absolute','top':infoTop})
				$(window).scroll(function(){
					infoTop = $(window).scrollTop()+($(window).height()-277)/2;
					infoBox.css({'position':'absolute','top':infoTop})
				});
			}
			*/

			var goBtn = $('#golink_btn');
			var goLink = goBtn.find('img');
			var CancelBtn = goBtn.find('strong');	
			goLink.click(function(){
				goBtn.remove();
				infoBox.hide();
				tm.hide();
			});		
			closeBtn.click(function(){
				goBtn.remove();
				infoBox.hide();
				tm.hide();
			});
			CancelBtn.click(function(){
				goBtn.remove();
				infoBox.hide();
				tm.hide();
			});		
		}else{
			window.open(gourl);
		}
	}
}

//找错 获取该站点需要纠错页面的url地址
function getCurrUrl() {
	var url = "";
	if (parent !== window) {
		try {
			url = window.top.location.href;
		} catch (e) {
			//url = window.top.document.referrer;
			url = 'www.moe.gov.cn';
		}
	}
	if (url.length == 0)
		url = document.location.href;
	return url;
}

$(function(){
	var link = 'https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=bm05000001&url='+encodeURIComponent(getCurrUrl());
	$('#_span_jiucuo').find('a').attr('href',link);
	$('a.outMoeLink').click(function(event){linkJump($(this),event)});	
});	