// pages/myPage/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },

  handleInput(e)
  {
    // console.log(e.detail.value);
    //给data中的变量赋值
    this.setData({num:e.detail.value});
  },

  onTapBtn(e)
  {
    // console.log(e);
    var val = e.currentTarget.dataset.operation + this.data.num;
    //给data中的变量赋值
    this.setData({num:val});
  }
})