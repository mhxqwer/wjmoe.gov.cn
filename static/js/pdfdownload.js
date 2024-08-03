jQuery(function(){
	//pdf下载
	$("#pdfdownload").click(function(){
    var actionUrl="http://www.moe.gov.cn/htmlToPDF/WebPd4MlPDFConvert.jsp";
    var url=window.location.href;
    $("#url").val(encodeURIComponent(url));
    $("#pdfform").attr("action",actionUrl).attr("target","_blank").attr("method","post");
    $("#pdfform").submit();
	})
});