/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   tip 提示工具类                 */
/**************************************************************/


export default class Tips {
  constructor() {
    this._loading = false
  }
  /**
   *  成功提示函数
   * @param {*} title  提示信息
   * @param {*} hide  toast 结束后回调函数
   * @param {*} icon 
   */
  static success(title, hide, icon = "success") {
    wx.showToast({
      title: title,
      icon: icon,
      mask: true,
      duration: 500
    })
    if (hide) { // 显示后执行回调函数
      setTimeout(() => {
        hide()
      }, 500);
    }
  }

  /**
   * 错误提示
   * @param {*} title 
   * @param {*} hide 
   */
  static error(title, hide) {
    wx.showToast({
      title: title,
      image: '/miniprogram/assets/icons/error.png',
      mask: true,
      duration: 500
    })
    if (hide) {
      setTimeout(() => {
        hide()
      }, 500)
    }
  }
  /**
   * 警告框
   */
  static alert(title) {
    wx.showToast({
      title: title,
      image: '/miniprogram/assets/icons/alert.png',
      mask: true,
      duration: 500
    })
  }


  /**
   * 等待框
   * @param { 开关标志位} flag  赋值给_loading 
   * @param {} title 可选
   */
  static loading(flag, title) {
    this._loading = flag
    if (this._loading) {
      wx.showLoading({
        title
      })
    } else {
      wx.hideLoading()
    }
  }


  /**
   * 弹出选择提示框
   * @param {*} text 
   * @param {*} title 
   */
  static confirm(text, title = '提示') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve()
          } else {
            reject()
          }
        },
        fail: err => {
          reject()
        }
      })
    })
  }

}

Tips._loading = false // 静态变量 全局通用