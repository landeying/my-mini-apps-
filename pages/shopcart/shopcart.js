// pages/shopcart/shopcart.js
Page({
	/* 增加商品数量*/
	handleAdd:function(e){
		var that = this
		var total = that.data.total
		var cart = that.data.cart
		var index = e.target.dataset.index
		var price = cart[index].now
		if (cart[index].count > 0 && cart[index].count<20){
			cart[index].count++
			if(cart[index].checked){
				total += parseFloat(price)
				total = this.toPrice(total)
			}
			this.setData({
				cart,
				total
			})
			wx.setStorageSync('total', this.data.total)
			wx.setStorageSync('cart', this.data.cart)
		}else{
			return
		}
	},
	/* 减少商品数量*/
	handeleSub:function(e){
		var that = this
		var cart = that.data.cart
		var total = that.data.total
		var index = e.target.dataset.index
		var price = cart[index].now
		if (cart[index].count>1){
			cart[index].count--
		if(cart[index].checked){
			total -= parseFloat(price)
			console.log(total)
			total = this.toPrice(total)
		}
			this.setData({
				cart,
				total
			})
			wx.setStorageSync('total', this.data.total)
			wx.setStorageSync('cart', this.data.cart)
		}else{
			return
		}

	},
	toPrice:function(num){
		return Math.round(num*100)/100
	},
	/*单选商品 */
	handleSelect:function(e){
		var total = this.data.total
		var cart = this.data.cart
		if(e.detail.value!=''){
			for (var i in cart){
				if (e.detail.value == cart[i].id){
					total += parseFloat(cart[i].now * cart[i].count)
					total = this.toPrice(total)
					cart[i].checked = true
				}
				this.setData({
					cart,
					total,
				})
				console.log(total)
				wx.setStorageSync('total', this.data.total)
				wx.setStorageSync('cart', this.data.cart)
			}
		}else{
			for (var i in cart){
				if (cart[i].id==e.target.dataset.index){
					total -= parseFloat(cart[i].now * cart[i].count)
					total = this.toPrice(total)
					cart[i].checked = false
				}
				this.setData({
					cart,
					total,
				})
				wx.setStorageSync('total', this.data.total)
				wx.setStorageSync('cart', this.data.cart)
			}
		}	
	},
	/*删除商品 */
	handleDel:function(e){
		console.log(e)
		var cart = this.data.cart
		for(var i in cart){
			if(e.target.dataset.id==cart[i].id){
				cart.splice(i,1)
			}
			this.setData({
				cart,
				isShow: true,
				isCart: false,
				total:0
			})
			wx.setStorageSync('cart', this.data.cart)
		}
		this.onShow()
	},
	/*显示商品 */
	onshow:function(){
		var cart = wx.getStorageSync('cart') || []
		var total = wx.getStorageSync('total') || 0
		if (cart.length>0){
			this.setData({
					cart,
					total,
					isShow: true,
					isCart: false,
				})
		}else{
			this.setData({
				isShow: false,
				isCart: true
			})
		}
	},
	/**
	 * 页面的初始数据
	 */
	data: {
		cart:[],
		isShow:false,
		isCart:true,
		total:0,
		checked:false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.onshow()
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
		this.onLoad()
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