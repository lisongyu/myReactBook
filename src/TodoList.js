import React,{ Component,Fragment } from "react"
import './style.css'
import TodoItem from './todoItem'
import axios from 'axios'
class TodoList extends Component {

    constructor(props){
        super(props);
        this.state={
            inputValue:'hello',
            list:['学英语','learning react']
        }
        this.handInputChange=this.handInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }

    handInputChange(e){
        const inputValue=e.target.value
        this.setState(()=>
            ({
                inputValue
            })
        )
     
    }

    handleButtonClick(){
        this.setState((preState)=>({
            list:[...preState.list,preState.inputValue],
            inputValue:'' 
        }),()=>{
            console.log(this.ul)
            console.log(this.ul.querySelectorAll('li').length);
       
        }
        )
    }
       

    handleItemDelete(index){
        this.setState((preState)=>{
            let list=[...preState.list]
            list.splice(index,1)
            return {list}
        }
            
        )
    }

    getTodoItem(){
       return this.state.list.map((item,index)=>{
            return(
                <TodoItem 
                item={item} 
                key={index}
                index={index}
                deleteItem={this.handleItemDelete} 
                />
              
            )

        })
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    //组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后
    //如果shouldComponentUpdate返回true它才执行
    //如果为false就不会被执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    //组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidMount(){
        axios.get('http://fldev.m.cnsuning.com:3000/api/todolist')
        .then((res)=>{
            console.log(res.data)
            this.setState(()=>
            ({
                list:res.data
            })
        )
           
        }).catch(()=>{
            console.log('error')
        })
        console.log('componentDidMount')
    }
    
    render() {
       console.log('render')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">请输入内容</label>
                    <input 
                    id="insertArea"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handInputChange}
                    ref={(input)=> {this.input= input}}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )

    }
}

export default TodoList