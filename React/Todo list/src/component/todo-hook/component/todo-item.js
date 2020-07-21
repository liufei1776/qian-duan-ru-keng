import React, {useState, useRef, useEffect} from 'react';

export default function TodoItem(props) {
    let {item, changeItemDone, deleteItem, editItem} = props;

    // State
    let [editValue, setEditValue] = useState(item.txt);  // 表单受控组件
    let [isEdit, setIsEdit] = useState(false);

    // Ref
    let editInputRef = useRef();

    // Effect
    // If it's under editing, the input element is focused.
    useEffect(()=>{
        if(isEdit===true) {
            editInputRef.current.focus();
        }
    },[isEdit]);

    return (
        <li className={isEdit ? "editing" : ""}>
            <div className={"todo" + (item.done ? " done": "")}>

                {/* 未编辑状态 */}
                <div className="display">
                    {/* 勾选checkbox */}
                    <input 
                        className="check" 
                        type="checkbox"
                        onChange={(e)=>{
                            changeItemDone(item.id, e.target.checked);
                        }}
                    />

                    {/* 双击击可编辑 */}
                    <div className="todo-content"
                        onDoubleClick={()=>{setIsEdit(true)}}
                    >
                        {item.txt}
                    </div>

                    {/* 删除按钮 */}
                    <span className="todo-destroy"
                        onClick={() => {deleteItem(item.id)}}
                    ></span>
                </div>


                {/* 
                    编辑状态
                    1. 编辑内容；
                    2. 失去焦点退出编辑,且同步数据 
                */}
                <div className="edit">
                    <input className="todo-input" 
                           type="text"
                           ref={editInputRef}
                           value={editValue}
                           onChange={(e)=>{setEditValue(e.target.value)}}
                           onBlur={()=>{
                               if(editValue.trim()) {
                                   editItem(item.id, editValue)
                               }
                               else{
                                   setEditValue(item.txt);
                               }

                               setIsEdit(false)
                            
                            }}
                    />
                </div>
            </div>
        </li>);
}