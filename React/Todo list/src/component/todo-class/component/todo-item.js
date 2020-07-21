import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            editValue: props.item.txt
        };
        this.editInput = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        // 进入编辑状态？--上一次 isEdit 为false， 当前为 true
        if(prevState.isEdit === false && this.state.isEdit === true) {
            this.editInput.current.focus();
        }
        
    }

    // 当我们进入编辑时，一定要输入框先获得焦点，否则离开输入框无法触发失焦事件
    render() {
        let {item, changeDone, remove, edit} = this.props;
        let {isEdit, editValue} = this.state;

        return (<li className={isEdit?'editing':''}>
            <div className={`todo${item.done?' done':''}`}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox"
                        checked={item.done}
                        onChange={(e)=>{
                            changeDone(item.id, e.target.checked)
                        }}
                    />
                    {/* 双击击可编辑 */}
                    <div className="todo-content"
                         onDoubleClick={()=>{
                             this.setState({isEdit: true});
                            //  不能在这里focus，因为组件还没有重新渲染完成
                            //  this.editInput.current.focus();
                         }}
                    >
                        {item.txt}
                    </div>
                    {/* 删除按钮 */}
                    <span className="todo-destroy" 
                          onClick={()=>{remove(item.id)}}>       
                    </span>
                </div>
                {/* 编辑内容；失去焦点退出编辑,且同步数据 */}
                <div className="edit">
                    <input className="todo-input" 
                           type="text" 
                           value={editValue}
                           ref={this.editInput}
                           onBlur={()=>{
                               // 内容不为空，则同步数据
                               if(editValue.trim()) {
                                 edit(item.id, editValue);
                               }
                               else {
                                    // 否则，保持原数据
                                    this.setState({editValue: item.txt});
                               }
                               this.setState({isEdit: false})
                           }}
                           onChange={(e)=>{
                               this.setState({editValue: e.target.value});
                           }}
                    />
                </div>
            </div>
        </li>)
    }
}



export default TodoItem;