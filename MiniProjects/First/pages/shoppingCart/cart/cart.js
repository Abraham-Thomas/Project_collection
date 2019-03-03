const app = getApp();

Page({
  data: {
    emptyHidden: false,
    fullHidden: true
  },
  onLoad() {},

  //跳转到首页
  helpYourself() {
    my.switchTab({
      url: 'pages/index/index' // 跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。注意：路径后不能带参数
    });
  },

  //每次页面显示，请求最新的商品数据
  onShow() {
    var me = this;

    //初始化数据
    me.setData({
      emptyHidden: false,
      fullHidden: true
    });

    //从缓存中拿到购物车数组对象
    var cartItemIdArray = my.getStorageSync({
      key: 'cartItemIdArray', // 缓存数据的key
    }).data;
    //判断cartItemIdArray是否为空,若不为空，则到后台接口查询商品数据
    if(cartItemIdArray != null && cartItemIdArray != undefined) {
      me.setData({
        emptyHidden: true,
        fullHidden: false
      });

      //循环拼接商品ids，1002、1003、1004
      var itemIds = "";
      for (var i=0;i<cartItemIdArray.length;i++){
        var tempId = cartItemIdArray[i].itemId;
        itemIds += tempId + ",";
      }

      //发送网络请求到后端
      my.showNavigationBarLoading();
      my.showLoading({
        content: "疯狂加载中..."
      });
      //请求接口，查询商品详情
      my.httpRequest({
        url: app.serverUrl + '/item/queryItems?itemIds=' + itemIds, // 目标服务器url
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        dataType: 'json',
        success: (res) => {
          console.log(res);
          //获取拿到后端的数据
          var myData = res.data;
          if(myData.status == 200) {
            var itemList = myData.data;
            console.log(itemList);
            //获取封面图的数组字符串，并且转换为json array
            // var headerImagesStr = item.headerImages;
            // var headerImagesArr = JSON.parse(headerImagesStr);

            // //获取详情内容
            // var itemContentArr = JSON.parse(item.content);

            // //把新的数据重新覆盖数据绑定中原有的值
            // me.setData({
            //     headerImagesArr: headerImagesArr,
            //     item: item,
            //     itemContentArr: itemContentArr
            //     // titleName: "搜索结果"
            // });
          }
        },
        complete: function(res) {
          my.hideNavigationBarLoading();
          my.hideLoading();
        }
      });



    }



  }
});
