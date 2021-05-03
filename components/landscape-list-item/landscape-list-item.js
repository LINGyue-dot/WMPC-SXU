/**************************************************************/
/*Project name  SXU-TOUR                             */
/*Author's name  qianlong                            */
/*Creation time  2021-04-05                          */
/*Using technology                                   */
/*Function introduction    景观列表item               */
/**************************************************************/
import Router from '../../utils/router'


Component({
  options: {
    // 取消样式隔离
    styleIsolation: 'apply-shared'
  },
  properties: {
    landscape: Object
  },
  data: {},
  ready: function () {
    // console.log(this.properties)
  },
  methods: {
    /**
     * 点击列表的item
     * 跳转地图中心点
     */
    click_list_item(event) {
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        latitude: this.properties.landscape.location.latitude,
        longitude: this.properties.landscape.location.longitude
      }
      // 触发事件的选项
      var myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      }
      // 传递给父组件
      this.triggerEvent('click_list_item', myEventDetail, myEventOption)
    },
    /**
     * 点击list itm link
     * 跳转到景观详情介绍
     */
    click_list_item_link(event) {
      console.log(this.properties)
      Router.navigate_landscape(this.properties.landscape.id)
    }
  }
})