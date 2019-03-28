import HTTP from '../util/http.js'

class ClassicModel extends HTTP{
  //去服务器加载最新一期的期刊
  getLatest(sCallback){
    //通过继承的方法不需要实例化
    // http.request({
    this.request({
      url: '/classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export default ClassicModel;