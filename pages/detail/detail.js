Page({
  data:{
    title:"",
    result:[]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that=this;
    this.setData({
      title:options.title
    });
    getInfo(this);
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  }
})

function getInfo(that){
  wx.request({
    url: 'http://v.juhe.cn/toutiao/index?type=top&key=a17e1a42796ccd8a2632c73aacb894f8',
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
     console.log(res)
     var data=res.data.result.data;
    // console.log(this)
     that.setData({
       result:data
     })
     console.log(data)
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
}