//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    count: 0
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
    // 获取scroll-view的节点信息
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('.container').boundingClientRect()
    query.select('.list').boundingClientRect()
    query.exec((res) => {
      var containerHeight = res[0].height;
      var listHeight = res[1].height;

      // 滚动条的高度增加
      var interval = setInterval(() => {
        if (this.data.scrollTop < listHeight - containerHeight) {
          this.setData({
            scrollTop: this.data.scrollTop + 10
          })
        } else {
          // clearInterval(interval);
          this.setData({
            scrollTop: 0
          })
        }
      }, 1000)
    })

  },
  scroll: function () {
    // 获取scroll-view的节点信息
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('.list').boundingClientRect()
    query.exec((res) => {
      this.setData({
        scrollTop: -(res[0].top)
      })
      // console.log(res);
    })
  },
  add: function () {
    this.setData({
      count: this.data.count + 1
    })
  }
})