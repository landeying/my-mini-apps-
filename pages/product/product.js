// pages/product/product.js
Page({
	checkForm:function(event){
		//获取用户参数
		console.log(event)
		var pno = event.detail.value.pno
		var price = event.detail.value.price
		// 创建正则表达式验证
		var pnoreg = /^[a-z0-9]{6}$/i
		var pricereg = /^[0-9]{1,}(\.[0-9]{1,2})?$/
		// 出错显示提示消息
		if(!pnoreg.test(pno)){
			wx.showToast({
				title: '商品编号格式不正确',
				icon:'none',
				duration:1500
			})
			return
		}
		if(!pricereg.test(price)){
			wx.showToast({
				title: '商品价格不正确',
				icon:'none',
				duration:1500
			})
		}
		// 发送ajax请求，请求服务器
		wx.request({
			url: 'http://127.0.0.1:3000/postProduct',
			method:'POST',
			data:{pno,price},
			header:{
				"Content-Type":"application/x-www-form-urlencoded"
			},
			success:(res)=>{
				console.log(res)
				if(res.data.code == 1){
					wx.showToast({
						title: '商品添加成功',
						duration:1000
					})
				}else{
					wx.showToast({
						title: '商品添加失败',
					})
				}
			}
		})
		// 获取返回数据 提示添加成功
	},
	/**
	 * 页面的初始数据
	 */
	data: {

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