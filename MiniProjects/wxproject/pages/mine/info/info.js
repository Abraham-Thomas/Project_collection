// pages/mine/info/info.js

const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: {},
		userLogin: false,
		userNotLogin: true,

		// 用于表示订单tab是否选中的效果
		orderIndex: 0,

		orderList: [],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function () {
		var me = this;

		// 判断用户是否登录过
		var userInfo = app.getGlobalUserInfo();
		if (userInfo != null && userInfo != undefined) {
			me.setData({
				userInfo: userInfo,
				userLogin: true,
				userNotLogin: false,
			});
			return;
		}

		// 授权登录
		wx.getAuthCode({
			scopes: "auth_user",
			success: (res) => {
				if (res.authCode) {
					console.log(res.authCode);

					// 写上你自己的qq号即可，前提：需要联系老师，添加到团队里
					var qq = "1001";
					// 请求用户信息
					wx.request({
						url: app.serverUrl + '/team/login/' + res.authCode + '/' + qq,
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
								var userInfo = myData.data;
								console.log("========== 用户对象 start ===========");
								console.log(userInfo);
								console.log("========== 用户对象 end ===========");
								me.setData({
									userInfo: userInfo,
									userLogin: true,
									userNotLogin: false,
								});

								// 登录成功之后，设置全局用户信息，便于其他页面的使用
								app.setGlobalUserInfo(userInfo);
							}
						}
					});
				}
			},
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

		me.setData({
			orderIndex: 0,
		});

		var userInfo = me.data.userInfo;

		// 查询所有状态的订单列表
		wx.request({
			url: app.serverUrl + '/order/queryAllOrders?userId=' + userInfo.id + '&orderStatus=0',
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
					var orderList = myData.data;
					console.log("========== 查询全部订单 start ===========");
					console.log(orderList);
					console.log("========== 查询全部订单 end ===========");
					me.setData({
						orderList: orderList,
					});
				}
			}
		});

	},

	// 查询订单
	queryOrder(e) {
		var me = this;

		var orderIndex = e.target.dataset.orderIndex;
		var orderStatus = e.target.dataset.orderStatus;

		me.setData({
			orderIndex: orderIndex,
		});

		var userInfo = me.data.userInfo;

		// 查询所有状态的订单列表
		wx.request({
			url: app.serverUrl + '/order/queryAllOrders?userId=' + userInfo.id + '&orderStatus=' + orderStatus,
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
					var orderList = myData.data;
					me.setData({
						orderList: orderList,
					});
				}
			}
		});
	},

	// payAgain(e) {
	// 	var orderId = e.target.dataset.orderId;
	// 	// 重新唤起收银台
	// 	app.doAlipay(orderId);
	// },

	

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