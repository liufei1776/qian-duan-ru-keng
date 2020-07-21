import React from 'react';
import './index.css';
import TodoInput from './component/todo-input.js';
import TodoList from './component/todo-list.js';
import TodoStats from './component/todo-stats.js';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.changeItemDone = this.changeItemDone.bind(this)
        this.removeTodoItem = this.removeTodoItem.bind(this);
        this.editTodoItemContent = this.editTodoItemContent.bind(this);
        this.removeMultipleTodoItems = this.removeMultipleTodoItems.bind(this);

        // 从本地缓存读取数据
        let data = window.localStorage.getItem('todo');
        data = data ? JSON.parse(data) : [];

        this.state = {
           data
        };
        
    }

    // 将todo item 保存到本地缓存
    componentDidUpdate() {
        let {data} = this.state;
        data = JSON.stringify(data);
        window.localStorage.setItem('todo', data);
    }

    // 新增 todo item
    addNewTodoItem(txt) {
        let {data} = this.state;
        data.push({
            id: Date.now(),
            done: false,
            txt
        })

        this.setState({data});
    }

    // 改变 item 是否完成
    changeItemDone(id, isDone) {
        let {data} = this.state;

        data.forEach(item=>{
            if(item.id === id) {
                item.done = isDone;
            }
        })

        this.setState({data});
    }

    // 删除某一项
    removeTodoItem(id) {
        let {data} = this.state;
        data = data.filter(item => item.id!==id);
        this.setState({data});
    }

    // 删除多项
    removeMultipleTodoItems() {
        let {data} = this.state;
        data = data.filter(item=>!item.done);
        this.setState({data});
    }

    // 可编辑某项功能
    editTodoItemContent(id,txt) {
        let data = this.state.data;
        data.forEach(item=>{
            if(item.id === id) {
                item.txt = txt;
            }
        })
        this.setState({data});
    }

    render() {
        let {data} = this.state;
        let numOfTodoItemsDone = (data.filter(item=>item.done)).length;

        return (
            <div id="todoapp">
            <div className="title">
                <h1>todos</h1>
            </div>
            <div className="content">
                <TodoInput add={this.addNewTodoItem} />
                <TodoList
                    list={data}
                    changeDone={this.changeItemDone}
                    remove={this.removeTodoItem}
                    edit={this.editTodoItemContent}
                />
                <TodoStats 
                    numOfTodoItems={data.length}
                    numOfTodoItemsDone={numOfTodoItemsDone}
                    removeMultiples={this.removeMultipleTodoItems}
                />
            </div>
            </div>
        );
    }
}




 export default Todo;