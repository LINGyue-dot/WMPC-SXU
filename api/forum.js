/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   论坛api封装              */
/**************************************************************/
import Http from '../utils/http'


const app = getApp()

module.exports = {
  /**
   * 获取吃喝类列表
   * @param {*} info 
   */
  get_eat_list(info) {
    return Http.get('/scenario/eat/all', {
      pages: info.pages,
      select_method: info.select_method
    })

  }
}