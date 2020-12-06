// pages/rss/rss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: 'this is title',
        content: 'this is content',
        author: 'this is author',
        time: Date.now(),
        href: 'https://www.baidu.com'
      },
      {
        title: 'this is title',
        content: 'this is content',
        author: 'this is author',
        time: Date.now(),
        href: 'https://www.baidu.com'
      },
      {
        title: 'this is title',
        content: 'this is content',
        author: 'this is author',
        time: Date.now(),
        href: 'https://www.baidu.com'
      },
      {
        title: 'this is title',
        content: 'this is content',
        author: 'this is author',
        time: Date.now(),
        href: 'https://www.baidu.com'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://steinw.top/v2ex/topics/latest',
      // data: data,
      // dataType: dataType,
      enableCache: true,
      enableHttp2: true,
      enableQuic: true,
      // header: header,
      // method: method,
      // responseType: responseType,
      timeout: 0,
      success: (result) => {
        console.log(result)
      },
      fail: (res) => {
        console.log(this)
      },
      complete: (res) => {},
    })
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