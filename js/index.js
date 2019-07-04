"use strict";

// 初始化地图
var initFun = function initFun(id) {
  // 百度地图API功能
  var map = new BMap.Map(id, { enableMapClick: false });

  // 坐标点假数据
  var poingList = [
    {
      log: "116.630822",
      lat: "29.874315",
      name: "京B666666",
      velo: "车速",
      cartype: "1",
      youhao: "油耗",
      rlc: "日里程",
      ylc: "月里程",
      flag: "1"
    },
    {
      log: "116.630822",
      lat: "29.920904",
      name: "车牌号",
      velo: "车速",
      cartype: "3",
      youhao: "油耗",
      rlc: "日里程",
      ylc: "月里程",
      flag: "1"
    }
  ];

  // 自定义五个型号车辆图标
  var companyIcon1 = new BMap.Icon(
    "../images/car01-1.png",
    new BMap.Size(40, 32)
  );
  var companyIcon2 = new BMap.Icon(
    "../images/car01-2.png",
    new BMap.Size(40, 32)
  );
  var companyIcon3 = new BMap.Icon(
    "../images/car01-3.png",
    new BMap.Size(40, 32)
  );
  var companyIcon4 = new BMap.Icon(
    "../images/car01-4.png",
    new BMap.Size(40, 32)
  );
  var companyIcon5 = new BMap.Icon(
    "../images/car01-5.png",
    new BMap.Size(40, 32)
  );

  // 定位到城市
  var poi = new BMap.Point(116.571354, 29.883272);
  map.centerAndZoom(poi, 14);

  // 左上角，添加默认缩放平移控件
  var top_left_navigation = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT
  });
  map.addControl(top_left_navigation);

  //启用滚轮放大缩小
  map.enableScrollWheelZoom();

  // 循环点
  $.each(poingList, function(i, v) {
    console.log("i :", v);
    var itempoi = new BMap.Point(Number(v.log), Number(v.lat));
    var itemmarker = addMarker(itempoi, v.cartype);
    var flag = v.flag == "0" ? "启动" : "停止";
    var txt =
      "<div class='txt'><span class='txt-left'>车牌号:</span>" +
      v.name +
      " </div>" +
      "<div class='txt'><span class='txt-left'>车速:</span>" +
      v.velo +
      " </div>" +
      "<div class='txt'><span class='txt-left'>车子状态:</span>" +
      flag +
      " </div>" +
      "<div class='txt'><span class='txt-left'>油耗:</span>" +
      v.youhao +
      " </div>" +
      "<div class='txt'><span class='txt-left'>日里程:</span>" +
      v.rlc +
      " </div>" +
      "<div class='txt'><span class='txt-left'>月里程:</span>" +
      v.ylc +
      " </div>" +
      "<div class='txt-btn'><a class='txt-left'>轨迹回放</a></div>";
    addInfo(txt, itemmarker);
  });

  // 添加自定义图标
  function addInfo(txt, marker) {
    var infoWindow = new BMap.InfoWindow(txt);
    marker.addEventListener("click", function() {
      this.openInfoWindow(infoWindow);
    });
  }

  /**
   * 添加地标
   * @param {object} poi
   */
  function addMarker(poi, cartype) {
    var icon;

    switch (cartype) {
      case "1":
        icon = companyIcon1;
        break;
      case "2":
        icon = companyIcon2;
        break;
      case "3":
        icon = companyIcon3;
        break;
      case "4":
        icon = companyIcon4;
        break;
      case "5":
        icon = companyIcon5;
        break;
      default:
        break;
    }

    if (icon) {
      var marker = new BMap.Marker(poi, { icon: icon }); //创建
      // marker.enableDragging(); //marker可拖拽
      map.addOverlay(marker); //在地图中添加marker
      return marker;
    }
  }
};

initFun("cq-map-bg");
