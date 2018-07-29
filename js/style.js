function orient() {
  if (window.orientation == 90 || window.orientation == -90) {
    //ipad、iphone豎屏；Andriod橫屏
    $("body").attr("class", "index-body landscape");
    orientation = 'landscape';
    return false;
  }
  else if (window.orientation == 0 || window.orientation == 180) {
    //ipad、iphone橫屏；Andriod豎屏
    $("body").attr("class", "index-body portrait");
    orientation = 'portrait';
    return false;
  }
}
//頁面加載時調用
$(function () {
  orient();
});
//用戶變化屏幕方向時調用
$(window).bind('orientationchange', function (e) {
  orient();
});
