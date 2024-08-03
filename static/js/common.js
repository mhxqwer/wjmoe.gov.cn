// var gwdshare = gwdshare || { version: "1.0", udata: "type=tools&amp;uid=GWD-801513", pageFilter: "", jsLoaded: false };
// (function () {
// 	function async_load() {
// 		var s = document.createElement('script');
// 		s.type = 'text/javascript';
// 		s.async = true;
// 		s.src = '//static.gridsumdissector.com/zheng_fen_xiang/scripts/gwdshareasync.min.js';
// 		var x = document.getElementsByTagName('script'), y = x[x.length - 1];
// 		y.parentNode.appendChild(s);
// 	}
// 	if (!gwdshare.jsLoaded) {
// 		if (window.attachEvent) window.attachEvent('onload', async_load);
// 		else window.addEventListener('load', async_load, false);
// 		gwdshare.jsLoaded = true;
// 	}
	
// })();

function pageNum(_nPageCount, _nCurrIndex, _sPageName, _sPageExt){
	var nCurrIndex = _nCurrIndex || 0;
	if(nCurrIndex == 0)
		document.write("<span style='color:#4B4B4B'>1</span>&nbsp;");
	else
		document.write("<a style='font-size:12px;color:#4B4B4B' href=\""+_sPageName+"."+_sPageExt+"\">1</a>&nbsp;");
	
	for(var i=1; i<_nPageCount; i++){
		if(nCurrIndex == i)
			document.write("<span style='color:#4B4B4B'>"+(i+1)+"</span>&nbsp;");
		else
			document.write("<a style='font-size:12px;color:#4B4B4B' href=\""+_sPageName+"_" + i + "."+_sPageExt+"\">"+(i+1)+"</a>&nbsp;");
	}
	return "";
}
		
function createContPageHTML(_nPageCount, _nCurrIndex, _sPageName, _sPageExt,_pageDom){
	if(_nPageCount == null || _nPageCount<=1){
		document.getElementById(_pageDom).style.display='none';
		return;
	}
	
	var nCurrIndex = _nCurrIndex || 0;
	
	if (_nPageCount==2){
		if(nCurrIndex == 0){
			document.write("<span style='color:#4B4B4B'>1</span>&nbsp;<a style='font-size:12px;color:#4B4B4B' href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">2</a>&nbsp;<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">【下一页】</a>&nbsp;");
		}else if (nCurrIndex == 1){
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+ "."+_sPageExt+"\">【上一页】</a>&nbsp;<a style='font-size:12px;color:#4B4B4B' href=\""+_sPageName+ "."+_sPageExt+"\">1</a>&nbsp;<span style='color:#4B4B4B'>2</span>&nbsp;");
		}
	}else{
		if(nCurrIndex == 0){
			document.write(pageNum(_nPageCount, _nCurrIndex, _sPageName, _sPageExt));
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">【下一页】</a>&nbsp;");
		}else if (nCurrIndex == 1){
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"."+_sPageExt+"\">【上一页】</a>&nbsp;");
			document.write(pageNum(_nPageCount, _nCurrIndex, _sPageName, _sPageExt));
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">【下一页】</a>&nbsp;");
		}else if(nCurrIndex == (_nPageCount-1)){
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex-1) + "."+_sPageExt+"\">【上一页】</a>&nbsp;");
			document.write(pageNum(_nPageCount, _nCurrIndex, _sPageName, _sPageExt));
		}else{
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex-1) + "."+_sPageExt+"\">【上一页】</a>&nbsp;");
			document.write(pageNum(_nPageCount, _nCurrIndex, _sPageName, _sPageExt));
			document.write("<a style='font-size:10.5pt;color:#4B4B4B;text-decoration:none;' href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">【下一页】</a>&nbsp;");
		}
	} 
}

$(function(){
	
	// 创建二维码
	if($('#moeCode')[0]){
		var qrcode = new QRCode($('#moeCode')[0], {
			width : 150,
			height : 150
		});
		qrcode.makeCode(window.location.href);
		if(typeof($('#moeCode').find('img')) === 'object'){
			$('#moeCode').append('扫一扫分享本页');
		}		
	}

	
		
	if($('.relnews dd').text()!=''){
		$('.relnews').show();
	}
});