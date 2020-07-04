// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:0
  },

  getUsername(e){
    //console.log(e.detail.value)
    this.setData({
      username:e.detail.value
    })
  },

  getPassword(e){
    //console.log(e.detail.value)
    this.setData({
      password:e.detail.value
    })
  },

  toSign(e){
    console.log("用户名：",this.data.username)
    console.log("密码：",this.data.password)
    let username=this.data.username
    let password=this.data.password
    if(username.length<1){
      wx.showToast({
        icon:'none',
        title: '用户名至少4位',
      })
      return
    }
    if(password.length<6){
      wx.showToast({
        icon:'none',
        title: '用户名至少6位',
      })
      return
    }
    wx.cloud.database().collection('USER').add({
      data:{
        username:username,
        password:password,
      },
      success(res){
        console.log('注册成功！')
        wx.showToast({
          title: '注册成功',
        })
      },
      fail(res){
        console.log('注册失败！')
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