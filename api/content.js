// index.js
/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   业务相关api封装             */
/**************************************************************/

import Http from '../utils/http.js'

const app = getApp()

module.exports = {

  /**
   * 获取景点列表
   */
  get_landscape_list() {
    return Http.get('/scenario/landscape/all')
  },


  /**
   * 获取景点详情
   * @param  {} landscape_id  景点id
   */
  get_lanscape_item(landscape_id) {
    return Http.get('/scenario/landscape/' + landscape_id)
  },


  /**
   * 获取某景点的评论列表
   * @param {*} dlandscape_id 景点id
   */
  get_landscape_comment_list(landscape_id) {
    return Http.get('/comment/scenario/' + landscape_id)
  },


  /**
   * 点赞某评论
   * @param {*} comment_id 评论id 
   */
  agree_landscape_comment_item(comment_id) {
    return Http.put('/comment/agree/' + comment_id, {
      params: {
        id: app.globalData.user.id
      }
    })
  },


  /**
   * 对某景点添加评论
   * @param {*} lanscape_id 景点id
   */
  add_lanscape_comment(lanscape_id, comment_message) {
    return Http.post('/comment/landscape/' + landscape_id, {
      id: app.globalData.user.id,
      comment_message: comment_message
    })
  }






}