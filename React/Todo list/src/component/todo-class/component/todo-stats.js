import React from 'react';

export default class TodoStats extends React.Component {
    render() {
        let {numOfTodoItems, numOfTodoItemsDone, removeMultiples} = this.props;

        return (<div id="todo-stats">
            <span className="todo-count">
              <span className="number">{numOfTodoItems}</span>
              <span className="word">项待完成</span>
            </span>
            <span className="todo-clear"
                  onClick={removeMultiples}
            >
                删除 <span>{numOfTodoItemsDone}</span> 已完成事项
            </span>  
        </div>);
    }
}