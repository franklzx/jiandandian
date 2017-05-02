Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    pancakePics:[  
                  {url:'../../resources/kind/pancake_mango1.png'} ,  
                  {url:'../../resources/kind/pancake_mango2.png'} ,  
                    {url:'../../resources/kind/pancake_mango3.png'} 
           ], 
					 dishesList:[
			[
				{
					name:"大份",
					price:38,
					num:1,
					id:1,
				},
				{
					name:"中份",
					price:28,
					num:1,
					id:2,
				},
				{
					name:"小份",
					price:18,
					num:1,
					id:3,
				}
			]
			],
dishes:[],
   items: [
      {value: 'big', name: '大  15RMB'},
      {value: 'middle', name: '中  10RMB', checked: 'true'},
      {value: 'small', name: '小  5RMB'}
    ],            
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  
loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},500)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let price = event.currentTarget.dataset.price*1;
		let flag = true;
		let	cart = this.data.cart;
		let total = this.data.cartTotal;
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
					total -= price;
				}
			})
		}
		if(flag){
			cart.push(dish);
			total += price;
		}
		this.setData({
			cartTotal:total
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	},
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})