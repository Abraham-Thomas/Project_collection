// pages/goodsDetails/goodsDetails.js
import goodsDataList from '../../utils/goodsDataList'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    imgUrls:[],
    name:'',
    brief:'',
    now_price:'', 
    old_price:'',
    txt_content:'',
    details_img:'',
    param_img:'',
    found:[],
    interval:3000,
    duration:800,
    navbarHidden:false,
    goodsDataList:goodsDataList
  },
  detailsActive: function(){
    this.setData({
       navbarHidden: false
    })
 }, 
 paramActive: function(){ 
    this.setData({
       navbarHidden: true
    })
 },

 addCart:function(e){
  const id = e.currentTarget.dataset.id
   console.log(e)
    wx.navigateTo({
      
      url:'../goodsDetails/selectedGoods/selectedGoods?id='+ id
    })
    

 },
 toCart:function(e){
   console.log(e)
   wx.reLaunch({
     url: '../cart/cart',
   }) 
 },
  /**
   * 生命周期函数--监听页面加载
   */
  // 接收商品页面的id 
  onLoad: function (options) {
    const id = options.id;
      let that  = this;
      console.log(options)
      that.setData({
        id:options.id
      })   
      that.found(id)
  },
  found(id){
    let found = goodsDataList.filter (item => {
      return item.id == id
    })
    console.log(found)
    this.setData({
      imgUrls:found[0].imgUrls,
      brief:found[0].brief,
      name:found[0].name,
      now_price:found[0].now_price,
      old_price:found[0].old_price,
      details_img:found[0].details_param,
      param_img:found[0].param_img,
      txt_content:found[0].txt_content
    })
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