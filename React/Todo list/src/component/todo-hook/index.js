import React, {useState, useEffect} from 'react';
import './index.css';
import TodoInput from './component/todo-input.js';
import TodoList from './component/todo-list.js';
import TodoStats from './component/todo-stats.js';

// 本地存储只需要读一次就行了
// 避免 组件重新渲染 都读一遍
let localData = window.localStorage.getItem('todo');
localData = localData ? JSON.parse(localData) : [];

function Todo() {
    let [list, setList] = useState(localData);

    // Effect
    // Save data to localStorage, and we only monitor the change of 'list' state.
    useEffect(()=>{
        console.log('最新数据已被保存');
        window.localStorage.setItem('todo', JSON.stringify(list));
    },[list])



    // Add new todo item
    function addNewItem(txt) {
        list.push({
            id: Date.now(),
            done: false,
            txt
        })

        setList([...list]);
    }

    // Mark item completed
    function changeItemDone(id, isDone) {
        list.forEach(item=>{
            if(item.id===id) {
                item.done = isDone;
            }
        });

        setList([...list]);
    }

    // Delete item
    function deleteItem(id) {
        list = list.filter(item => item.id!==id);
        setList(list);
    }

    // Delete multiple items
    function deleteMultipleItems() {
        list =  list.filter(item => !item.done);
        setList(list);
    } 
    
    // Edit content of item
    function editItem(id, txt) {
        list.forEach(item=>{
            if(item.id===id) {
                item.txt = txt;
            }
        });

        setList([...list]);
    }


    return (
        <div id="todoapp">
            <div className="title">
                <h1>todos</h1>
            </div>
            <div className="content">
                <TodoInput
                    addNewItem={addNewItem}
                />
                <TodoList
                    list={list}
                    changeItemDone={changeItemDone}
                    deleteItem={deleteItem}
                    editItem={editItem}
                />
                <TodoStats
                    list={list}
                    deleteMultipleItems={deleteMultipleItems}
                />
            </div>
        </div>
    );
}

export default Todo
