import React,{ Component } from "react"

import PropTypes from 'prop-types';

 class TodoItem extends Component {
     constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)

     }

     shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item!==this.props.item){
            return true
        }else{
            return false
        }
     }
     handleClick(){
        const {deleteItem,index}=this.props
         deleteItem(index)
        
     }
    render() {
        const {item,test}=this.props
        return (
        <li 
        onClick={this.handleClick}
        >{test}-{item}</li>
        )
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    item: PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps={
    test:'hello world'
}

export default TodoItem