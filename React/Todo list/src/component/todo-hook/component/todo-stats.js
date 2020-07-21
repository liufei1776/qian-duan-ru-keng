import React from 'react';

export default function TodoStats(props) {
    let itemsTobeRemoved = props.list.filter(item=>item.done)

    return (<div id="todo-stats">
        <span className="todo-count">
        <span className="number"></span>
            <span className="word">{props.list.length} 项待完成</span>
        </span>
        <span className="todo-clear"
            onClick={props.deleteMultipleItems}
        >
            删除 <span>{itemsTobeRemoved.length}</span> 已完成事项
        </span>  
    </div>);
}