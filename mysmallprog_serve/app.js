//app.js
//加载模块
const express=require("express");
//创建express对象
var app=express();


//指定静态目录
app.use(express.static(__dirname+"/public"))
//绑定监听事件
app.listen(3000);
app.get("/imagelist",(req,res)=>{
    var list=[
        { id: 1, img_url:"http://127.0.0.1:3000/img/banner/banner(1).jpg"},
        { id: 2, img_url:"http://127.0.0.1:3000/img/banner/banner(2).jpg"},
        { id: 3, img_url:"http://127.0.0.1:3000/img/banner/banner(3).jpg"},
        { id: 4, img_url:"http://127.0.0.1:3000/img/banner/banner(4).jpg"},
        { id: 5, img_url:"http://127.0.0.1:3000/img/banner/banner(5).jpg"},
        { id: 6, img_url:"http://127.0.0.1:3000/img/banner/banner(6).jpg"},    
    ]
    res.send(list)
});
app.get("/iconlist",(req,res)=>{
    var list=[
        { id: 1,title:"尚城超市", img_url:"http://127.0.0.1:3000/img/icon/icon(1).png"},
        { id: 2,title:"尚城优惠",img_url:"http://127.0.0.1:3000/img/icon/icon(2).png"},
        { id: 3,title:"尚城拼购", img_url:"http://127.0.0.1:3000/img/icon/icon(3).png"},
        { id: 4,title:"尚城鲜果",img_url:"http://127.0.0.1:3000/img/icon/icon(4).png"},
        { id: 5,title:"尚城时尚", img_url:"http://127.0.0.1:3000/img/icon/icon(5).gif"},
        { id: 6, title:"更多",img_url:"http://127.0.0.1:3000/img/icon/icon(6).png"},    
    ]
    res.send(list)
});
app.get("/disclist",(req,res)=>{
    var list = [
        {id:1,dtime:"剩3天",catalog:"手机",img_url:"http://127.0.0.1:3000/img/phone/phone/phone3.jpg",title:"限时优惠",subtitle:"11月手机品类日"},
        {id:2,dtime:"剩2天",catalog:"服饰",img_url:"http://127.0.0.1:3000/img/cloth/cloth1.jpg",title:"新品低至89元起",subtitle:"范思蓝恩潮搭暖冬"},
        {id:3,dtime:"剩5天",catalog:"服饰",img_url:"http://127.0.0.1:3000/img/cloth/cloth2.jpg",title:"48小时新品九折",subtitle:"晚白冬季新品"},
        {id:4,dtime:"剩3天",catalog:"服饰",img_url:"http://127.0.0.1:3000/img/cloth/cloth5.jpg",title:"专区49元封顶",subtitle:"女士T恤专场"},
        {id:5,dtime:"剩2天",catalog:"服饰",img_url:"http://127.0.0.1:3000/img/cloth/cloth7.jpg",title:"2件7.5折",subtitle:"HCollection品牌闪购"},
        {id:6,dtime:"剩1天",catalog:"数码",img_url:"http://127.0.0.1:3000/img/phone/AI/AI (2).jpg",title:"智能家居低至9.9",subtitle:"智能专场"},
    ]
    res.send(list)
})
app.get("/spmimagelist",(req,res)=>{
    var list = [
        {id:1,img_url:"http://127.0.0.1:3000/img/spm/spm (21).jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/spm/spm (22).jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/spm/spm (23).jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/spm/spm (24).jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/spm/spm (25).jpg"},
        {id:6,img_url:"http://127.0.0.1:3000/img/spm/spm (26).jpg"},
        {id:7,img_url:"http://127.0.0.1:3000/img/spm/spm (27).jpg"}
    ]
    res.send(list)
})
app.get("/spmshoplist",(req,res)=>{
    var list = [
        {id:1,now:"1",old:"1.5",title:"恰恰 山核桃味瓜子18g",img_url:"http://127.0.0.1:3000/img/spm/spm (20).jpg"},
        {id:2,now:"9.9",old:"23",title:"十月稻香 荞麦米1kg",img_url:"http://127.0.0.1:3000/img/spm/spm (2).jpg"},
        {id:3,now:"5.9",old:"29.9",title:"果迎鲜 进口南非西柚 2个装",img_url:"http://127.0.0.1:3000/img/spm/spm (5).jpg"},
        {id:4,now:"9.9",old:"29.9",title:"大王纸尿裤1",img_url:"http://127.0.0.1:3000/img/spm/spm (6).jpg"},
        {id:5,now:"19.9",old:"59.9",title:"安井 火锅油条 500g",img_url:"http://127.0.0.1:3000/img/spm/spm (4).jpg"},
        {id:6,now:"9.9",old:"28.9",title:"Zespri佳沛 新西兰阳光金奇异果 ",img_url:"http://127.0.0.1:3000/img/spm/spm (7).jpg"},
        {id:7,now:"19.9",old:"49.9",title:"京东海外直采 德国Frosch柠檬浓缩洗洁精 750ml 原装进口",img_url:"http://127.0.0.1:3000/img/spm/spm (3).jpg"}
    ]
    res.send(list)
})
app.get("/spmsqalist",(req,res)=>{
    var list = [
        {id:1,img_url:"http://127.0.0.1:3000/img/spm/spm (11).jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/spm/spm (12).jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/spm/spm (15).jpg"},
    ]
    res.send(list)
})

