import React from 'react';
import TodoItem from './todo-item.js';

export default function TodoList(props) {
    return (
        <ul id="todo-list">
            {props.list.map(el=>{
                return <TodoItem 
                            item={el}
                            key={el.id}
                            changeItemDone={props.changeItemDone}
                            deleteItem={props.deleteItem}
                            editItem={props.editItem}
                       />
            })}
            {/* <TodoItem/> */}
        </ul>
    );
}