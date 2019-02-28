const app = getApp();
Page({
	data: {
		catList: []
	},
	//页面加载
	onLoad() {},

	searchItems(e) {
		// console.log(e);
		//获取搜索框中的值
		var itemName = e.detail.value
		//由于后端对itemName为空进行了推荐列表的处理，所以这里的判断可以省略
		// if(itemName != null && itemName != '' && itemName != undefined) {
			my.navigateTo({
				url: "/pages/query/list/list?searchType=words&itemName=" + itemName
			});
		// }
		// else {
		// 	return;
		// }
	},

	onReady() {
		var me = this;
		//请求分类数据
		// my.httpRequest({
		// 	url: app.serverUrl + '/cats', // 目标服务器url
		// 	method: 'POST',
		// 	header: {
		// 		'content-type': 'application/json'
		// 	},
		// 	dataType: 'json',
		// 	success: (res) => {
		// 		console.log(res);
		// 		//获取拿到后端的数据
		// 		var myData = res.data;
		// 		if(myData.status == 200) {
		// 			var catList = myData.data;
		// 			//把新的数据重新覆盖数据绑定中原有的值
		// 			me.setData({
		// 				catList: catList
		// 			});
		// 		}
		// 	}
		// });
	}

});
