import React from 'react';
import TodoItem from './todo-item.js'

class TodoList extends React.Component {
    render() {
        let {list, changeDone, remove, edit} = this.props;
        return (
            <ul id="todo-list">
                {list.map((el) => {
                    return <TodoItem 
                            item={el} 
                            key={el.id} 
                            changeDone={changeDone}
                            remove={remove}
                            edit={edit}
                        />
                })}
            </ul>
        );
    }
}

export default TodoList;