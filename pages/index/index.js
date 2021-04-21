// pages/profile/profile.js
/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction   主要界面地图             */
/**************************************************************/


// 获取应用实例
const app = getApp()

const {
  get_landscape_list
} = require('../../api/content/')


Page({
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  data: {
    // 这地图组件封装后存在无法moveToLoaction问题,所以直接使用,显得有点乱
    latitude: 37.73605,
    longitude: 112.56566,
    // 标记点 list
    markers: [{
      id: 2,
      latitude: 37.800889,
      longitude: 112.585123,
      name: '令得十二'
    }],
    // map是否已经完成初始化标志位
    map_init: false,
    _map: null,
    // 景观列表
    landscapes: [{
      id: 2,
      title: '令得12',
      img_url: 'http://120.27.242.14:8080/img/enter.jpg',
      latitude: 37.73605,
      longitude: 112.56566,
    }]
  },
  onLoad() {
    this._get_loaction()
    get_landscape_list().then(res => {
      console.log(res)
      // console.log(res.data.data.data)
      this.setData({
        markers: res.data.data.data.map(item => ({
          id: item.id,
          name: item.name,
          ...item.location,
          iconPath: '../../assets/icons/location.png',
          width: '50',
          height: '70'
        })),
        landscapes: res.data.data.data /**!!!!!!!!!!!!!!!!!!!!!!!!套娃啊 */
      })
    }).catch(err=>console.log(err))
  },
  /**
   * 获取用户当前定位
   */
  _get_loaction() {
    const that = this
    that._map = wx.createMapContext('map')
    that._map.moveToLocation()
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        let latitude = res.latitude
        let longitude = res.longitude

        that.setData({
          map_init: true,
          latitude: res.latitude,
          longitude: res.longitude
        })
        console.log('经纬度:', latitude, longitude)
        that._map.moveToLocation({
          longitude: res.longitude,
          latitde: res.latitude
        })
      }
    })
  },
  /**
   * 点击回归点,回到当前所在位置
   * @param {*} event 必须参数
   */
  click_now_location(event) {
    const that = this
    that._map.moveToLocation({
      longitude: this.longitude,
      latitde: this.latitude
    })
  },
  /**
   * 点击标记点
   * @param {*} event 元素实例
   */
  click_mark_tap(event) {
    const lanscape_id = event.detail.markerId // 标记点id
    console.log(lanscape_id)

  },
  /**
   * 点击搜索
   * @param {}} event 
   */
  click_search(event) {


  },
  /**
   * 获取子组件传来的信息进行视角移动
   * 点击景观item 移动视角
   * @param {*} event 
   */
  click_list_item(event) {
    this._map.moveToLocation({
      latitude:event.detail.latitude,
      longitude:event.detail.longitude
    })
  }
})