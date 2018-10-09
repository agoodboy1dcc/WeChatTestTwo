// pages/testlist/testlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testlist: [{
        name: "这是姓名",
        images: "/pages/images/Home.png",
        selected:true
      },
      {
        name: "这也是姓名",
        images: "/pages/images/Message.png",
        selected:true
      }
    ]
  },
  selectlist(e){
    const index = e.currentTarget.dataset.index;
    let testlist = this.data.testlist;
    const selected = testlist[index].selected;
    testlist[index].selected = !selected;
    this.setData({
      testlist: testlist
    });
  },
  updatebody: function() {
    this.setData({
      testlist: [{
          name: "这是改变后的姓名",
          images: "/pages/images/qincai.jpg"
        },
        {
          name: "这也是改变后的姓名",
          images: "/pages/images/mifan.jpg"
        }
      ]
    });
  },
  bindtest: function() {
    wx.request({
      url: 'http://192.168.0.109:8080/jn_yczd/logins.do', //本地服务器地址 
      data: {
        username: 'admin',
        password: '123456',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值  
      },
      success: function(res) {
        console.log("成功");
      },
      fail: function(res) {
        console.log("失败");
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})