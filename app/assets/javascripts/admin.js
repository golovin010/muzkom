//= require jquery
//= require jquery_ujs
//= require tinymce-jquery
//= require_directory ./plugins

$(document).ready(function(){
  $("#tab-switcher").uiTabs();
  $('.chzn-select').chosen();
  $('.flash_message').delay(300).animate({'top': 0}, 500).delay(2000).fadeOut(500);  
});
  
tinyMCE.init({
  mode : "exact",
  elements : "short-pannel",
  theme : "advanced",
  theme_advanced_toolbar_location : "top",
  theme_advanced_toolbar_align : "left",
  theme_advanced_buttons1 : "bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,link,unlink",
  theme_advanced_buttons2 : "",
  theme_advanced_buttons3 : ""
});

tinyMCE.init({
  mode : "exact",
  elements : "pannel",
  theme : "advanced",
  plugins : "autosave, paste, fullscreen",
  theme_advanced_toolbar_location : "top",
  theme_advanced_toolbar_align : "left",
  theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,forecolor,backcolor",
  theme_advanced_buttons2 : "bullist,numlist,|,link,unlink,|,outdent,indent,blockquote,|,image,cleanup,|,code,fullscreen",
  theme_advanced_buttons3 : "",
});

jQuery.fn.uiTabs = function(){
  var tabs = $(this).find("li:not('.inactive')");
  var current_tab = $(this).find("li#current");
  var containers = $.find("div[id^=tab]");
  $(containers).hide();
  $("#"+$(current_tab).attr("for")).show();
  $(tabs).click(function(){
    $("#"+$(current_tab).attr("for")).hide();
    $("#"+$(this).attr("for")).fadeIn(400);
    $(current_tab).attr("id", "");
    $(this).attr("id", "current")
    current_tab = $(this);
  });
}