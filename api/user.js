/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   用户权限等操作相关api封装              */
/**************************************************************/

import Http from '../utils/http.js'


const app = getApp()

module.exports = {

  /**
   * 注册
   * @param {*} info 
   */
  sign_up(user) {
    return Http.post('/user/login', {
      code: user.code,
      name: user.name ? user.name : ''
    })
  },

  /**
   * 后面登入 通过只token
   */
  sign_in() {
    return Http.get('/user/login')
  },


  /**
   * token过期 更新token 
   */
  refresh_token(login_info) {
    return Http.get('/user/login', {
      id: login_info.code
    })
  }








}