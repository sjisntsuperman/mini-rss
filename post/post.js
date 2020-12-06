// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    time: Date.now(),
    author: '',
    href: ''
  },

  bindTitleTap() {
    wx.navigateTo({
      url: this.data.href,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 考虑set到localStorage里面而不是通过query来传参
    console.log(options)
    const { href='', content='', title='', author='' } = options
    this.setData({
      author,
      title,
      content,
      href
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