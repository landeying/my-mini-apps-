// pages/spm/spm.js
Page({
	getSpmImageList:function(){
		wx.request({
			url: 'http://127.0.0.1:3000/spmimagelist',
			success: (res) => {
				console.log(res)
				this.setData({
					list: res.data
				})
			}
		})
	},
	getSpmShopList:function(){
		wx.request({
			url:'http://127.0.0.1:3000/spmshoplist',
			success:(res)=>{
				console.log(res)
				this.setData({
					shoplist:res.data
				})
			}
		})
	},
	getQaList:function(){
		wx.request({
			url:'http://127.0.0.1:3000/spmsqalist',
			success:(res)=>{
				this.setData({
					qalist:res.data
				})
			}
		})
	},
	handleToGList:function(){
		wx.navigateTo({
			url: '/pages/goodslist/goodslist',
		})
	},
	handleToDetails:function(e){
		console.log(e)
		for (var i = 0; i < this.data.list.length; i++) {
			if (e.currentTarget.dataset.id == this.data.list[i].id) {
				this.data.id = this.data.list[i].id
				wx.navigateTo({
					url: '/pages/details/details?id=' + this.data.id
				})
			}
		}
	},
	/**
	 * 页面的初始数据
	 */
	data: {
		list:[],
		shoplist:[],
		qalist:[],

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getSpmImageList()
		this.getSpmShopList()
		this.getQaList()
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