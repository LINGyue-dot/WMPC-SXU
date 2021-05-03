// pages/forum/forum.js

const app = getApp()

const {
  get_eat_list
} = require('../../api/forum.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_arr:[1,2,3],
    swiper_id: 1, // 当前的swiper-item的id , 同时用与状态管理
    select_arr: ["热度优先", "时间优先", "评论数优先"],
    select_value: 0
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
    wx.login({
      success: res => console.log(res.code)
    })

  },
  /**
   * 页面刷新操作
   */
  refresh() {
    

  },


  /**
   * 监听页面的左右滑动事件
   * @param {*} event 
   */
  swiper_change(event) {
    this.setData({
      swiper_id: parseInt(event.detail.currentItemId) // 到达页面的id
    })
  },





  /**
   * 选择排序方式发生改变
   * @param {*} event 
   */
  select_change(event) {
    this.setData({
      select_value: event.detail.value
    })
  },


  /**
   * 获取note列表 
   */
  get_note_list() {
    switch (this.data.swiper_id) {
      case 1: // 吃喝列表
        get_eat_list({
          pages: this.data.select_eat_page
        })
    }

  },


  clickItem(index) {
    this.setData({
      currentItemId: index
    })
  }


})