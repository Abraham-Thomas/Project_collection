const app = getApp();

Page({
	data: {
		carousels: [],
		featuresList: [],
		newItemList: [],
	},
  	//页面加载
	onLoad() {},

	//页面被下拉
	onPullDownRefresh() {
		this.initData();
	},

	//页面加载完成
	onReady() {
		this.initData();
	},
	initData() {
		var me = this;
		//请求轮播图
		my.httpRequest({
		url: app.serverUrl + '/index/carousels', // 目标服务器url
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
				var carousels = myData.data;
				//把新的数据重新覆盖数据绑定中原有的值
				me.setData({
					carousels: carousels
				});
			}
		},
		fail: (res) => {
			console.log("发生错误：" + res)
		},
		complete: (res) => {
			console.log("最终执行的complete：" + res);
		}
		});

		//请求推荐商品列表
		my.httpRequest({
			url: app.serverUrl + '/index/items/rec', // 目标服务器url
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
					var featuresList = myData.data;
					//把新的数据重新覆盖数据绑定中原有的值
					me.setData({
						featuresList: featuresList
					});
				}
			},
		});

		//请求新品列表
		my.httpRequest({
			url: app.serverUrl + '/index/items/new', // 目标服务器url
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			dataType: 'json',
			success: (res) => {
				console.log(res);
				//获取拿到后端的数据
				var myData = res.data;
				if (myData.status == 200) {
					var newItemList = myData.data;
					// console.log(itemList);
					//把新的数据重新覆盖数据绑定中原有的值
					me.setData({
						newItemList: newItemList
					});
				}
			}
		});

	},
  showItem (e) {
    var itemId = e.target.dataset.itemId;
    my.navigateTo({
      url: "/pages/query/item/item?itemId=" + itemId
    });
  },
  showItemList (e) {
    var itemId = e.target.dataset.itemId;
    var catId = e.target.dataset.catId;
    var searchType = e.target.dataset.searchType;

    if (searchType == 1) {
      my.navigateTo({
        url: "/pages/query/item/item?itemId=" + itemId
      });
    }else if(searchType == 2) {
      my.navigateTo({
        url: "/pages/query/list/list?searchType=cat&catId=" + catId + "&catName=搜索结果"
      });
    }
  },

  onShow() {
    //测试获取购物车缓存信息并且打印
    var cartItemIdArray = my.getStorageSync({
      key: 'cartItemIdArray', // 缓存数据的key
    }).data;
    console.log("======= 首页测试购物车 start ========");
    console.log(cartItemIdArray);
    console.log("======= 首页测试购物车 end ========");
  }
	
});
