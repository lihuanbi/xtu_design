// pages/active/active.js
const App = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    news:[{
      id:1,
      title:'第一条新闻',
      imgurl:'img/1.jpg',
      author:'张三',
      date:'2019-6-27 20:08'
    },
    {
      id:2,
      title: '第二条新闻',
      imgurl: 'img/4.jpg',
      author: '李四',
      date: '2019-6-25 10:10'
    },
    {
      id:3,
      title: '第3条新闻',
      imgurl: 'img/1.jpg',
      author: '王三',
      date: '2019-6-25 10:10'
    },
    {
      id:4,
      title: '第4条新闻',
      imgurl: 'img/4.jpg',
      author: '王三',
      date: '2019-6-25 10:10'
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight
     });
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