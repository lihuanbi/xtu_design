// pages/add_activity/add_activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_id:0,
    add_today_num:0,
    add_active_name:"",
    add_time:"",
    add_plase:"",
    add_active_detail:""
  },

  getId(e){
    console.log(e.detail.value)
    this.setData({
      add_id:parseInt(e.detail.value)
    })
  },
  getToday_num(e){
    console.log(e.detail.value)
    this.setData({
      add_today_num:parseInt(e.detail.value)
    })
  },
  getActive_name(e){
    console.log(e.detail.value)
    this.setData({
      add_active_name:e.detail.value
    })
  },
  getTime(e){
    console.log(e.detail.value)
    this.setData({
      add_time:e.detail.value
    })
  },
  getPlase(e){
    console.log(e.detail.value)
    this.setData({
      add_plase:e.detail.value
    })
  },
  getActive_detail(e){
    console.log(e.detail.value)
    this.setData({
      add_active_detail:e.detail.value
    })
  },
  addActivity(e){
    console.log(e.detail.value)
    wx.cloud.database().collection('dateTextArr').add({
      data:{
        id:this.data.add_id,
        today_num:this.data.add_today_num,
        content:[
          this.data.add_active_name,
          this.data.add_time,
          this.data.add_plase,
          this.data.add_active_detail
        ]
      },
      success(res){
        console.log('新增成功！')
        wx.showToast({
          title: '新增成功',
        })
        wx.reLaunch({
          url: '../month_calendar/month_calendar'
        })
      },
      fail(res){
        console.log('新增失败！')
      }
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