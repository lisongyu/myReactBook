
import React,{ Component } from "react"
import 'antd/dist/antd.css';
import store from './store';
import { 
    getInputChangeAction,
    getAddItemAction,
    // getTodoList,
    // initListAction,
    // getInitAction,
    getDeteleItemAction, 
    getInitList} from './store/actionCreators';
import TodoListUI from './TodoListUi'
class TodoList extends Component {

    constructor(props){
        super(props)
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
      const action = getInitList();
      store.dispatch(action)
      console.log(action)
      // axios.get('/list.json').then((res)=>{
      //   const data =res.data
      //   console.log(data)
      //   const action = initListAction(data)
      //   store.dispatch(action)
      // })
    }

    handleInputChange(e){
        let value = e.target.value
        console.log(value)
       const action = getInputChangeAction(value)
        store.dispatch(action)
    }
    handleBtnClick(){
        const action=getAddItemAction()
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(
            store.getState()
        )
    }
    handleItemDelete(index){
        console.log(index)
        const action=getDeteleItemAction(index)
        store.dispatch(action)
    }


    render() {
      console.log('render')
      return (
        <TodoListUI 
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          handleItemDelete = {this.handleItemDelete}

          list={this.state.list}
        />
      )

    }
}

export default TodoList