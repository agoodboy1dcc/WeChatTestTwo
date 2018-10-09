// pages/phonecall/phonecall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true
  },
  /**
   * 输入电话时的判断按钮可不可用
   */
  bindInput: function(e){
    this.InputValue = e.detail.value
    if(this.InputValue.length>0){
      this.setData({
        disabled:false
      })
    }else{
      this.setData({
        disabled:true
      })
    }
  },
  /**
   * 拨打电话
   */
  makePhoneCall: function(){
    var that = this
  wx.makePhoneCall({
    phoneNumber: this.InputValue,
    success: function(res) {
      console.log("成功拨打电话")
    },
    fail: function(res) {},
    complete: function(res) {},
  })
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