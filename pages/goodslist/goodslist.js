// pages/compoments/goodslist/goodslist.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
			goodslist:[],
			id:""
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		 this.getGoodsList()
	},
	getGoodsList: function () {
		wx.request({
			url: 'http://127.0.0.1:3000/shoplist',
			success: res => {
				this.setData({
					goodslist: res.data
				})
			}
		})
	},
	handleJumpToShop: function (e) {
		for (var i = 0; i < this.data.goodslist.length;i++){
			if (e.currentTarget.dataset.id+1== this.data.goodslist[i].id){
				this.data.id = this.data.goodslist[i].id
				wx.navigateTo({
					url: '/pages/details/details=' + this.data.id
				})
			}else
				return			
		}
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