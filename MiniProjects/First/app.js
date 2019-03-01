App({
	serverUrl: "https://www.imoocdsp.com",
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },

  //构建全局购物车商品对象，（商品id，购买数）
  cartItem(itemId, counts) {
    var cartItem = new Object();
    cartItem.itemId = itemId;
    cartItem.counts = counts;
    return cartItem;
  }
});
