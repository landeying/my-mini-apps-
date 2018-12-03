// pages/home/home.js
var sectionData = [];
var ifLoadMore = null;
var activityId = null;
var page = 1;//默认第一页
Page({
	getImageList:function(){
		wx.request({
			url: 'http://127.0.0.1:3000/imagelist',
			success:(res)=>{
				this.setData({
					list: res.data
				})
			}
		})
	},
	getIconList:function(){
		wx.request({
			url: 'http://127.0.0.1:3000/iconlist',
			success: (res) => {
				this.setData({
					iconlist: res.data
				})
			}
		})
	},
	getGoodsList:function(){
		wx.request({
			url: 'http://127.0.0.1:3000/shoplist',
			success: res => {
				this.setData({
					col1: res.data,
				})
			}
		})
	},
	//为六宫格中的内容绑定事件
	handleJumpMore:function(event){
		var id = event.target.dataset.id
		console.log(id)
		if (id == 1) {
			wx.navigateTo({
				url: '/pages/spm/spm'
			})
		}
		else if(id == 2){
			wx.navigateTo({
				url: '/pages/discounts/discounts',
			})
		} 
	},

  /**
   * 页面的初始数据
   */
  data: {
		list:[],
		iconlist:[],
		col1:[],
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
			this.getImageList()
			this.getIconList()
			this.getGoodsList()
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