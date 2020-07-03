// pages/date_html/date_html.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* date_num:[{
        id:1,isCurrent:"datenum_current",content:"十佳歌手"
      },{
        id:2,isCurrent:"datenum",content:"百团大战"
      },{
        id:3,isCurrent:"datenum",content:"歌唱祖国"
      },{
        id:4,isCurrent:"datenum",content:"毛泽东诞辰100年校跑"
      },{
        id:5,isCurrent:"datenum",content:"考研讲座"
      },{
        id:6,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:7,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:8,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:9,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:10,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:11,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:12,isCurrent:"datenum",content:"十佳歌手"
      },{
        id:13,isCurrent:"datenum",content:"十佳歌手"
      },
    ] ,*/
    
    date_content:[]
  },

  changeCurrent(e){
    //console.log(e.currentTarget.id)
    var date_num=this.data.date_num //获取data中date_num列表
    for(var i=0;i<date_num.length;i++){  //遍历找到点击事件中id一样的项
      if(date_num[i].id==e.currentTarget.id){
        date_num[i].isCurrent="datenum_current"  //将该项的isCurrent赋值为选中属性
        this.data.date_content=date_num[i].content
      }else{
        date_num[i].isCurrent="datenum"
      }
    }
    this.setData({      //需要重新载入数据
      date_num:date_num,
      date_content:this.data.date_content
    })
  
  },
  

  





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* this.setData({
      date_content:this.data.date_num[0].content
    }) */
    //使用云开发
    const db=wx.cloud.database()
    db.collection('date_contentText').get({
      success:res=>{
        console.log('取数据成功,',res.data)
        this.setData({
          date_num:res.data,
          date_content:res.data[0].content
        })
      },
      fail:err=>{
        console.log('取数据失败,',err)
      }
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