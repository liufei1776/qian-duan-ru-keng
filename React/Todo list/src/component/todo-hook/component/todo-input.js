import React from 'react';

function TodoInput(props) {
    return (
        <div id="create-todo">
            <input id="new-todo" 
                   placeholder="What needs to be done?"
                   autoComplete="off"
                   type="text"
                   onKeyDown={(e)=>{
                       if(e.keyCode===13){
                           if(e.target.value.trim()) {
                               props.addNewItem(e.target.value);
                               e.target.value="";
                           }
                           else {
                               alert('请输入点内容吧...');
                           }
                       }
                   }}
            />
        </div>
    );
}


export default TodoInput;