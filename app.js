App({
  onLaunch: function () {
    //URL初始化
    this.globalData.baseUrl = this.globalData.publicUrl + '/customer';
    this.globalData.init = true;

    //缓存同步
    this.cacheAuthInfo();
  },


  cacheAuthInfo: function(){
    //微信会话
    const third_session = wx.getStorageSync('third_session');
    if(third_session != ''){
      this.globalData.auth.third_session = third_session;
    }
    //服务器会话
    const login_code = wx.getStorageSync('login_code');
    if(login_code != ''){
      this.globalData.auth.login_code = login_code;
    }
    //用户信息
    const user = wx.getStorageSync('user');
    if(user != ''){
      this.globalData.user = user;
    }
  },

  globalData: {
    init: false,
    //购物车缓存
    cart: { num: 0 },
    order: { reload: false },
    //用户缓存
    user: {},
    //权限缓存
    auth: {},
    //店铺缓存
    shop: {
      //code: 'eemTgbKrhqiYKMFowcBCQ1Zr7G13bWUT',
      //name: '连江什么鬼炸鸡店',
      code: 'xemTgbKrhqiYKMFowcBCQ1Zr7G13bWUT',
      name: '示例店铺',
      limitPrice: 0
    },
    //API地址
    //publicUrl: "http://192.168.31.124:9999/api/v1",
    //publicUrl: "http://121.42.178.251:9999/v1",
    publicUrl: "https://api.leshare.shop/v1",
    //publicUrl: "http://api.leshare.shop:9001/v1",
  }
});