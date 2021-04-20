// pages/profile/profile.js
/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   用户个人信息界面               */
/**************************************************************/

import Router from '../../utils/router'

const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{},
    notification:{
      
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      user:app.globalData.user
    })
  },


  /**
   * 进入用户历史评论
   */
  enter_comment(){
    Router.navigate_comment()
  },



  /**
   * 进入用户最近消息
   */
  enetr_notification(){
    Router.navigate_notification()
  },


  /**
   * 进入修改用户个人信息
   */
  enter_edit(){
    Router.navigate_edit()
  },


  /**
   * 进入设置页面
   */
  enter_setting(){
    Router.navigate_setting()
  }



})