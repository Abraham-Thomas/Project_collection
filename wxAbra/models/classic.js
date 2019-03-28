import HTTP from '../util/http.js'

class ClassicModel extends HTTP{
  //去服务器加载最新一期的期刊
  getLatest(sCallback){
    //通过继承的方法不需要实例化
    // http.request({
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback){
    this.request({
      url: 'classic/' + index + '/' + nextOrPrevious,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  isFirst(index){
    return index == 1 ? true : false;
  }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false;
  }

  //缓存最新一期的期刊号
  _setLatestIndex(index){
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex(){
    let index = wx.getStorageSync('latest');
    return index;
  }

}

export default ClassicModel;