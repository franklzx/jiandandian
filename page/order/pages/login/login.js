Page({
data:{
carts: [
{cid:1008,title:'Zippo打火机',image:'https://img12.360buyimg.com/n7/jfs/t2584/348/1423193442/572601/ae464607/573d5eb3N45589898.jpg',num:'1',price:'198.0',sum:'198.0',selected:true},
{cid:1012,title:'iPhone7 Plus',image:'https://img13.360buyimg.com/n7/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg',num:'1',price:'7188.0',sum:'7188.0',selected:true},
{cid:1031,title:'得力订书机',image:'https://img10.360buyimg.com/n7/jfs/t2005/172/380624319/93846/b51b5345/5604bc5eN956aa615.jpg',num:'3',price:'15.0',sum:'45.0',selected:false},
{cid:1054,title:'康师傅妙芙蛋糕',image:'https://img14.360buyimg.com/n7/jfs/t2614/323/914471624/300618/d60b89b6/572af106Nea021684.jpg',num:'2',price:'15.2',sum:'30.4',selected:false},
{cid:1063,title:'英雄钢笔',image:'https://img10.360buyimg.com/n7/jfs/t1636/60/1264801432/53355/bb6a3fd1/55c180ddNbe50ad4a.jpg',num:'1',price:'122.0',sum:'122.0',selected:true},
],minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
bindMinus: function(e) {
var index = parseInt(e.currentTarget.dataset.index);
var num = this.data.carts[index].num;
// 如果只有1件了，就不允许再减了
if (num > 1) {
num --;
}
// 只有大于一件的时候，才能normal状态，否则disable状态
var minusStatus = num <= 1 ? 'disabled' : 'normal';
// 购物车数据
var carts = this.data.carts;
carts[index].num = num;
// 按钮可用状态
var minusStatuses = this.data.minusStatuses;
minusStatuses[index] = minusStatus;
// 将数值与状态写回
this.setData({
carts: carts,
minusStatuses: minusStatuses
});
},
bindPlus: function(e) {
var index = parseInt(e.currentTarget.dataset.index);
var num = this.data.carts[index].num;
// 自增
num ++;
// 只有大于一件的时候，才能normal状态，否则disable状态
var minusStatus = num <= 1 ? 'disabled' : 'normal';
// 购物车数据
var carts = this.data.carts;
carts[index].num = num;
// 按钮可用状态
var minusStatuses = this.data.minusStatuses;
minusStatuses[index] = minusStatus;
// 将数值与状态写回
this.setData({
carts: carts,
minusStatuses: minusStatuses
});
},
}
})