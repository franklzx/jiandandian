var app = getApp()

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
	 globalPrice: app.globalData.globalPrice,
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
		console.log('index值为：1',app.globalData.globalPrice)
    app.incrementPrice() 
		this.setData({
			globalPrice:app.globalData.globalPrice
		})
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
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})