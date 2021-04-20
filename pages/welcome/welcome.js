// pages/welcome/welcome.js
/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   欢迎进入界面               */
/**************************************************************/
import Tips from "../../utils/tips.js"
import Router from '../../utils/router.js'
import UserOpeartion from '../../utils/user_operation'

const app = getApp()
const {
  sign_up,
  sign_in
} = require('../../api/user.js')



Page({
  /**
   * 点击进入主界面
   * 如果没有token 获取权限 注册
   * 如果有token 则 登入操作 初始化global_data 内数据
   */
  welcome() {
    var token = wx.getStorageSync('X-Token')
    if (token) {
      // 有token 直接sign_in 
      Tips.loading(true, '正在登入')
      sign_in().then((res)=>{
        Tips.loading(false)
        UserOpeartion.back_to_index(res)
        Tips.success('hello', Router.enter_index)
      }).catch(err=>console.log(err))
    } else {
      // 如果没有token 获取用户信息权限 并 sign_up 注册

      // 由于官方限制 需要先 getUserProfile 然后 wx.login

      /**!!!!!!!!!!!!!!!!!!!!!! 此处待优化 需要封装 */
      wx.getUserProfile({
        desc: '用于登入获取您的信息',
        success: user_data => {
          Tips.loading(true, '正在登入')
          UserOpeartion.wx_to_index(user_data.userInfo)

          wx.login({
            success: wx_login_info => {
              sign_up({
                name: app.globalData.user.name,
                code: wx_login_info.code
              }).then(res => {
                UserOpeartion.back_to_index(res)
                Tips.loading(false)
                Tips.success('hello', Router.enter_index)
              }).catch(err => {
                console.log(err)
              })

            }
          })


        },
        fail: err => {
          console.log(err)
          Tips.error('请先授权才可进入')
        }
        //}

      })
    }









  }


})