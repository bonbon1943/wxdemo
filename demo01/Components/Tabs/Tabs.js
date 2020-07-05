// Components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
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
    
    onTapTab(e)
    {
      var cur_id = e.currentTarget.dataset.id;
      // console.log(cur_id); 

      // var list = this.data.tabs;
      // list.forEach(element => {
      //   element.isActive = element.id == cur_id;
      // });
      
      // this.setData(
      //   {
      //     tabs:list
      //   }
      // );

      this.triggerEvent("ItemChange", {cur_id});
    }
  }
})
