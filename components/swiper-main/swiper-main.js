Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
    distance:Number
  },
  data: {
    distance: 1, // 用于计算移动距离 0 1 2
  },
  observers: {
    'distance':function(field){
      this.setData({
        distance:field
      })
    }
  }

})