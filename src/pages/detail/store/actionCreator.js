import * as constants from './constants'
import axios from 'axios';
// import {fromJS} from 'immutable'

const changeDetail =(title,content)=>({
  type:constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetailInfo=(dispath)=>{
  return (dispatch) =>{
    axios.get('/api/detail.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeDetail(result.title,result.content))
    })

  }
}




