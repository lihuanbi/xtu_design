//app.js
App({
  onLaunch: function () {
    //云空间初始化
    wx.cloud.init({
      env:'test01-zrbyg'
    })
  }
})