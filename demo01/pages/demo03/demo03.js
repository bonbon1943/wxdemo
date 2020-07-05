// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:1,
        name:"首页",
        isActive:true
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"我的",
        isActive:false
      },
      {
        id:4,
        name:"关于",
        isActive:false
      }
    ]
  },

  OnItemChange(e)
  {
    var cur_id = e.detail.cur_id;
    var list = this.data.tabs;
    list.forEach(element => {
      element.isActive = element.id == cur_id;
    });
      
    this.setData(
      {
        tabs:list
      }
    );
  }
})