Component({
  data: {
    triggered: false
  },
  properties:{
    triggered_father:Boolean
  },
  observers:{
    'triggered_father':function(field){
      this.setData({
        triggered:field
      })
    }
  },


  methods: {
    /**
     * 触发下拉刷新 , emit给父组件信息
     */
    bind_refresh() {
      var myEventDeatil ={
      }
      // 触发事件的选项
      var myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      } 
      this.triggerEvent('refresh_list',myEventDeatil,myEventOption)
    },

    /**
     * 通过父组件从传来的信息关闭下拉刷新
     */
    close_fresh(){
      this.setData({
        triggered: false
      })
    }
  }
})