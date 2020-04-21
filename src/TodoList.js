import React,{ Component } from 'react';
import store from './store'
import { connect } from 'react-redux'


const TodoList =(props) => {
  const { inputValue,handleClick,handleInputChange,list} =props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange}/>
          <button onClick={handleClick}>提交</button> 
        </div>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
         
        </ul>
      </div>
    )
}
// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = store.getState()
//   }
//   render() {
    
//   }
// }

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {

      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action)
      console.log(e.target.value)
    },
    handleClick(){
      const action = {
        type:'add_item'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)