// pages/goodsDetails/selectedGoodg/selectedGoods.js
import goodsDataList from '../../../utils/goodsDataList'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPic:'',
    now_price:'', 
    old_price:'',
    txt_content:'',
    color:'',
    num:1,
    goodsDataList:goodsDataList
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
      selectPic:found[0].selectPic,
      name:found[0].name,
      now_price:found[0].now_price,
      old_price:found[0].old_price,
      color:found[0].color,
      txt_content:found[0].txt_content,
    })
  },
 
  add(e) {
  let num = this.data.num
    num++
    this.setData({
      num
    })
  },
  decrease(e) {
    let num =this.data.num
    if(num <= 1)
    {
      return
    }
    else
    {
      num--
      this.setData({
        num
      })
    }

  },
  certain () {
    wx.navigateBack({
      delta: 1
    });
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
    let goods=wx.getStorageSync(
      '商品')||[]
    let obj = {
       selectPic:this.data.selectPic,
       color:this.data.color,
       num:this.data.num,
       txt_content:this.data.txt_content,
       now_price:this.data.now_price
    }
    // 本地缓存数据
      goods.push(obj)
      wx.setStorage({
        key:"商品",
        data:goods
      })
      // 清除本地数据
      // wx.clearStorageSync('商品');
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