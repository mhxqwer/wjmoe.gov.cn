/*加入或取消收藏夹*/
function addSC(url,docId,doctitle){
  var auth = getCookie("Authorization");
  var subjectType= getCookie("SubjectType");

  if(!auth){
    var result = confirm("未登录，请先登录！");
    if(result){
      var url=window.location.href;
      window.location.href="https://zwfw.moe.gov.cn/portal/trs/login?appId=trs&redirectUrl=http://www.moe.gov.cn/hd/login/cas&state="+url; 
    } 
  }else{
  /*调用收藏接口，若没有收藏，则加入收藏并点亮星星，若已经收藏，则取消收藏并空心星星*/
    if( $("#favorites").hasClass('yellow')){
      $.ajax({
             url: "http://www.moe.gov.cn/hd/user/unCollect?id="+docId,
        headers: {
          Authorization: auth,
          SubjectType: subjectType
        },
        type: "POST",
        success: function (args) {
          var code= args.code;
          if(code == 200){
            $("#favorites").removeClass("yellow");
            alert("取消收藏成功");
            return;
          }
        }
      });
    }else{
      $.ajax({
        url: "http://www.moe.gov.cn/hd/user/collect",
        headers: {
          Authorization: auth,
          SubjectType: subjectType
        },
        data:{
            url:url,
            id:docId,
            title:doctitle
        },
        type: "POST",
        success: function (args) {
          var code= args.code
          if(code == 200){
            $("#favorites").addClass("yellow");
            alert("收藏成功");
          }
        }
      });
    }
  }
}

/*判断文档是否在收藏夹*/
$(function(){

  //获取单点鉴权
  var auth = getCookie("Authorization");
  //获取单点鉴权
  var subjectType= getCookie("SubjectType");

  if(!auth){

  }else{
    var strDocid= $("meta[name='contentid']").attr("content");  
    $.ajax({
    url: "http://www.moe.gov.cn/hd/user/isCollect?id="+strDocid,
    headers: {
        Authorization: auth,
        SubjectType: subjectType
      },
      type: "GET",
      dataType: "json",
      success: function (args) {
        var data= args.data;
        if(data==1){
          $("#favorites").addClass("yellow");
        }else{
          $("#favorites").removeClass("yellow");
        }
      }
    });
  }
});