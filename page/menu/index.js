Page({
  data: {
    list: [
      {
        id: 'pancake',
        name: '班戟',
        open: false,
        pages: [
          {
            zh: '芒果班戟',
            url: 'mango/mango'
          }
        ]
      },     {
        id: 'storage',
        name: '数据',
        url: 'storage/storage'
      }
    ],
        cartTotal: 0

  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if(list[i].url){
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
