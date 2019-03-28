//app.js
App({
	serverUrl: "https://www.imoocdsp.com",

	// 构建全局购物车商品对象，{商品ID， 购买数}
	cartItem(itemId, counts) {
		var cartItem = new Object();
		cartItem.itemId = itemId;
		cartItem.counts = counts;
		return cartItem;
	},

	// 构建全局不可变商品对象，{商品对象， 购买数， 是否选中}
	finalCartItem(item, counts, isSelect) {
		var finalCartItem = new Object();
		finalCartItem.item = item;
		finalCartItem.counts = counts;
		finalCartItem.isSelect = isSelect;
		return finalCartItem;
	},

	// 根据商品id获取购物车中某个商品的件数
	fetchItemCounts(cartItemIdArray, itemId) {
		// debugger;
		for (var i = 0; i < cartItemIdArray.length; i++) {
			var item = cartItemIdArray[i];
			if (item != null && item != undefined && itemId == item.itemId) {
				return item.counts;
			}
		}
	},

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})