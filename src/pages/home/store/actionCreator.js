import * as constants from './constants'
import axios from 'axios';
import {fromJS} from 'immutable'

const addHomeList=(list,nextPage)=>({
  type:constants.ADD_HOME_LIST,
  list:fromJS(list),
  nextPage
})

export const getMoreList = (page) => {
  return (dispatch) =>{
    axios.get('/api/homeList.json?page=' +page).then((res)=>{
      const data = res.data;
      dispatch(addHomeList(data.data, page+1))
    
    }).catch(()=>{
      console.log('error')
    })
  }
}
const changeHomeData =(result) => ({
  type:constants.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
})
export const getHomeInfo = () =>{
  return (dispatch) =>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })

  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

