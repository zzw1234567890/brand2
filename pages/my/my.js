// pages/list/list.js
Page({

  data: {

    content: [

      {

        id: '01',

      title: '猜数红包怎么玩？',

      contents: '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',

      shows: false

},

{

    id: '02',

  title: '支付后如何发出去？',

  contents: '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',

  shows: false

},

  {

    id: '03',

  title: '好友可以转发我的猜数红包吗？',

  contents: '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',

  shows: false

},

  {

    id: '04',

  title: '发猜数红包会收取服务费吗？',

  contents: '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',

  shows: false

}

]

},

  onLoad() {

 

  },

  showHide(e) {

 

    var contentFor = this.data.content;

 

    for(var i = 0; i<contentFor.length; i++) {

  　　if (e.currentTarget.dataset.changeid == contentFor[i].id) {

    　　　　var printPrice = "content[" + i + "].shows";

    　　　　if (this.data.content[i].shows) {

      　　　　　　this.setData({

        　　　　　　　　[printPrice]: false

      　　　　　　});

    　　　　} else {

      　　　　　　this.setData({

        　　　　　　　　[printPrice]: true

      　　　　　　});

    　　　　}

  　　} else {

    　　　　　　var printPrice1 = "content[" + i + "].shows";

    　　　　　　this.setData({

      　　　　　　　　[printPrice1]: false

    　　　　　　});

  　　　　}

　　}

}

})