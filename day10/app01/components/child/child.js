// components/child/child.js
const mybehaviors = require("../../behaviors/behaviors")
Component({
  behaviors:[mybehaviors],
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true   //开启多个插槽
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  created:function(){
    
  },
  data: {
    n1:0,
    n2:0,
    n3:0,
    type :1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addN1(){
      this.setData({
        n1:this.data.n1+1
      })
    },
    addN2(){
      this.setData({
        n2:this.data.n2+1
      })
     
    },
     //直接可以调用behaviors里的数据方法
    Onbehaviors(){
      console.log(this.data);
    },
    addCount(){
      this.setData({
        type:this.data.type+1
      })
    }
  },
  observers:{
    'n1,n2':function(n1,n2){
      this.setData({
        n3:n1+n2
      })
    }
  }
})
