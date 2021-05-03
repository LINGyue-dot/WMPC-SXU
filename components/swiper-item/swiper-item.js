Component({
  options: {
    styleIsolation: 'shared'
  },
  properties:{
    item_id:Number,
    select_value:Number,// "热度优先", "时间优先", "评论数优先"
  },

  data:{

  },
  methods:{

    refresh(){
      console.log('refresh')
    }

  }

})