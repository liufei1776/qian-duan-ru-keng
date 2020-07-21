import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        let {add} = this.props;
        let {value} = this.state;

        return (
            <div id="create-todo">
                <input id="new-todo" 
                       placeholder="What needs to be done?"
                       autoComplete="off"
                       type="text"
                       value={value}
                       onChange={(e)=>{ 
                           this.setState({value: e.target.value}) 
                        }}
                       onKeyUp={(e)=>{
                           if(e.keyCode===13){
                              if(!value.trim()) {
                                  alert("请输入点内容吧")
                              }
                              else {
                                  add(value);
                                  this.setState({value: ''});
                              } 
                           }
                       }}
                />
            </div>
        );
    }
}

export default TodoInput;