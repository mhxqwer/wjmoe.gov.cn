function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

function logout(){
   var url=window.location.href;
   url="https://zwfw.moe.gov.cn/portal/trs/logout?redirectUrl="+url;
   delCookie("Authorization");
   delCookie("SubjectType");
   window.location.href=url;
}

function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
}

$(function () {
  var log = $('#log-btn').find('a');
  var logDo = $('.toLoginRegisterCenter');
  var logArea = $('.moe-cas');
  log.mouseenter(function(){
    logDo.hide().eq($(this).index()).show();
  });
  logArea.mouseleave(function(){logDo.hide()});

  $('#userA').mouseenter(function(){
  $('#userList').show();
  });
  $('.moe-cas').mouseleave(function(){
  $('#userList').hide();
  });

  var loginRe = $('.loginReferer');
  var currentUrl = window.location.href;
  loginRe.each(function(){
    var turl = $(this).attr('href')+currentUrl;
    $(this).attr({'href':turl,'target':'_blank'});
  });

  //获取单点鉴权
  var auth = getCookie("Authorization");
  //获取单点鉴权
  var subjectType= getCookie("SubjectType");
  var userId = "";
  if(!auth){
    //alert("未登录或者登录超时，请重新登录！");
  }else{
    $.ajax({
    url: "http://www.moe.gov.cn/hd/user/getUser",
    headers: {
        Authorization: auth,
        SubjectType: subjectType
    },
    type: "POST",
    dataType: "json",
    success: function (args) {
      var category= args.data.category;
      var displayName= args.data.displayName;
      if(category==14){
        if(displayName.length>4){
          displayName = displayName.substring(0,4)+"...";
        }
      }
      
      var realName = args.data.realName;
      var userName= args.data.userName;
      var idCode= args.data.idCode;
      var mobile= args.data.mobile;
      userId= args.data.userId;
      $("#log-btn").css('display','none'); 
      $(".toLoginRegisterCenter").css('display','none'); 
      $("#user").css('display','block'); 

      var reg = /^[\u3400-\u4db5\u4E00-\u9FA5_]$/;
      var userNameStr=userName;
      if(reg.test(userName.substr(0, 1))){
         if(userName.length>6){
            userNameStr=userName.substr(0, 6)+"*";
         }
      }else{
         userNameStr=userName.substr(0, 10)+"*";   
      }
      $("#userA").attr('href','https://zwfw.moe.gov.cn/personal?activeName=first&tabIndex=0&token='+userId);
      $("#userA").html(displayName);
      $("#user").after('<dl class="toLoginRegisterCenter" id="userList" style="left:auto;right:0;display:none;"><img class="icon-jiantou" ignoreapd=1 src="http://www.moe.gov.cn/images/tmp_pc_cas_icon01.png" style="left: auto;right: 20px;" /></dl>');        
      $("#userList").append("<dd style='border-bottom: 1px solid rgb(94,122,219);'><a href=\"https://zwfw.moe.gov.cn/personal?activeName=first&tabIndex=0&token="+userId+"\">用户中心</a></dd>");
      $("#userList").append("<dd><a href=\"javascript:logout();\">退出</a></dd>");
     
      $("#m_userA").html(displayName);
      $("#m_userA").attr('href','https://zwfw.moe.gov.cn/personal?activeName=first&tabIndex=0&token='+userId);
      $("#m_userA").after("<a href=\"javascript:logout();\">退出</a>");
    },
    error: function () {
         delCookie("Authorization");
         delCookie("SubjectType");
    }
    });
  }
});
