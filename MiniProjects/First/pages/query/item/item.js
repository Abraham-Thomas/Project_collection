const app = getApp();

Page({
  data: {
      headerImagesArr: [],
      item: {}
  },
  onLoad(params) {
    var me = this;
    
    //获取上一个页面传过来的商品id主键
    var itemId = params.itemId;

    my.showNavigationBarLoading();
    my.showLoading({
        content: "疯狂加载中..."
    });
    //请求接口，查询商品详情
    my.httpRequest({
        url: app.serverUrl + '/items/searchById?itemId=' + itemId, // 目标服务器url
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
                var item = myData.data;
                console.log(item);
                //获取封面图的数组字符串，并且转换为json array
                var headerImagesStr = item.headerImages;
                var headerImagesArr = JSON.parse(headerImagesStr);
                //把新的数据重新覆盖数据绑定中原有的值
                me.setData({
                    headerImagesArr: headerImagesArr,
                    item: item
                    // titleName: "搜索结果"
                });
            }
        },
        complete: function(res) {
            my.hideNavigationBarLoading();
            my.hideLoading();
        }
    });
  },
});
