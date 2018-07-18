import "../CSS/todoList.css"
import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todos: [{
                id:'1',
                name: 'Parking Lot APP Refactor',
                isComplete:false
            },
                {
                    id:'2',
                    name: 'Parking Lot APP 时序图 ',
                    isComplete:true
                },
                {
                    id:'3',
                    name: 'Parking Lot APP 中类的流程图',
                    isComplete:false
                },{
                    id:'4',
                    name: '总结Java和面向对象相关的概念和知识',
                    isComplete:true
                },
                {
                    id:'5',
                    name: '总结Parking Lot APP开发过程中的问题和经验',
                    isComplete:false
                }]
        }
    }

    addItem=()=>{
        let toAdd = this.refs.todoInput.value;
        let todos = this.state.todos;
        todos.push({id:this.generateUUID(),name:toAdd,complete:false});
        this.setState(todos);
    }
    checkItem=(viewId,event)=>{
        // this.state.todos.find(item => item.id === viewId).complete=event.target.checked;
        // this.setState({todos:this.state.todos});
        this.state.todos.find(item=>item.id === viewId).complete=event.target.checked;
        this.setState({todos:this.state.todos});
    }
    generateUUID=()=> {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }
    render(){
        var todos = this.state.todos;
        return(
            <div className="container">
                <h1>TodoList</h1>
                <div>
                    <input ref="todoInput" className="input-text" type="text" name="ListItem"/>
                    <div id="button" onClick={this.addItem}>Add</div>
                </div>
                <br/>
                <ol>
                    {todos.map(todo=>{
                        return <li id={todo.id} className={todo.complete?'checked':''}><input name="done-todo"  onChange={(e)=>this.checkItem(todo.id,e)} type="checkbox" className="done-todo"/> {todo.name} </li>
                    })}
                </ol>
            </div>
        )
    }

}