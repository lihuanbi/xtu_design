// pages/me/me.js
Page({
data:{
  loginOK:false
},
 toLogin:function(){
   wx.navigateTo({
     url: '/pages/login/login',
   })
 },
 exit:function(){
   wx.setStorageSync('users', null)
   let users=wx.getStorageSync('users')
  if(users&&users.nickname){
    this.setData({
      loginOK:true
    })
  }else{
    this.setData({
      loginOK:false
    })
  }
 },

onShow(){
  let users=wx.getStorageSync('users')
  //console.log("users",users.nickname)
  if(users&&users.nickname){
    this.setData({
      nickname:users.nickname,
      loginOK:true
    })
  }else{
    this.setData({
      loginOK:false
    })
  }
},

toAdd(e){
  wx.reLaunch({
    url: '/pages/add_activity/add_activity',
  })
},
toRemember(e){
  wx.reLaunch({
    url: '/pages/index/index',
  })
}

})
