// pages/testlist/testlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testlist:[
      { name:"这是姓名",images:"/pages/images/Home.png"},
      { name:"这也是姓名",images:"/pages/images/Message.png"}
    ]
  },
  updatebody:function(){
    this.setData({
      testlist: [
        { name: "这是改变后的姓名", images: "/pages/images/qincai.jpg" },
        { name: "这也是改变后的姓名", images: "/pages/images/mifan.jpg" }
      ]
    });
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