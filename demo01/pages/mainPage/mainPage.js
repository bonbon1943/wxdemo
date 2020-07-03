// pages/mainPage/mainPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"this is a msg.",
    num:7,
    is_checked:true,
    user:
    {
      id:1,
      name:"jason",
      age:36,
      sex:"男"
    },
    list:
    [
      {
        id:1,
        name:"zhangsan"
      },
      {
        id:2,
        name:"lisi"
      },
      {
        id:2,
        name:"wangwu"
      }
    ],

    num_list:[1,2,3,4,5,677]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})