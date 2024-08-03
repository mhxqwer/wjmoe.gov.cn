function checkInput(){

  var keywords = searchform.qt.value.trim();
  if(keywords==null || keywords==""){
    window.open("https://so.moe.gov.cn");
    //alert("请输入搜索条件");
    return false;
  }
  else{
    return true;
  }
}


$(function(){
  var lang = $('#language');
  var langlist = $('#moe_index_en').find('dl');
  lang.click(function(){
    if(langlist.css('display')== 'block'){
      langlist.slideUp();
      lang.css('background-position','right  -20px');
    }else{
      langlist.slideDown();
      lang.css('background-position','right  5px');
    }
  });
  $('#moe_index_en').mouseleave(function(){
    langlist.hide();
    lang.css('background-position','right  -20px');
  });
  var mLang = $('#mLanguage');
  var mLanglist = $('#m_english').find('dl');
  mLang.click(function(){
    if(mLanglist.css('display')== 'block'){
      mLanglist.slideUp();
      mLang.css('background-position','right  -10px');
    }else{
      mLanglist.slideDown();
      lang.css('background-position','right 15px');
    }
  });
  $('#m_english').mouseleave(function(){
    mLanglist.hide();
    mLang.css('background-position','right  -10px');
  });
});