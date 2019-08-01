// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [
  {
      navUrl: '',
      // img: 'https://i8.mifile.cn/v1/a1/6cc739d8-ae51-779a-3707-2f1d20a558bf!720x440.webp',
      img:'../../images/like.png',
      text: '新品预约'
   }, 
   {
      navUrl: '',
      img: '../../images/active.png',
      text: '活动频道'
   }, 
   {
      navUrl: '',
      img: '../../images/shop.png',
      text: '线下门店'
   }, 
  ],

  contentDate:[
{
   Url:'https://m.mi.com/commodity/detail/4348',
   pictures:'https://i8.mifile.cn/v1/a1/12ff1518-0d4e-516d-173b-97451db7e71d!500x200.webp',
   text:'小米扫地机器人'
},
{
   Url: '',
   pictures: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200',
   text: '小米净水器'
},
{
   Url:'',
   pictures:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f5558a9ea00c33160867156fde40341.jpg?thumb=1&w=500&h=200',
   text:'小米蓝牙项圈耳机'
},
{
   Url:'',
   pictures:'../../images/findSO.jpg',
   text:'你所向往的智慧生活，小米为你实现'
},
]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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