// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    triggered: false,
    swiper_id:1 // 当前的swiper-item的id , 同时用与状态管理
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
   * 监听页面的左右滑动事件
   * @param {*} event 
   */
  swiper_change(event) {
   this.setData({
    swiper_id : parseInt(event.detail.currentItemId) // 到达页面的id
   })
  },


  /**
   * 监听子组件传来的信息
   * 下拉刷新
   * 异步结束后只需要将triggered数据赋值为false
   * @param {*} event 
   */
  refresh_list(event){

    // 赋值为false
    this.setData({
      triggered:false
    })
  }



})