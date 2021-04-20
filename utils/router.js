/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   路由操作函数 便于扩展                 */
/**************************************************************/

const app = getApp()


/**
 *  路由导航 同样是静态
 */
export default class Router {
  constructor() {}
  static enter_index() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }

  static navigate_landscape(landscape_id) {
    wx.navigateTo({
      url: '/pages/landscape/lanscape?lanscape_id=' + landscape_id,
      fail:err=>console.log(err)
    })
  }

  static navigate_comment() {
    wx.navigateTo({
      url: '/pages/user/comment/comment',
      fail: err => console.log(err)
    })
  }


  static navigate_notification() {
    wx.navigateTo({
      url: '/pages/user/notification/notification',
    })
  }

  static navigate_edit() {
    wx.navigateTo({
      url: '/pages/user/edit/edit',
    })
  }

  static navigate_setting() {
    wx.navigateTo({
      url: '/pages/user/setting/setting',
    })
  }

}