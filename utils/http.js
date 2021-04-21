/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   api 基础封装函数               */
/**************************************************************/
import Tips from './tips'
import UserOpeartion from './user_operation'


const app = getApp()




export default class Http {
  constructor() {

  }


  /**
   *  request的基础封装
   * @param {*} method 
   * @param {*} subfix_url
   * @param {*} data 
   */
  static request(method, subfix_url, data) {
    return new Promise((resolve, reject) => {
      const header = this.create_http_header()

      wx.request({
        url: app.globalData.baseUrl + subfix_url,
        method: method,
        header: header,
        data: data ? data : {},
        success: res => {

          if (res.data.token_valid === false) {
            console.log('asd')
            // token 过期就再次登入
            this.handle_token_invalid()

          } else if (parseInt(res.data.code) !== 200) {
            // 获取失败
            reject(res)
            Tips.error('获取失败 ,请检查网络')
          } else {
            Tips.success('登入成功')
            resolve(res)
          }

        },
        fail: err => {
          console.log(err)
          reject(err)
        }
      })
    })
  }

  /**
   * 生成header 方便扩展
   */
  static create_http_header() {
    const token = wx.getStorageSync('X-Token')
    const header = {
      "X-Token": token
    }
    return header
  }


  /**
   * 处理token 过期 ,再次登入
   */
  static handle_token_invalid() {
    wx.login({
      success: login_info => {
        console.log(login_info)
        // this.refresh_token(login_info).then(res => {
        //   UserOpeartion.wx_to_index(res)

        // }).catch(err => {
        //   Tips.error('重新登入失败')
        //   console.log(err)
        // })
      }
    })

  }

  /**
   * token过期 更新token 
   */
  static refresh_token(login_info) {
    return this.get('/user/login', {
      id: login_info.code
    })
  }




  static get(url, data) {
    return this.request('get', url, data)
  }

  static post(url, data) {
    return this.request('post', url, data)
  }

  static put(url, data) {
    return this.request('put', url, data)
  }
}