Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    pancakePics:[  
                  {url:'http://img0.imgtn.bdimg.com/it/u=1230710324,3936945896&fm=23&gp=0.jpg'} ,  
                  {url:'http://img5.imgtn.bdimg.com/it/u=3375394499,2508883330&fm=23&gp=0.jpg'} ,  
                  {url:'http://img5.imgtn.bdimg.com/it/u=2567668077,2790600426&fm=23&gp=0.jpg'} 
                ],  
   items: [
      {value: 'big', name: '大'},
      {value: 'middle', name: '中', checked: 'true'},
      {value: 'small', name: '小'}
    ],            
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
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