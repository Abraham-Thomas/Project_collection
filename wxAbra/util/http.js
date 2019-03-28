import config from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',  //默认的错误提示
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
}

class HTTP{
  request(params){
    //url,data,method
    if(!params.method){
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res)=>{
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          //判断params下的success是否为空，否则不执行后面代码
          params.success && params.success(res.data)
        }
        //服务器异常
        else{
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      //api调用失败
      fail: (err)=>{
        this._show_error(1)
      }
    })
  }

  //下划线表示为私有类型,但ES6中没有私有方法这种表示，所以只用于示意
  _show_error(error_code){
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    }) 
  }
}

export default HTTP