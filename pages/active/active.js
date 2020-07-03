// pages/active/active.js
const App = getApp();
Page({
  getnews:function(event){
    // console.log("outer view bindtap")
    console.log(event);
    var idx = event.currentTarget.dataset.newsid;
    console.log(idx);    // 新闻url 
     wx.navigateTo({
      // url: "../view/view?id=" + idx
     });
  },

  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log(e)
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  /**
   * 页面的初始数据
   */
  
  data: {
      ids:1,
    news1:[{
      id:1,
      //idm:1,
      title:'巧遇Love',
      imgurl:'img/1-1.png',
      author:'三翼工作室',
      place:'一田活动中心',
      date:'2019-2-14 20:08'
    },
    {
      id:2,
      //idm:1,
      title: '女生节',
      imgurl: 'img/1-2.png',
      author: '李四',
      place:'二田运动',
      date: '2019-6-25 10:10'
    },
    {
      id:3,
      //idm:1,
      title: '可瓦狂欢之夜',
      imgurl: 'img/1-3.png',
      author: '青媒体中心',
      place:'一田活动中心',
      date: '2019-7-5 20:10'
    },
    {
      id:4,
     // idm:2,
      title: '第4条新闻',
      imgurl: 'img/4.jpg',
      author: '王三',
      place:'北山',
      date: '2019-6-25 10:10'
    },
    {
      id:5,
      //idm:1,
      title: '第二条新闻',
      imgurl: 'img/4.jpg',
      author: '李四',
      place:'二田运动',
      date: '2019-6-25 10:10'
    },
    {
      id:6,
      //idm:1,
      title: '第二条新闻',
      imgurl: 'img/4.jpg',
      author: '李四',
      place:'二田运动',
      date: '2019-6-25 10:10'
    },
    {
      id:7,
      //idm:1,
      title: '第二条新闻',
      imgurl: 'img/4.jpg',
      author: '李四',
      place:'二田运动',
      date: '2019-6-25 10:10'
    },
  ],

  news2:[{
    id:5,
    //idm:1,
    title:'文艺',
    imgurl:'img/8.jpg',
    author:'张三',
    place:'南山',
    date:'2019-6-27 20:08'
  },
  {
    id:6,
    //idm:1,
    title: '第二条新闻',
    imgurl: 'img/22.jpg',
    author: '李四',
    place:'二田运动',
    date: '2019-6-25 10:10'
  },
  {
    id:7,
    //idm:1,
    title: '第3条新闻',
    imgurl: 'img/28.jpg',
    author: '王三',
    place:'北山',
    date: '2019-6-25 10:10'
  },
  {
    id:8,
   // idm:2,
    title: '第4条新闻',
    imgurl: 'img/4.jpg',
    author: '王三',
    place:'北山',
    date: '2019-6-25 10:10'
  }
],

news3:[{
  id:9,
  //idm:1,
  title:'竞赛',
  imgurl:'img/4.jpg',
  author:'张三',
  place:'南山',
  date:'2019-6-27 20:08'
},
{
  id:10,
  //idm:1,
  title: '第二条新闻',
  imgurl: 'img/28.jpg',
  author: '李四',
  place:'二田运动',
  date: '2019-6-25 10:10'
},
{
  id:11,
  //idm:1,
  title: '第3条新闻',
  imgurl: 'img/8.jpg',
  author: '王三',
  place:'北山',
  date: '2019-6-25 10:10'
},
{
  id:12,
 // idm:2,
  title: '第4条新闻',
  imgurl: 'img/4.jpg',
  author: '王三',
  place:'北山',
  date: '2019-6-25 10:10'
}
]
  },
  switchRightTab:function(e){
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      ids: id
    })
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

  },
  
  
  
})