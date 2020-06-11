import {fromJS} from 'immutable'
const defaultState = fromJS({
 topicList:[
   {
  id:1,
  title:'社会热点',
  imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  
 },
 {
  id:2,
  title:'手绘',
  imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  
 }
],
articleList:[
  {
    id:1,
    title:'胡歌12年后首谈车祸:既然活下来了，就不能拜拜活着',
    desc:'买大人01 胡歌又刷屏了，今日他上了昂读者，而这一次',
    imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },
  {
    id:1,
    title:'胡歌12年后首谈车祸:既然活下来了，就不能拜拜活着',
    desc:'买大人01 胡歌又刷屏了，今日他上了昂读者，而这一次',
    imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },
  {
    id:1,
    title:'胡歌12年后首谈车祸:既然活下来了，就不能拜拜活着',
    desc:'买大人01 胡歌又刷屏了，今日他上了昂读者，而这一次',
    imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }
],
recommendList:[
  {
    id:1,
    imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },
  {
    id:2,
    imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },
  {
    id:3,
    imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },
  {
    id:4,
    imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }
]
});

export default (state = defaultState, action) => {
    switch(action.type) {
     
      default:
        return state;
    }
}