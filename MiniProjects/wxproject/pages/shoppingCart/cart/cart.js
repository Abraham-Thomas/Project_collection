// pages/shoppingCart/cart/cart.js
const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
      emptyHidden: false,
      fullHidden: true,
		// 不可变商品列表，用于结算
		finalCartItemList: [],

		customUnSelectImg: "unselect",
		customSelectImg: "select",

		// 定义全选状态
		allSelectImg: "unselect",
		defaultSelectedAll: false,

		// 默认的合计金额
		totalAmount: 0,
		// 默认的结算件数
		cartItemNum: 0,

		// 预处理订单数据列表
		preOrderItemList: [],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad () {
	},

	// 跳转到首页
	helpYourself() {
		wx.switchTab({
			url: '/pages/index/index'
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		var me = this;

		// 初始化数据
		me.setData({
			emptyHidden: false,
			fullHidden: true,

			allSelectImg: "unselect",
			defaultSelectedAll: false,

			// 默认的合计金额
			totalAmount: 0,
			// 默认的结算件数
			cartItemNum: 0,
		});

		// 从缓存中拿到购物车数组对象
		var cartItemIdArray = wx.getStorage({
			key: 'cartItemIdArray', // 缓存数据的key
		});
		// 判断cartItemIdArray是否为空，如果不为空，则到后台接口查询商品数据
		if (cartItemIdArray != null && cartItemIdArray != undefined) {
			me.setData({
				emptyHidden: true,
				fullHidden: false,
			});

			// 循环拼接商品ids   1001,1002,1003,
			var itemIds = "";
			for (var i = 0; i < cartItemIdArray.length; i++) {
				var tempId = cartItemIdArray[i].itemId;
				itemIds += tempId + ",";
			}

			// 发送请求到后端
			wx.showNavigationBarLoading();
			wx.showLoading({
				content: "疯狂加载中..."
			});

			// 请求接口，查询商品详情
			wx.httpRequest({
				url: app.serverUrl + '/item/queryItems?itemIds=' + itemIds,
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
						var itemList = myData.data;
						console.log(itemList);

						var finalCartItemList = [];
						for (var i = 0; i < itemList.length; i++) {
							var itemId = itemList[i].id;
							// 根据itemId从缓存购物车中获取商品的件数
							var itemCounts = app.fetchItemCounts(cartItemIdArray, itemId);
							var isSelect = 0;       // 默认未选中：0   选中：1
							// 构建全局不可变商品
							var finalCartItem = app.finalCartItem(itemList[i], itemCounts, isSelect);
							// 不可变商品列表，用于结算
							finalCartItemList.push(finalCartItem);
						}
						me.setData({
							finalCartItemList: finalCartItemList,
						});
					}
				},
				complete: function (res) {
					wx.hideNavigationBarLoading();
					wx.hideLoading();
				}
			});

		}

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})