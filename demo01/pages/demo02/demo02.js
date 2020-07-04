// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:''
  },

  onRadioChange(e)
  {
    var cur_gender = e.detail.value;
    // console.log(cur_gender);
    this.setData({gender:cur_gender});
  }
})