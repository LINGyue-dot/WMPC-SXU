/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   用于操作用户信息存储等操作                 */
/**************************************************************/

import Auxiliary from '../utils/auxiliary.js'

const app = getApp()

export default class UserOperation {
  constructor() {

  }


  /**
   * 通过wx.getUserProfile 获取来的数据初始化globalData
   * @param {*} info  
   */
  static wx_to_index(info) {
    app.globalData.user.name = info.nickName
    app.globalData.user.avatarUrl = info.avatarUrl
    app.globalData.user.gender = info.gender
  }




  /**
   * 登入或注册 后端传来的数据初始化 globalData ,同时存储token
   * @param {*} info 
   */
  static back_to_index(info) {
    const data = info.data.data

    app.globalData.user.id = data.id
    app.globalData.user.name = data.username
    app.globalData.user.description = data.description
    app.globalData.user.avatarUrl = data.avatarUrl // 需要新加
    console.log(app.globalData)
    this.store_sign_up({
      token: info.header["X-Token"]
    })
  }

  /**
   * 存储 服务器 sign_up第一次注册返回的数据
   * @param {*} info 
   */
  static store_sign_up(info) {
    wx.setStorageSync('X-Token', info.token)
  }


  /**
   * 登出 删除全部数据 并且清空token
   */
  static logout_index() {
    Auxiliary.transform_to_empty(app.globalData.user) // 此处浅拷贝

  }


}