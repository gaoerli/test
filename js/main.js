"use strict";

$(function() {
  "use strict";
  // 童话开场：在很久很久以前……

  $.fn.tab = function() {
    var $this = $(this);
    $this.click(function(e) {
      e.preventDefault();
      $(this)
        .addClass("active")
        .siblings(".active")
        .removeClass("active");
      var id = $(this).attr("href");
      var mapId = id + "-map-bg";

      initFun(mapId.substr(1, mapId.length));
      // clear;
      $(id)
        .addClass("tab-show")
        .siblings(".tab-show")
        .removeClass("tab-show");
    });
  };

  $(function() {
    $(".tab-box .tab-item").tab();
  });
});
