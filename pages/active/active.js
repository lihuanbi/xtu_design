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
     title: '女生节',
     imgurl: 'img/1-2.png',
     author: '李四',
     place:'二田运动',
     date: '2019-6-25 10:10'
    },
    {
      id:5,
      //idm:1,
      title:'巧遇Love',
      imgurl:'img/1-1.png',
      author:'三翼工作室',
      place:'一田活动中心',
      date:'2019-2-14 20:08'
    },
    {
      id:6,
      //idm:1,
      title: '可瓦狂欢之夜',
      imgurl: 'img/1-3.png',
      author: '青媒体中心',
      place:'一田活动中心',
      date: '2019-7-5 20:10'
    },
    {
      id:7,
      //idm:1,
      title:'巧遇Love',
      imgurl:'img/1-1.png',
      author:'三翼工作室',
      place:'一田活动中心',
      date:'2019-2-14 20:08'
    },
  ],

  news2:[{
    id:8,
    //idm:1,
    title:'湘大诗词大会',
    imgurl:'img/2-1.png',
    author:'张三',
    place:'图书馆一号报告厅',
    date:'2020-6-27 20:00'
  },
  {
    id:9,
    //idm:1,
    title: '优秀毕业作品征集',
    imgurl: 'img/2-2.png',
    author: '李四',
    place:'图书馆前坪',
    date: '2019-7-25 10:10'
  },
  {
    id:10,
    //idm:1,
    title: '草莓音乐节',
    imgurl: 'img/2-4.png',
    author: '王三',
    place:'俱乐部',
    date: '2020-11-8~11-10 10:10'
  },
  {
    id:11,
   // idm:2,
   title:'湘大诗词大会',
    imgurl:'img/2-1.png',
    author:'张三',
    place:'图书馆一号报告厅',
    date:'2020-6-27 20:00'
  }
],

news3:[{
  id:12,
  //idm:1,
  title: '优秀毕业作品征集',
    imgurl: 'img/2-2.png',
    author: '李四',
    place:'图书馆前坪',
    date: '2019-7-25 10:10'
},
{
  id:13,
  //idm:1,
  title: '优秀毕业作品征集',
  imgurl: 'img/2-2.png',
  author: '李四',
  place:'图书馆前坪',
  date: '2019-7-25 10:10'
},
{
  id:14,
  //idm:1,
  title: '优秀毕业作品征集',
    imgurl: 'img/2-2.png',
    author: '李四',
    place:'图书馆前坪',
    date: '2019-7-25 10:10'
},
{
  id:15,
 // idm:2,
 title: '优秀毕业作品征集',
 imgurl: 'img/2-2.png',
 author: '李四',
 place:'图书馆前坪',
 date: '2019-7-25 10:10'
}
],

news4:[{
  id:16,
  //idm:1,
  title:'全球水源峰会',
  imgurl:'img/4-1.png',
  author:'张三',
  place:'逸夫楼一阶梯教室',
  date:'2020-8-1 10:00'
},
{
  id:17,
  //idm:1,
  title:'全球水源峰会',
  imgurl:'img/4-1.png',
  author:'张三',
  place:'逸夫楼一阶梯教室',
  date:'2020-8-1 10:00'
},
{
  id:18,
  //idm:1,
  title:'全球水源峰会',
  imgurl:'img/4-1.png',
  author:'张三',
  place:'逸夫楼一阶梯教室',
  date:'2020-8-1 10:00'
},
{
  id:19,
 // idm:2,
 title:'全球水源峰会',
 imgurl:'img/4-1.png',
 author:'张三',
 place:'逸夫楼一阶梯教室',
 date:'2020-8-1 10:00'
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