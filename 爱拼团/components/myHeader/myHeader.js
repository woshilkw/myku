// components/myHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      vlaue:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(e){
      console.log("开始向父组件传值")
      this.triggerEvent("myEvent",[123,456])
    }
  }
})