const qs = require("querystring")
app.post("/postProduct",(req,res)=>{
    req.on("data",(buff)=>{
        var obj = qs.parse(buff.toString())
        var pno = obj.pno
        var price = obj.price
        res.send({code:1,msg:":"+pno+":"+price})
    })
})
app.get("/shoplist",(req,res)=>{
    var list = [
        {id:1,now:"1.00",old:"1.50",title:"洽洽 山核桃味瓜子18g",img_url:"http://127.0.0.1:3000/img/spm/spm (20).jpg",count:1},
        {id:2,now:"9.99",old:"23.00",title:"十月稻香 荞麦米1kg",img_url:"http://127.0.0.1:3000/img/spm/spm (2).jpg",count:1},
        {id:3,now:"5.99",old:"29.99",title:"果迎鲜 进口南非西柚 2个装",img_url:"http://127.0.0.1:3000/img/spm/spm (5).jpg",count:1},
        {id:4,now:"9.99",old:"29.99",title:"大王纸尿裤1",img_url:"http://127.0.0.1:3000/img/spm/spm (6).jpg",count:1},
        {id:5,now:"19.99",old:"59.99",title:"安井 火锅油条 500g",img_url:"http://127.0.0.1:3000/img/spm/spm (4).jpg",count:1},
        {id:6,now:"9.99",old:"28.99",title:"Zespri佳沛 新西兰阳光金奇异果 ",img_url:"http://127.0.0.1:3000/img/spm/spm (7).jpg",count:1},
        {id:7,now:"19.99",old:"49.99",title:"京东海外直采 德国Frosch柠檬浓缩洗洁精 750ml 原装进口",img_url:"http://127.0.0.1:3000/img/spm/spm (3).jpg"}
    ]
    res.send(list)
})
app.get("/detaillist",(req,res)=>{
    var list = [
        {id:1,img_url:"http://127.0.0.1:3000/img/detail/details1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/detail/details2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/detail/details3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/detail/details4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/detail/details5.jpg"},
        {id:6,img_url:"http://127.0.0.1:3000/img/detail/details6.jpg"},
        {id:7,img_url:"http://127.0.0.1:3000/img/detail/details7.jpg"},
        {id:8,img_url:"http://127.0.0.1:3000/img/detail/details8.jpg"},
        {id:9,img_url:"http://127.0.0.1:3000/img/detail/details9.jpg"},
        {id:10,img_url:"http://127.0.0.1:3000/img/detail/details10.jpg"},
        {id:11,img_url:"http://127.0.0.1:3000/img/detail/details11.jpg"},
        {id:12,img_url:"http://127.0.0.1:3000/img/detail/details12.jpg"},
        {id:13,img_url:"http://127.0.0.1:3000/img/detail/details13.jpg"},
        {id:14,img_url:"http://127.0.0.1:3000/img/detail/details14.jpg"}
    ]
    res.send(list)
})
