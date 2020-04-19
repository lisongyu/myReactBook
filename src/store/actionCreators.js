import { CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
 } from './actionTypes';
export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM  
})
export const getDeteleItemAction = (index) => ({
    
  type:DELETE_TODO_ITEM,
  index
    
})

export const initListAction = (data) => ({
  type:INIT_LIST_ACTION,
  data  
})

export const getInitList = () => ({
  type:GET_INIT_LIST
})
// thunk 方法调用
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/list.json').then((res)=>{
//       const data =res.data
//       console.log(data)
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }