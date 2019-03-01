const app = getApp();

Page({
  data: {
      headerImagesArr: [],
      item: {},
      itemContentArr: [],
      animationInfo: {},
      animationOpacity: 0,
      cartIco: "cart-empty"
  },
  onShow() {
    //创建动画实例
    var animation = my.createAnimation();
    this.setData({
      //导出动画效果到页面
      animationInfo: animation.export()
    });
  },
  //添加商品到购物车
  addToCart() {
    var me = this;

    me.setData({
      animationOpacity: 1
    });
    me.showAddToCartAnimation();

    //商品id存入缓存购物车
    var itemId = me.data.item.id;
    me.cartItemIncrease(itemId);
  },

  //商品放入购物车
  cartItemIncrease(itemId) {
    var me = this;

    //从缓存中拿到购物车数组对象
    var cartItemIdArray = my.getStorageSync({
      key: 'cartItemIdArray', // 缓存数据的key
    }).data;
    //判断cartItemIdArray是否为空
    if(cartItemIdArray == null || cartItemIdArray == undefined) {
      //构建空的购物车数组对象
      cartItemIdArray = [];
    }

    //构建新的商品对象
    var cartItem = app.cartItem(itemId, 1);
    //把这个商品对象放入购物车
    cartItemIdArray.push(cartItem);
    //把cartItemArray存入缓存
    my.setStorageSync({
      key: 'cartItemIdArray', // 缓存数据的key
      data: cartItemIdArray, // 要缓存的数据
    });
  },
  //实现动画效果
  showAddToCartAnimation() {
    var animation = my.createAnimation({
      duration: 500
    });
    this.animation = animation;

    //rotate：旋转
    this.animation.rotate(-180).translateX("296rpx").step();
    this.setData({
      animationInfo: this.animation.export()
    });

    //复原动画
    setTimeout(function() {
      this.setData({
        animationOpacity: 0,
        cartIco: "cart-full"
      });

      setTimeout(function() {
        this.animation.rotate(0).translateX(0).step({
          duration: 0
        });
        this.setData({
          animationInfo: this.animation.export()
        });
      }.bind(this),550)
    }.bind(this),600);

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

                //获取详情内容
                var itemContentArr = JSON.parse(item.content);

                //把新的数据重新覆盖数据绑定中原有的值
                me.setData({
                    headerImagesArr: headerImagesArr,
                    item: item,
                    itemContentArr: itemContentArr
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
