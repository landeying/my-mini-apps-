// pages/details/details.js
Page({
	getDetail:function(){
		wx.request({
			url: 'http://127.0.0.1:3000/detaillist',
			success:res=>{
				this.setData({
					list:res.data
				})
			}
		})
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
	goShopCart:function(){
		if (this.data.arr.length > 0) {
			wx.switchTab({
				url: '/pages/shopcart/shopcart',
			})
		}else{
			wx.showToast({
				title: '请先添加到购物车',
				icon:'none'
			})
		}
	
	},
	addCart:function(e){
		var arr = wx.getStorageSync('cart') || []
		var goodslist = this.data.goodslist
    var flag = true
    for (var i = 0; i < goodslist.length; i++) {
      if (e.target.dataset.id == goodslist[i].id) {
				if (arr.length > 0) {
					for (var j in arr) {
						if (arr[j].id == goodslist[i].id) {
							wx.showToast({
								title: '请勿重复添加',
								icon: 'none'
							})
							flag = false
						} else {
							flag = true
						}
					}
				}
        if (flag) {
          arr.push(goodslist[i])
          this.setData({
            arr
          })
          wx.setStorageSync('cart', this.data.arr)
          wx.showToast({
            title: '添加成功',
            icon: 'success'
          })
        }
      }
    }
	},
	/**
	 * 页面的初始数据
	 */
	data: {
			arr:[],
			list:[],
			goodslist:[],
			id:""
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getDetail()
		this.getGoodsList()
		this.setData({
			id:options.id
		})
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