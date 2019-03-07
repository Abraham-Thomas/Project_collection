//index.js
//获取应用实例
const app = getApp();

Page({
	data: {
		carousels: [],
		featuresList: [],
		newItemList: [],
	},
	onLoad(query) {
		// 页面加载
		console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
	},
	onReady() {
		this.initData();
	},
	onPullDownRefresh() {
		// 页面被下拉
		this.initData();
	},

	initData() {
		var me = this;

		// 请求轮播图
		wx.request({
			url: app.serverUrl + '/index/carousels',
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			// data: { name: 'jack', age:'18' },
			dataType: 'json',
			success: function (res) {
				console.log(res);
				// 获取拿到后端的数据
				var myData = res.data;
				if (myData.status == 200) {
					var carousels = myData.data;
					// 把新的数据重新覆盖数据绑定中的原有的值
					me.setData({
						carousels: carousels
					});
				}
			},
			fail: function (res) {
				// console.log("发生错误：" + res);
			},
			complete: function (res) {
				// console.log("最终执行的complete：" + res);
			}
		});

		// 请求推荐商品列表
		wx.request({
			url: app.serverUrl + '/index/items/rec',
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			dataType: 'json',
			success: function (res) {
				console.log(res);
				// 获取拿到后端的数据
				var myData = res.data;
				if (myData.status == 200) {
					var featuresList = myData.data;
					// 把新的数据重新覆盖数据绑定中的原有的值
					me.setData({
						featuresList: featuresList
					});
				}
			}
		});

		// 请求新品列表
		wx.request({
			url: app.serverUrl + '/index/items/new',
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			dataType: 'json',
			success: function (res) {
				console.log(res);
				// 获取拿到后端的数据
				var myData = res.data;
				if (myData.status == 200) {
					var newItemList = myData.data;
					// 把新的数据重新覆盖数据绑定中的原有的值
					me.setData({
						newItemList: newItemList
					});
				}
			}
		});

	},
	showItem(e) {
		// debugger;
		// console.log(e);
		var itemId = e.target.dataset.itemid;
		wx.navigateTo({
			url: "/pages/query/item/item?itemId=" + itemId
		});
	},
	showItemList(e) {
		// debugger
		// console.log(e);
		var itemId = e.target.dataset.itemid;
		var catId = e.target.dataset.catid;
		var searchType = e.target.dataset.searchtype;

		if (searchType == 1) {
			wx.navigateTo({
				url: "/pages/query/item/item?itemId=" + itemId
			});
		} else if (searchType == 2) {
			wx.navigateTo({
				url: "/pages/query/list/list?searchType=cat&catId=" + catId + "&catName=搜索结果"
			});
		}
	},

	onShow() {
		// 页面显示
		// wx.clearStorage();
		// 测试获取购物车缓存信息并且打印
		// var car = wx.getStorageSync(key)
		var cartItemIdArray = wx.getStorage({
			key: 'cartItemIdArray', // 缓存数据的key
			success(res) {
				console.log("====== 首页测试购物车数据 start ======");
				console.log(res.data);
				console.log("====== 首页测试购物车数据 end ======");
			}
		});

	}

})
